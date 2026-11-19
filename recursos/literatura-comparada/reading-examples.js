// Ejemplos de lectura vinculados a los mismos pasajes y actividades del curso.
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const palacio='https://www.funcionjudicial.gob.ec/resources/pdf/publicaciones/unhombremuertoapuntapies.pdf';
export function workedExampleHtml(week,n){
 let body='',source='';
 if(week===2){
  body=`<p>El relato hace circular una clasificación entre tres formas de narrar. Sigue qué recibe la voz y qué añade en cada momento.</p><ol class="reading-sequence"><li><h5>Noticia</h5><p>La palabra <q>vicioso</q> clasifica al muerto mientras los agresores siguen sin identificar.</p><p class="caption">Indicio: <a href="${palacio}#page=26" target="_blank" rel="noopener noreferrer">pp. 26–27</a>.</p></li><li><h5>Pesquisa</h5><p>El narrador convierte esa clasificación en el problema que quiere resolver y presenta sus conjeturas como deducciones.</p><p class="caption">Indicios: <a href="${palacio}#page=29" target="_blank" rel="noopener noreferrer">pp. 29–30</a> y <a href="${palacio}#page=34" target="_blank" rel="noopener noreferrer">34–35</a>.</p></li><li><h5>Reconstrucción</h5><p>La escena imaginada completa los vacíos y organiza una explicación de la violencia.</p><p class="caption">Comprueba cómo se pasa de la conjetura a la escena: <a href="${palacio}#page=35" target="_blank" rel="noopener noreferrer">pp. 35–37</a>.</p></li></ol><p><strong>Interpretación propuesta:</strong> la apariencia de certeza depende de una clasificación previa. Contrástala con la lectura de la pesquisa como comicidad y explica qué añade cada hipótesis.</p><p><strong>Para la ficha 1:</strong> localiza una operación en Machado y explica una diferencia con Palacio. El orden del esquema representa el relato; la relación histórica entre instituciones requiere otras fuentes.</p>`;
  source=`Palacio, <cite>Un hombre muerto a puntapiés</cite>, Consejo de la Judicatura, 2013, pp. 26–37. <a href="${palacio}#page=26" target="_blank" rel="noopener noreferrer">Cotejar los pasajes en el cuento (otra pestaña)</a>.`;
 }
 if(week===7){
  body=`<dl class="reading-distinctions">
    <div><dt>La voz de Miriam en el poema de Martínez</dt><dd>
      <p>En la presentación de <cite>Señorita Primavera</cite>, Diosce Martínez explica que escribió la obra a partir de historias de mujeres trans de Quilicura, en Santiago de Chile. En el primer bloque de «Miriam Fredes», la hablante recuerda cuándo eligió el nombre Miriam y cómo la llama su familia. En el último, Miriam es el nombre con que la conocen en las peluquerías donde ha trabajado.</p>
      <p>La repetición del nombre enlaza la casa y el trabajo. Al pasar de un ámbito al otro cambia quién reconoce ese nombre. Cuando la hablante cuenta la exclusión escolar, el pronombre «nos» vincula su recuerdo personal con una experiencia que presenta como compartida. El poema da forma a ese recorrido mediante la primera persona y la organización de los versos.</p>
    </dd></div>
    <div><dt>La voz testimonial de Esparza</dt><dd>
      <p>En la p. 43 de <cite>Ataúd en llamas</cite>, Esparza observa el reloj y la ropa de un hombre muerto en la calle. A partir de esos detalles lo llama «señor» y descarta que sea un mendigo. Las prendas pertenecen a la escena observada. La posición social es una deducción del testigo.</p>
      <blockquote>En los periódicos dijeron que lo recogieron de inmediato.</blockquote>
      <p>Aquí Esparza atribuye una versión a la prensa y la contrapone a lo que vio cuarenta minutos después de salir del supermercado. Para corroborar lo publicado haría falta consultar los periódicos.</p>
    </dd></div>
    <div><dt>Composición y paratexto</dt><dd>
      <p>Al recuerdo del terremoto y del encierro le siguen la escena del cadáver, un futuro imaginado y una despedida. El encabezado identifica a Esparza. La nota de la p. 43 sitúa la última frase en su correspondencia con la cronista Gabriela Ruiz Agila. Al conocer ese intercambio, la despedida puede leerse como una petición dirigida a una persona concreta tras la escena de abandono en el espacio público.</p>
    </dd></div>
    <div><dt>Quién puede nombrar a quién</dt><dd>
      <p>En el poema, Miriam dice cómo se nombra y cómo la nombran otros. En el testimonio, Esparza interpreta la apariencia de un desconocido que ya no puede responderle. El contraste permite preguntar qué autoridad adquiere en cada texto la persona que cuenta la experiencia.</p>
    </dd></div>
  </dl><p>Para la cartografía sirven la presentación firmada por Martínez y la nota de correspondencia del libro de Ruiz Agila. Cada una documenta cómo llegó una experiencia a la página.</p>`;
  source=`Diosce Martínez, <a href="https://circulodepoesia.com/2021/03/senorita-primavera-poesia-trans-documental-de-diosce-martinez/" target="_blank" rel="noopener noreferrer">«Miriam Fredes», presentación y bloques primero y último</a>. Gabriela Ruiz Agila, <cite>Ataúd en llamas</cite> (2020), <a href="./materiales/ruiz-agila-esparza-41-43.pdf?v=lc-d3bc36bca208#page=1">pieza de Nicolás Esparza, pp. 41–43</a> y <a href="./materiales/ruiz-agila-esparza-41-43.pdf?v=lc-d3bc36bca208#page=3">escena del cadáver y nota final, p. 43</a>.`;
 }
 if(week===11){
  body=`<ol class="reading-sequence"><li><h5>Diferencia localizada</h5><p>Francés: <q lang="fr">n’a plus</q>.<br>Casal: <q>no tiene</q>.<br>Díez-Canedo: <q>ya no tiene</q>.</p></li><li><h5>Decisión observable</h5><p>En Díez-Canedo, <q>ya</q> hace explícita la relación entre un estado anterior y el presente. Casal formula la ausencia con <q>no tiene</q>.</p></li><li><h5>Efecto que ponemos a prueba</h5><p>En Díez-Canedo, «ya» marca que el observador ha perdido la curiosidad y la ambición. Sigue disfrutando de ver el puerto. Busca el «todavía» que ambas versiones usan para quienes viajan y explica cómo se construye el contraste con quien los observa.</p></li></ol><p><strong>Para tu comentario:</strong> aplica el procedimiento a las tres diferencias que elijas. Distingue el efecto local que puedes argumentar de la intención del traductor, que necesita documentación adicional.</p>`;
  source=`Baudelaire, <cite>Le Port</cite>, y versiones de Casal y Díez-Canedo identificadas en las lecturas del taller. <a href="#actividad/3-traduccion">Consultar el cotejo y los testimonios en Actividad</a>.`;
 }
 if(!body)return '';
 const full=n.example.map(p=>`<p>${esc(p)}</p>`).join('')+(n.walkthrough?`<ol class="theory-reasoning">${n.walkthrough.map(s=>`<li><p><strong>${esc(s.title)}.</strong> ${esc(s.text)}</p></li>`).join('')}</ol>`:'');
 return `<figure class="worked-example" data-reading-example="${week}"><figcaption>${esc(n.exampleTitle)}</figcaption>${body}<p class="caption example-source">${source}</p></figure><details class="example-development"><summary>Desarrollo del ejemplo${week===2?' y lectura rival':''}</summary>${full}</details>`;
}

