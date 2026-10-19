import {units} from './course.js';
import {sessions,getSession} from './encounters.js';
import {parseRoute} from './navigation.js';
import {esc} from './export.js';
import {uiIcon} from './ui-icons.js';

export function renderCourseSidebar(route,state,origin=null){
 const last=parseRoute(state.lastLocation),saved=last.page==='semana'?getSession(last.week,last.encounter):null;
 const current=route.page==='semana'?getSession(route.week,route.encounter):origin||saved;
 const currentUnit=route.unit||current?.unit||1;
 const selected=['biblioteca','glosario'].includes(route.page)?'biblioteca':['cuaderno','proyecto','ficha'].includes(route.page)?'cuaderno':'inicio';
 const nav=[['inicio','Clases','classes'],['biblioteca','Biblioteca','library'],['cuaderno','Mi trabajo','work']];
 return `<nav class="side-main-nav" aria-label="Navegación principal">${nav.map(([id,label,icon])=>`<a href="#${id}" data-nav="${id}" ${selected===id?'aria-current="page"':''}>${uiIcon(icon)}<span>${label}</span></a>`).join('')}</nav><nav class="side-units" aria-label="Unidades y clases">${units.map(u=>`<details class="side-unit" name="side-units" data-side-unit="${u.id}" ${u.id===currentUnit?'open':''}><summary><span class="side-unit-number">${u.id}</span><span>${esc(u.title)}</span></summary><ol class="side-class-list">${sessions.filter(s=>s.unit===u.id).map(s=>`<li><a href="#semana/${s.week}/${s.encounter}" ${route.page==='semana'&&s.id===current?.id?'aria-current="page"':''}><span>Semana ${s.week} · Clase ${s.encounter}</span>${esc(s.title)}</a></li>`).join('')}</ol></details>`).join('')}</nav><div class="side-consultation"><a href="#glosario">${uiIcon('glossary')}<span>Glosario</span></a></div>`;
}
