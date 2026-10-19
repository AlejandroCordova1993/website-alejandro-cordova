// Page numbers refer to the user's 394-page 2012 electronic edition, counted from 1.
// These are consultation locators, not additional required readings or public PDF links.
export const manualPassages={
 foundations:'cap. 1, §§1.1–1.2 · PDF 12–17',
 oral:'§§2.1–2.3 · PDF 29–40',
 body:'§2.6 · PDF 47–52',
 voice:'§2.7 · PDF 53–55; prosodia en §2.8.1 · PDF 57',
 linguistic:'§§2.8.2–2.8.4 · PDF 57–64',
transcription:'apéndice, §1.2 · PDF 358–361',
 writing:'§§3.1–3.2 · PDF 74–77',
 processes:'§3.4 · PDF 80–85',
 modality:'§6.4 · PDF 175–183',
 ethos:'§6.4.3, ethos y fiabilidad del locutor · impresa 172 / PDF 183',
 implicit:'cap. 7, interpretación mediante inferencias · PDF 184–187; §7.2.1 · PDF 191–192',
 speechActs:'§7.2.2 · PDF 196–201',
 materiality:'§3.5 · PDF 85–90',
 texture:'coherencia, §8.1 · PDF 222–230; cohesión: repeticiones, §8.2.1 · PDF 231–232; anáfora, §8.2.2 · PDF 237–238; conectores, §8.2.4 · PDF 246',
 context:'§4.2 · PDF 108–116; §4.3 · PDF 127–133',
 deixis:'§4.2.1 · PDF 117–126',
 cotext:'cotexto en §4.2 · PDF 110 y §8.2.2 · PDF 238',
 persons:'§5.1 · PDF 137–149',
 voices:'§§5.2–5.2.1 · PDF 149–154',
 genres:'§§9.1.2–9.1.4 · PDF 258–264',
 sequences:'§9.2.2 · PDF 266–268',
 narrative:'§10.1, estructura narrativa · PDF 270–274',
 description:'§10.2, organización descriptiva · PDF 280–282',
 argument:'§10.3, organización argumentativa · PDF 295–300',
 explanation:'§10.4, organización y procedimientos explicativos · PDF 308–312',
 dialogue:'§10.5 · PDF 319–323; turnos e intercambios en §2.2 · PDF 31–36',
 research:'apéndice, preguntas antes de obtener los datos y posición de quien investiga (punto 8) · PDF 354–356; establecimiento de un corpus, §4 · PDF 368–370',
 position:'apéndice, punto 8: quien investiga explicita sus puntos de vista y se somete a autocrítica · PDF 356'
};
export const lessonManualSources={
 1:[['oral','speechActs'],['body','voice','linguistic'],['transcription'],['voices'],['oral','transcription']],
 2:[['writing','persons','modality'],['processes','implicit'],['texture'],['materiality'],['persons']],
 3:[['context','deixis'],[],[],['research'],['research']],
 4:[['persons'],['voices'],['voices'],[],['voices']],
 5:[['genres'],['sequences'],[],[],[]],
 6:[['sequences','narrative','description','explanation','argument','dialogue'],['argument'],['explanation'],['dialogue'],['research']]
};
export const classManualSources={
 's1-e1':['foundations'],'s1-e2':['foundations','cotext'],
 's2-e1':['oral','deixis','transcription','speechActs'],'s2-e2':['body','voice','linguistic','oral'],
 's3-e1':['voice'],'s3-e2':['transcription'],
 's4-e1':['writing'],'s4-e2':['persons','modality'],
 's5-e1':['processes','implicit'],'s5-e2':['processes','implicit','texture'],'s6-e1':['materiality'],'s6-e2':['materiality'],
 's7-e2':['context','deixis'],'s8-e1':['research'],
 's9-e1':['persons'],'s9-e2':['voices'],'s10-e1':['voices'],'s10-e2':['voices'],
 's11-e1':['genres','sequences'],
 's13-e1':['sequences','narrative','description','explanation','argument','dialogue'],
 's13-e2':['explanation','argument'],'s14-e1':['argument'],'s14-e2':['dialogue']
};
export const conceptManualSources={
 discurso:['foundations'],'analisis-discurso':['foundations'],enunciado:['foundations'],enunciacion:['foundations','deixis'],
 paraverbal:['voice'],inferencia:['processes','implicit'],macroestructura:['texture'],contexto:['context','deixis'],
 reflexividad:['position'],persona:['persons'],polifonia:['voices'],'discurso-referido':['voices'],
 ethos:['ethos'],genero:['genres'],secuencia:['sequences'],argumentacion:['argument'],dialogo:['dialogue']
};
export const manualSelection=keys=>[...new Set(keys||[])].map(key=>manualPassages[key]).filter(Boolean).join('; ');
export const manualCitation=keys=>keys?.length?`Apoyo en Las cosas del decir, Calsamiglia y Tusón (2012): ${manualSelection(keys)}. Los números PDF corresponden al contador del archivo consultado; pueden cambiar en otra edición. Síntesis y ejemplos propios del curso; consulta opcional del manual.`:'';
export function referenceForClass(resource,session){
 if(resource?.id==='calsamiglia'&&classManualSources[session.id])return {...resource,selection:'Consulta opcional: '+manualSelection(classManualSources[session.id])};
 if(resource?.id==='caldiz'&&session.unit===4)return {...resource,startPage:3,url:resource.url.replace(/#page=\d+$/,'#page=3'),selection:'Consulta opcional para voces y negación: PDF 3 y 5, presentación de la polifonía de Ducrot. La teoría de esta clase explica las definiciones necesarias; no se repite la lectura de oralidad.'};
 return resource;
}
