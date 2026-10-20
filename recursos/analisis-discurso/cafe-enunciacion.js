import {esc} from './export.js';

// One explanatory example in class 1·2. The dialogue is shared; the visual readings differ.
export const cafeExample={
 title:'Un café, dos versiones',
 introduction:'Las dos escenas conservan las mismas palabras. El entorno, los gestos y los símbolos del dibujo orientan de manera diferente nuestra interpretación de la relación entre los personajes.',
 transcript:[
  {speaker:'Cristina · hablante 1',text:'Mañana iremos a tomar café juntos.'},
  {speaker:'Hablante 2 · respuesta a Cristina',text:'Bueno, mi amor, perdón, Cristina.'},
  {speaker:'Hablante 2 · pensamiento representado',text:'Uy, no, ¿por qué le dije «mi amor»?'}
 ],
 reference:'«Mañana» se interpreta desde el momento en que habla Cristina. «Iremos» incluye a quien habla; «juntos» y la escena permiten entender que se refiere a los dos personajes. Cuando responde el segundo hablante, él ocupa la posición de locutor y Cristina la de destinataria.',
 versions:[
  {
   number:1,file:'img/cafe-version-1.webp',width:1448,height:1086,
   alt:'Cómic de cuatro viñetas en un café. Cristina propone tomar café juntos; el otro personaje la llama «mi amor», se corrige y después se pregunta por qué lo dijo. En la última viñeta, ella sonríe con la cabeza apoyada en la mano y aparece un corazón.',
   caption:'La mirada, la postura y el corazón de la última viñeta orientan hacia una lectura afectiva.',
   interpretation:[
    'La invitación de Cristina presenta un encuentro futuro y una acción compartida. La respuesta «mi amor» introduce un tratamiento afectivo dirigido a ella. Con «perdón, Cristina», el hablante corrige ese tratamiento y reajusta su manera de dirigirse a la misma destinataria.',
    'La sonrisa, la postura y el corazón dibujado favorecen una interpretación de complicidad afectiva. La enunciación permite examinar cómo se presenta esa relación mediante el lenguaje; el dibujo aporta indicios adicionales. Esta interpretación sigue abierta: el tratamiento y la sonrisa pueden adquirir otros sentidos según la historia de la relación.'
   ]
  },
  {
   number:2,file:'img/cafe-version-2.webp',width:1448,height:1086,
   alt:'Cómic de cuatro viñetas con el mismo diálogo y el mismo pensamiento. Los personajes llevan credenciales y sostienen tazas con mensajes de trabajo. En la última viñeta, Cristina se ríe con los ojos cerrados y una mano cerca de la boca.',
   caption:'Las credenciales, los carteles y las tazas sugieren un ambiente laboral; la última viñeta muestra a Cristina riéndose.',
   interpretation:[
    'La referencia a «mañana» y la acción compartida se mantienen. Aquí los elementos del ambiente laboral permiten leer la invitación como un plan entre compañeros. «Mi amor» puede interpretarse como un desliz en el tratamiento; «perdón, Cristina» muestra que el hablante vuelve sobre sus palabras e intenta ajustar cómo se dirige a ella.',
    'La risa dibujada orienta la respuesta hacia el humor ante la equivocación. Esta versión favorece una lectura de confianza entre compañeros. Para precisar el sentido de la risa necesitaríamos conocer su relación y cómo continúa el intercambio: podría incluir diversión, complicidad u otros matices.'
   ]
  }
 ],
 innerDialogue:'En la viñeta 3 de ambas versiones, el personaje se pregunta por su propia intervención. Benveniste entiende el monólogo como diálogo interiorizado: el sujeto ocupa las posiciones de quien habla y de quien escucha. Aquí el hablante se convierte en destinatario de sí mismo y evalúa lo que acaba de decir. El globo de pensamiento permite al lector conocer esa pregunta interior; Cristina no la escucha.',
 comparison:'Al comparar las versiones, cambian el entorno y varios recursos visuales, además del gesto final. Conviene señalar cuáles sostienen cada interpretación.',
 source:'Benveniste, «El aparato formal de la enunciación», en Problemas de lingüística general II. PDF 2–3: locutor, destinatario, persona y tiempo; PDF 4: diálogo y monólogo. Interpretaciones elaboradas para el curso.',
 sourceUrl:'https://semioticaderedes-carlon.com/wp-content/uploads/2024/03/El-aparato-formal-de-la-enunciaci%C3%B3n-Benveniste.pdf#page=4',
 credit:'Imágenes aportadas por el docente · generadas con IA.'
};

export function cafeExampleHtml(){
 const c=cafeExample;
 return `<section class="cafe-example" data-example="cafe-enunciacion" aria-labelledby="cafe-example-title"><h4 id="cafe-example-title">${esc(c.title)}</h4><p>${esc(c.introduction)}</p><div class="cafe-transcript"><h5>Transcripción común</h5><dl>${c.transcript.map(t=>`<div><dt>${esc(t.speaker)}</dt><dd>${esc(t.text)}</dd></div>`).join('')}</dl></div><p>${esc(c.reference)}</p>${c.versions.map(v=>`<section class="cafe-version" aria-labelledby="cafe-version-${v.number}"><h4 id="cafe-version-${v.number}">Versión ${v.number}</h4><figure class="visual-image"><div class="vi-frame"><details class="cafe-zoom"><summary class="cafe-thumbnail" aria-label="Ampliar o reducir versión ${v.number}"><span class="vi-document-link cafe-expand-label">Ampliar versión ${v.number}</span><span class="vi-document-link cafe-reduce-label">Reducir versión ${v.number}</span><img src="${esc(v.file)}" alt="${esc(v.alt)}" width="${v.width}" height="${v.height}" loading="lazy" decoding="async"></summary></details></div><figcaption class="caption">${esc(v.caption)}</figcaption></figure>${v.interpretation.map(p=>`<p>${esc(p)}</p>`).join('')}</section>`).join('')}<h4>Diálogo interior en ambas versiones</h4><p>${esc(c.innerDialogue)}</p><p>${esc(c.comparison)}</p><p class="caption">${esc(c.credit)}</p><p class="caption">${esc(c.source)} <a class="source-link" href="${esc(c.sourceUrl)}" target="_blank" rel="noopener noreferrer">Consultar Benveniste en español · PDF 4<span class="sr-only"> (otra pestaña)</span></a></p></section>`;
}
