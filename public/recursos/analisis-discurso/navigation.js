import {unitIds} from './state.js';
export const steps=[['situar','Situar'],['observar','Leer y observar'],['analizar','Analizar'],['argumentar','Argumentar'],['revisar','Revisar']];
export function parseRoute(hash){
 const value=String(hash||'').replace(/^#/,'');
 if(['inicio','biblioteca','proyecto','cuaderno','glosario'].includes(value))return {page:value};
 const unit=value.match(/^unidad\/(\d+)\/(situar|observar|analizar|argumentar|revisar)$/);if(unit&&unitIds.includes(+unit[1]))return {page:'unidad',unit:+unit[1],step:unit[2]};
 const week=value.match(/^semana\/(\d+)\/([12])$/);if(week&&+week[1]>=1&&+week[1]<=16)return {page:'semana',week:+week[1],encounter:+week[2]};
 return {page:'inicio'};
}