export function readingDocumentHtml(id){
 const documents={
  guaman:{file:'./materiales/guaman-poma-975.jpg',alt:'Lámina de Guamán Poma: un rey sentado y el autor arrodillado, con rótulos que identifican las figuras.',caption:'Pregunta Su Magestad, responde el autor. Lámina 961 [975]. Reproducción de la Biblioteca Real de Dinamarca; manuscrito GKS 2232 4º, ca. 1615.',help:'Observa posiciones, rótulos y destinatario; contrasta después con las intervenciones escritas de la página siguiente.'},
  chikangana:{file:'./materiales/chikangana-p85.webp',alt:'Página 85 del estudio: las versiones de Takina y Poema conservan su disposición espacial original en la parte superior.',caption:'Página completa, sin anotaciones, de Brígido-Corachán y Domínguez (2019), p. 85, con la reproducción de Mallki/Chikangana (2010), pp. 60–61. Volumen de Müller y Siskind / De Gruyter, CC BY-NC-ND 4.0; se conserva el PDF íntegro.',help:'Amplía la página para observar las versiones en la parte superior. Conserva su disposición al elegir el pasaje de la ficha 3.'}
 };
 const d=documents[id];if(!d)return '';
 return `<figure class="reading-document"><a href="${d.file}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar reproducción de ${id==='guaman'?'Guamán Poma':'Takina / Poema'} (otra pestaña)"><img src="${d.file}" alt="${esc(d.alt)}" loading="lazy" decoding="async" width="${id==='guaman'?385:879}" height="${id==='guaman'?549:1304}"><span>Ampliar reproducción (otra pestaña)</span></a><figcaption>${esc(d.caption)} ${id==='guaman'?'<a href="https://permalink.kb.dk/permalink/2006/manus/253/esp/975/" target="_blank" rel="noopener noreferrer">Lámina en el archivo (otra pestaña)</a> · <a href="https://permalink.kb.dk/permalink/2006/manus/253/esp/976/" target="_blank" rel="noopener noreferrer">Intervenciones escritas, 962 [976] (otra pestaña)</a>':'<a href="./materiales/world-literature-2019.pdf?v=lc-d3bc36bca208#page=91">Cotejar p. 85 en el PDF original (visor 91)</a>'}</figcaption><p>${esc(d.help)}</p></figure>`;
}
