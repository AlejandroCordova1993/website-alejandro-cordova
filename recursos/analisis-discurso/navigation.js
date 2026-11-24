
export const steps=[['situar','Unidad y encuentros'],['observar','Guía de lectura'],['analizar','Registrar evidencias'],['argumentar','Escribir argumento'],['revisar','Revisar ficha']];
export const projectSections={pregunta:'question',metodo:'method',analisis:'argument',conclusion:'revision',ensenanza:'mediation',defensa:'defense',autoevaluacion:'selfAssessment'};
export function parseRoute(hash){
 const value=String(hash||'').replace(/^#/,'');
 if(['inicio','biblioteca','proyecto','cuaderno','glosario','galeria-visual'].includes(value))return {page:value};
 const letter=value.match(/^ficha\/2\/(borrador|lectura|revision|decisiones|version-final)$/);
 if(letter)return {page:'ficha',unit:2,section:letter[1]};
 const ficha3=value.match(/^ficha\/3\/(pasajes|contexto|revision)$/);
 if(ficha3)return {page:'ficha',unit:3,section:ficha3[1]};
 const ficha4=value.match(/^ficha\/4\/(lecturas|pasajes|argumento|revision)$/);
 if(ficha4)return {page:'ficha',unit:4,section:ficha4[1]};
 const ficha5=value.match(/^ficha\/5\/(carta|aviso|revision)$/);
 if(ficha5)return {page:'ficha',unit:5,section:ficha5[1]};
 const letterFromFicha5=value.match(/^ficha\/2\/version-final\/desde-ficha-5\/(carta|aviso|revision)$/);
 if(letterFromFicha5)return {page:'ficha',unit:2,section:'version-final',returnPhase:letterFromFicha5[1]};
 const ficha6=value.match(/^ficha\/6\/(tramos|transicion|argumento|revision)$/);
 if(ficha6)return {page:'ficha',unit:6,section:ficha6[1]};
 const projectSection=value.startsWith('proyecto/')?value.slice('proyecto/'.length):null;
 if(projectSection&&Object.hasOwn(projectSections,projectSection))return {page:'proyecto',section:projectSection};

 if(value==='proyecto/hito-3')return {page:'proyecto',section:'hito-3'};
 const ficha=value.match(/^ficha\/([1-6])$/);if(ficha)return {page:'ficha',unit:+ficha[1]};
 const unit=value.match(/^unidad\/([1-6])\/(situar|observar|analizar|argumentar|revisar)$/);if(unit)return {page:'unidad',unit:+unit[1],step:unit[2]};
 const week=value.match(/^semana\/([1-9]|1[0-6])\/([12])$/);if(week)return {page:'semana',week:+week[1],encounter:+week[2]};
 return {page:'inicio'};
}
