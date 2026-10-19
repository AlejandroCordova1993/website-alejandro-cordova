import {encounters,autonomousPlan} from './encounters.js?v=lc-104967f85789';
import {weeklyReadings} from './journey.js?v=lc-104967f85789';

export const classHref=e=>`#semana/${e.week}/${e.day==='lunes'?1:2}`;
export function classFromHash(hash){
 const match=String(hash).match(/^#semana\/(\d+)(?:\/([12]))?$/);
 return match?encounters.find(e=>e.week===Number(match[1])&&e.day===(match[2]==='2'?'miercoles':'lunes'))||null:null;
}
// All encounters reuse the existing note keys. A class is a view of the work,
// never a second copy of a ficha or a new evaluated activity.
const weeklyWork={
 1:{key:'1-A',kind:'comparison',concepts:[0]},
 2:{key:'1-A',kind:'comparison',concepts:[0]},
 3:{key:'1-canon',kind:'task',concepts:[1]},
 4:{key:'1-canon',kind:'task',concepts:[2]},
 5:{key:'2-oralitura',kind:'comparison',concepts:[0,1],documents:1},
 6:{key:'2-oralitura',kind:'comparison',concepts:[1]},
 7:{key:'2-cartografia',kind:'task',concepts:[2],map:true},
 8:{key:'2-sumativa',kind:'task',concepts:[3]},
 9:{key:'3-hermeneutica',kind:'comparison',concepts:[0]},
 10:{key:'3-recepcion',kind:'task',concepts:[1]},
 11:{key:'3-traduccion',kind:'translation',concepts:[2]},
 12:{key:'3-metodos',kind:'task',concepts:[3]},
 13:{key:'2-cartografia',kind:'task',concepts:[0,1],map:true},
 14:{key:'4-intertexto',kind:'comparison',concepts:[2]},
 15:{key:'4-temas',kind:'task',concepts:[3],media:true},
 16:{key:'ensayo',kind:'project',concepts:[]}
};
export function classPlan(e){
 const base={...weeklyWork[e.week]},wed=e.day==='miercoles';
 if(e.week===1&&!wed)return {...base,key:'intro',kind:'intro'};
 if([12,15].includes(e.week)&&wed)return {...base,key:'3-microclase',kind:'task',media:false,map:false};
 return {...base,writeArgument:[2,6,9,14].includes(e.week)&&wed};
}
export function classPreparation(e){return autonomousPlan[e.week][e.day==='lunes'?0:1].task;}
export function classContinuation(e){return autonomousPlan[e.week][e.day==='lunes'?1:2];}
export function classReadings(e){
 const plan=weeklyReadings[e.week];
 const rows=[...(plan.autonomous||[]),...(plan.classroom||[]),...(plan.revisit||[])];
 // Chikangana enters in week 6. Borges in week 13 remains preparation for 14.
 return rows.filter(([id],i,all)=>all.findIndex(([other])=>other===id)===i);
}
export function classReadingGroups(e){
 const p=weeklyReadings[e.week],first=e.day==='lunes',groups=[];
 if(e.week===1){
  return first?[
   {title:'Durante esta sesión',rows:[['palacio','En esta sesión trabajas solo con el pasaje que entrega el docente. El enlace abre el cuento completo, que lees después de la sesión.']]},
   {title:'Después de esta sesión · para preparar la sesión 2',rows:[['guillen','«Primeras definiciones», pp. 13–15. Lee también Palacio completo, enlazado arriba.']]}
  ]:[
   {title:'Preparación ya realizada',rows:p.autonomous},
   {title:'Durante esta sesión',rows:p.classroom}
  ];
 }
 if(p.autonomous?.length)groups.push({title:first?'Preparación · antes de esta sesión':'Recuperar la preparación de la semana',rows:p.autonomous});
 if(p.classroom?.length){
  const session=({7:2,10:1,13:1,15:1})[e.week]||1;
  groups.push({title:session===(first?1:2)?'Durante esta sesión':session===2?'Para la sesión 2 · no requiere lectura previa':'Recuperar lo trabajado en la sesión 1',rows:p.classroom});
 }
 if(p.revisit?.length)groups.push({title:'Relecturas · elige los pasajes pertinentes',rows:p.revisit});
 return groups;
}
export function resumeHref(state){
 const hash=state.lastLocation;
 if(classFromHash(hash))return classHref(classFromHash(hash));
 if(/^#modulo\/[1-4]\//.test(hash))return classHref(encounters[(Number(hash.split('/')[1])-1)*8]);
 return ['#proyecto','#ampliacion'].includes(hash)?hash:'#introduccion';
}
const workClasses={intro:[1,1],'1-A':[2,2],'1-canon':[4,2],'2-oralitura':[6,2],'2-cartografia':[13,2],'2-sumativa':[8,2],'3-hermeneutica':[9,2],'3-recepcion':[10,2],'3-traduccion':[11,2],'3-metodos':[12,1],'3-microclase':[12,2],'4-intertexto':[14,2],'4-temas':[15,1],'4-medios':[15,1]};
export const fichaTitles={'1-A':'Ficha 1 · Palacio / Machado','1-canon':'Ficha 2 · Canon y repertorio','2-oralitura':'Ficha 3 · Guamán Poma / Chikangana','3-recepcion':'Ficha 4 · Recepción y límites','4-intertexto':'Ficha 5 · Cervantes / Borges'};
export function workDestination(key,fallback){
 const position=workClasses[key];
 if(!position)return fallback;
 return {href:`#semana/${position[0]}/${position[1]}`,field:key==='intro'?'intro-intro':key==='3-traduccion'?'3-traduccion-translation':key+'-argument'};
}
export const projectPhases=[
 {id:'problema',title:'Problema y corpus',week:4,fields:['title','question','corpus']},
 {id:'esquema',title:'Esquema y método',week:12,fields:['method']},
 {id:'borrador',title:'Borrador y referencias',week:15,fields:['argument','credits']},
 {id:'cierre',title:'Consigna, defensa y entrega',week:16,fields:['mediation','defense','selfAssessment','reflection','student']}
];
export function suggestedProjectPhase(state){
 const e=classFromHash(state.lastLocation);
 if(e?.week===16)return 'cierre';
 if(e?.week===15||state.notes.ensayo?.argument?.trim())return 'borrador';
 if((e&&e.week>=12)||state.notes.ensayo?.method?.trim())return 'esquema';
 return 'problema';
}
