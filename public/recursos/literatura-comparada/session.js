import {STORAGE_KEY} from './state.js?v=lc-f1e4fe8c25fd';

// All writers use the same browser lock. The raw baseline detects edits made
// since this tab loaded, including imports and deletion in another tab.
export function createSession({storage,lock,initialRaw}){
 let baseline,readFailed=false,conflicted=false,queue=Promise.resolve();
 try{baseline=initialRaw===undefined?storage.getItem(STORAGE_KEY):initialRaw;}catch{readFailed=true;}
 function changed(){try{return storage.getItem(STORAGE_KEY)!==baseline;}catch{return false;}}
 function run(snapshot,remove=false){
  const job=queue.then(async()=>{
   if(readFailed||!lock)return {ok:false,reason:'unavailable'};
   try{return await lock(()=>{
    if(conflicted||changed()){conflicted=true;return {ok:false,reason:'conflict'};}
    if(remove){storage.removeItem(STORAGE_KEY);baseline=null;return {ok:true};}
    const updatedAt=new Date().toISOString();
    const raw=JSON.stringify({...snapshot,updatedAt});
    storage.setItem(STORAGE_KEY,raw);baseline=raw;
    return {ok:true,updatedAt};
   });}catch{return {ok:false,reason:'unavailable'};}
  });
  queue=job.then(()=>{});return job;
 }
 return {save:state=>run(JSON.parse(JSON.stringify(state))),clear:()=>run(null,true),changed,idle:()=>queue};
}
