import {modules,moduleById,history,schools} from './course.js';
import {resourceById} from './corpus.js';
import {weeks} from './schedule.js';
import {sessionSlides} from './class-sessions.js';
import {dayLabel} from './encounters.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function createPresenter(dialog){
 let module=0,route='A',index=0,week=null,day=null;
 function slides(){
  if(week)return sessionSlides(week,day);
  if(!module){const list=history.map(h=>({title:h.title,text:h.text,detail:h.label}));list.splice(3,0,...schools.map(s=>({title:s.title,text:s.question,detail:`${s.focus}. Evidencia: ${s.evidence} Límite: ${s.limit}`})));return list;}
  const m=moduleById[module],r=m.routes[route];
  const pair=r.texts.map((id,i)=>{const a=resourceById[id];return `<section><span>Documento ${i?'B':'A'}</span><h3>${esc(a.title)}</h3><p>${esc(a.author)}</p><p>${esc(r.prompts[i])}</p></section>`;}).join('');
  const list=[{title:m.question,text:m.intro,detail:m.title},{title:'Leer y situar',text:r.question,detail:r.texts.map(id=>resourceById[id].author+' · '+resourceById[id].title).join(' / ')},{title:'Confrontar evidencia',html:`<div class="class-pair">${pair}</div>`,detail:'Cada afirmación necesita un pasaje y un localizador.'},{title:r.workshop.title,text:r.workshop.text,detail:r.prompts[2]},{title:'Revisar la lectura',text:m.review,detail:'Explica qué cambió y por qué.'}];
  return list;
 }
 function render(focus=false){
  const list=slides();index=Math.max(0,Math.min(index,list.length-1));const slide=list[index];
  dialog.querySelector('.class-slide').innerHTML=`<p class="class-position">${week?'Tramo '+week+(day?' · '+dayLabel(day)+'':' · Panorama por tramos'):module?'Módulo '+module+' · Taller '+route:'Introducción'} · ${index+1} / ${list.length}</p><h2 id="class-title" tabindex="-1">${esc(slide.title)}</h2>${slide.html||`<p>${esc(slide.text)}</p>`}<div class="class-detail">${esc(slide.detail)}</div>`;
  dialog.querySelector('[data-present=prev]').disabled=index===0;dialog.querySelector('[data-present=next]').disabled=index===list.length-1;
  dialog.querySelector('#class-live').textContent=`Diapositiva ${index+1} de ${list.length}`;
  if(focus)dialog.querySelector('#class-title').focus({preventScroll:true});
  dialog.querySelector('.class-slide').scrollTop=0;
 }
 function routeOptions(){const select=dialog.querySelector('#class-route'),m=moduleById[module];select.innerHTML=m?Object.entries(m.routes).map(([id,r])=>`<option value="${id}">Taller ${id} · ${esc(r.label)}</option>`).join(''):'<option>Panorama histórico</option>';select.disabled=!!week||!m||Object.keys(m.routes).length<2;select.value=m?route:'Panorama histórico';select.closest('.class-picker').dataset.available=String(!!m&&!week&&Object.keys(m.routes).length>1);}
 // Once the teacher starts advancing, the content pickers fold away so the audience sees only the slide.
 function pickers(open){dialog.querySelectorAll('.class-picker').forEach(el=>el.hidden=!open||el.dataset.available==='false');const toggle=dialog.querySelector('[data-present=pickers]');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Ocultar selección':'Cambiar contenido';dialog.querySelector('.class-toolbar').classList.toggle('is-folded',!open);}
 function sessionOptions(){const select=dialog.querySelector('#class-session');select.innerHTML='<option value="taller">'+(module?'Taller comparativo':'Panorama histórico')+'</option>'+weeks.filter(w=>Math.ceil(w.week/4)===module).map(w=>`<optgroup label="Tramo ${w.week} · ${esc(w.title)}"><option value="${w.week}">Panorama del tramo ${w.week}</option><option value="${w.week}:lunes">Sesión 1</option><option value="${w.week}:miercoles">Sesión 2</option></optgroup>`).join('');select.disabled=!module;select.value=week?String(week)+(day?':'+day:''):'taller';select.closest('.class-picker').dataset.available=String(!!module);}
 function show(initialModule,initialRoute,step='',initialWeek=null,initialDay=null){module=initialModule;if(initialWeek===null&&module===3&&step==='traduccion')initialWeek=11;week=weeks.some(w=>w.week===initialWeek&&Math.ceil(w.week/4)===module)?initialWeek:null;day=week&&['lunes','miercoles'].includes(initialDay)?initialDay:null;route=moduleById[module]?.routes[initialRoute]?initialRoute:'A';index=week?0:stepIndex(step);
  dialog.innerHTML=`<div class="class-toolbar"><div class="class-picker"><label for="class-module">Contenido</label><select id="class-module"><option value="0">Introducción · Orígenes y escuelas</option>${modules.map(m=>`<option value="${m.id}">${m.id} · ${esc(m.title)}</option>`).join('')}</select></div><div class="class-picker"><label for="class-session">Sesión</label><select id="class-session"></select></div><div class="class-picker"><label for="class-route">Taller</label><select id="class-route"></select></div><button class="button light" data-present="pickers" aria-controls="class-module class-session class-route"></button><button class="button light" data-present="fullscreen" ${dialog.requestFullscreen?'':'hidden'}>Pantalla completa</button><button class="button light" data-present="close">Cerrar · Esc</button></div><div class="class-slide"></div><p id="class-live" class="sr-only" aria-live="polite"></p><div class="class-controls"><button class="button light" data-present="prev">Anterior</button><span>← → o Av Pág / Re Pág para avanzar · Inicio / Fin</span><button class="button light" data-present="next">Siguiente →</button></div>`;
  dialog.querySelector('#class-module').value=String(module);sessionOptions();routeOptions();pickers(true);render();dialog.showModal();dialog.querySelector('#class-title').focus();
 }
 // Opening on the step the teacher is on: Situar, Leer, Contrastar, [Traducir], Argumentar, Revisar.
 function stepIndex(step){if(!module)return 0;return {leer:1,comparar:2,argumentar:3,revisar:4}[step]||0;}
 // Arrow keys only browse a closed select; the choice applies on Enter, on leaving the field or when picked with the pointer.
 let pointerPick=false;
 function applyPick(sel,focus){if(sel.id==='class-module'){const v=Number(sel.value);if(v===module)return;module=v;route='A';week=null;day=null;index=0;sessionOptions();routeOptions();pickers(true);}else if(sel.id==='class-session'){const [w,d]=sel.value.split(':'),v=w==='taller'?null:Number(w),nextDay=v&&['lunes','miercoles'].includes(d)?d:null;if(v===week&&nextDay===day)return;week=v;day=nextDay;index=0;routeOptions();pickers(true);}else{if(!moduleById[module]||sel.value===route)return;route=sel.value;index=0;}render(focus);}
 dialog.addEventListener('pointerdown',e=>{pointerPick=!!e.target.closest('#class-module,#class-session,#class-route');});
 dialog.addEventListener('change',e=>{if(e.target.matches('#class-module,#class-session,#class-route')&&pointerPick){pointerPick=false;applyPick(e.target,true);}});
 dialog.addEventListener('focusout',e=>{if(e.target.matches('#class-module,#class-session,#class-route'))applyPick(e.target,false);});
 document.addEventListener('fullscreenchange',()=>{const b=dialog.querySelector('[data-present=fullscreen]');if(b)b.textContent=document.fullscreenElement?'Salir de pantalla completa':'Pantalla completa';});
 dialog.addEventListener('click',async e=>{const action=e.target.closest('[data-present]')?.dataset.present;if(action==='close')dialog.close();if(action==='pickers'){const open=e.target.closest('button').getAttribute('aria-expanded')!=='true';pickers(open);if(open)dialog.querySelector('#class-module').focus();}if(action==='prev'||action==='next'){index+=action==='next'?1:-1;pickers(false);render(true);}if(action==='fullscreen'){try{if(document.fullscreenElement)await document.exitFullscreen();else await dialog.requestFullscreen();e.target.textContent=document.fullscreenElement?'Salir de pantalla completa':'Pantalla completa';}catch{e.target.textContent='Pantalla completa no disponible';}}});
 // Presentation remotes send PageDown/PageUp; Space and Shift+Space also advance when no button has focus.
 dialog.addEventListener('keydown',e=>{if(e.target.matches('#class-module,#class-session,#class-route')){pointerPick=false;if(e.key==='Enter'){e.preventDefault();applyPick(e.target,true);}return;}if(e.target.matches('input,textarea'))return;const space=e.key===' '&&!e.target.matches('button,a,summary');const next=['ArrowRight','PageDown'].includes(e.key)||(space&&!e.shiftKey),prev=['ArrowLeft','PageUp'].includes(e.key)||(space&&e.shiftKey);if(!next&&!prev&&!['Home','End'].includes(e.key))return;e.preventDefault();index=e.key==='Home'?0:e.key==='End'?slides().length-1:index+(next?1:-1);pickers(false);render(true);});
 dialog.addEventListener('close',()=>{if(document.fullscreenElement===dialog)document.exitFullscreen().catch(()=>{});});
 return {show};
}
