import {freshState,loadState,hasWork,setNote,touchUnit,registerReview,validateState,STORAGE_KEY} from './state.js';
import {createSession} from './session.js';

export function createNotebook({storage,lock,onChange=()=>{}}){
 let loaded=loadState(storage),state=loaded.state,held=null,mode=loaded.error==='invalid'?'invalid':loaded.error==='unavailable'||!lock?'memory':'active',phase=mode==='memory'?'unavailable':'saved',reason=loaded.error,dirty=false,timer=null,epoch=0;
 let recovery=null,session=createSession({storage,lock,initialRaw:loaded.raw});
 if(hasWork(state)){held=state;state=freshState();mode='locked';}
 const editable=()=>mode==='active'||mode==='memory';
 const notify=kind=>onChange({kind,mode,phase,reason,dirty});
 async function flush(){clearTimeout(timer);timer=null;if(mode==='conflict'||recovery)return {ok:false,reason:'conflict'};if(!dirty){await session.idle();return {ok:phase==='saved',reason};}const turn=epoch,snapshot=state;dirty=false;phase='saving';notify('status');const result=await session.save(snapshot);if(turn!==epoch)return result;
  if(result.ok){phase='saved';state.updatedAt=result.updatedAt;reason=null;}else{phase=result.reason;reason=result.reason;mode=result.reason==='conflict'?'conflict':'memory';}notify(result.ok?'status':result.reason);return result;
 }
 function changed(){dirty=true;phase='pending';clearTimeout(timer);timer=setTimeout(flush,220);notify('status');}
 function mutate(callback){if(!editable())return false;callback(state);changed();return true;}
 function note(key,field,value){return mutate(s=>setNote(s,key,field,value));}
 function draft(key,unit,data){return mutate(s=>s.drafts=validateState({...s,drafts:{...s.drafts,[key]:{unit,data}}}).drafts);}
 function removeDraft(key){return mutate(s=>delete s.drafts[key]);}
 function evidence(entry){return mutate(s=>{const candidate=validateState({...s,evidence:s.evidence.some(e=>e.id===entry.id)?s.evidence.map(e=>e.id===entry.id?entry:e):[...s.evidence,entry]});s.evidence=candidate.evidence;touchUnit(s,entry.unit);});}
 function removeEvidence(id){return mutate(s=>{const found=s.evidence.find(e=>e.id===id);s.evidence=s.evidence.filter(e=>e.id!==id);if(found)touchUnit(s,found.unit);});}
 function review(key){if(!editable())return {ok:false,missing:[]};const result=registerReview(state,key);if(result.ok)changed();return result;}
 async function hide(){if(!editable()&&mode!=='conflict')return;await flush();await session.idle();held=state;state=freshState();mode='locked';notify('locked');}
 function resume(){if(mode==='invalid'||recovery)return false;if(held&&phase==='conflict'){state=held;held=null;mode='conflict';notify('resume');return true;}if(!held){mode=phase==='conflict'?'conflict':phase==='unavailable'?'memory':'active';notify('resume');return true;}if(session.changed()&&phase!=='unavailable'){external(false);if(mode==='conflict')return false;}state=held||state;held=null;mode=phase==='unavailable'?'memory':'active';notify('resume');return true;}
 function consult(){mode='consult';notify('consult');}
 async function restore(input){if(!editable())return {ok:false,reason:'readonly'};const candidate=validateState(input);await flush();await session.idle();if(!editable()||session.changed())return {ok:false,reason:'conflict'};const result=await session.save(candidate);if(result.ok){epoch++;state=candidate;held=null;dirty=false;phase='saved';reason=null;mode='active';notify('restored');}return result;}
 async function clear(){await flush();await session.idle();const result=await session.clear();if(result.ok){epoch++;state=freshState();held=null;dirty=false;phase='saved';reason=null;mode='active';notify('deleted');}return result;}
 function external(formDirty=false){if(!session.changed())return;let raw;try{raw=storage.getItem(STORAGE_KEY);}catch{phase='unavailable';mode='memory';notify('unavailable');return;}
  if(raw===null){const pending=dirty||phase==='saving'||phase==='conflict'||formDirty;if(pending&&!recovery)recovery=held||state;epoch++;clearTimeout(timer);state=freshState();held=null;dirty=false;phase=pending?'conflict':'saved';reason=pending?'deleted':null;mode=pending?'conflict':lock?'active':'memory';session=createSession({storage,lock,initialRaw:null});notify(pending?'deleted-conflict':'deleted');return;}
  if(mode==='conflict'||phase==='conflict'||recovery||dirty||phase==='saving'||formDirty){clearTimeout(timer);mode='conflict';phase='conflict';reason=reason==='deleted'?'deleted':'conflict';notify('conflict');return;}
  const next=loadState(storage);if(next.error){mode='conflict';phase='conflict';reason='invalid';notify('conflict');return;}
  epoch++;session=createSession({storage,lock,initialRaw:next.raw});phase='saved';reason=null;
  if(mode==='locked'||mode==='consult'){held=next.state;state=freshState();}else state=next.state;notify('synced');
 }
 function reload(){epoch++;clearTimeout(timer);loaded=loadState(storage);state=loaded.state;held=null;recovery=null;dirty=false;session=createSession({storage,lock,initialRaw:loaded.raw});reason=loaded.error;mode=loaded.error==='invalid'?'invalid':loaded.error||!lock?'memory':'active';phase=mode==='memory'?'unavailable':'saved';if(hasWork(state)){held=state;state=freshState();mode='locked';}notify('reloaded');}
 return {get state(){return state;},get exportState(){return recovery||state;},get reason(){return reason;},get mode(){return mode;},get phase(){return phase;},get dirty(){return dirty;},editable,note,draft,removeDraft,mutate,evidence,removeEvidence,review,flush,hide,resume,consult,restore,clear,external,reload};
}
