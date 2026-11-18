import {unitIds} from './state.js';
export const steps=[['situar','Unidad y encuentros'],['observar','Guía de lectura'],['analizar','Registrar evidencias'],['argumentar','Escribir argumento'],['revisar','Revisar ficha']];
export function parseRoute(hash){
 const value=String(hash||'').replace(/^#/,'');
 if(['inicio','biblioteca','proyecto','cuaderno','glosario','galeria-visual'].includes(value))return {page:value};
 const ficha4=value.match(/^ficha\/4\/(lecturas|pasajes|argumento|revision)$/);
 if(ficha4)return {page:'ficha',unit:4,section:ficha4[1]};
 const ficha5=value.match(/^ficha\/5\/(carta|aviso|revision)$/);
 if(ficha5)return {page:'ficha',unit:5,section:ficha5[1]};
 const letterFromFicha5=value.match(/^ficha\/2\/version-final\/desde-ficha-5\/(carta|aviso|revision)$/);
 if(letterFromFicha5)return {page:'ficha',unit:2,section:'version-final',returnPhase:letterFromFicha5[1]};
 if(value==='ficha/2/version-final')return {page:'ficha',unit:2,section:'version-final'};
 if(value==='proyecto/hito-3')return {page:'proyecto',section:'hito-3'};
 const ficha=value.match(/^ficha\/([1-6])$/);if(ficha)return {page:'ficha',unit:+ficha[1]};
 const unit=value.match(/^unidad\/(\d+)\/(situar|observar|analizar|argumentar|revisar)$/);if(unit&&unitIds.includes(+unit[1]))return {page:'unidad',unit:+unit[1],step:unit[2]};
 const week=value.match(/^semana\/(\d+)\/([12])$/);if(week&&+week[1]>=1&&+week[1]<=16)return {page:'semana',week:+week[1],encounter:+week[2]};
 return {page:'inicio'};
}
