import {esc} from './export.js';

// Native disclosure keeps the image in the reading flow and works with touch or keyboard.
// Its state is deliberately transient: opening an image never writes to the student's notebook.
export function imageExpansionHtml(content,label){
 return `<details class="image-zoom"><summary class="image-zoom-toggle" aria-label="Ampliar o reducir imagen: ${esc(label)}"><span class="vi-document-link image-expand-label">Ampliar imagen</span><span class="vi-document-link image-reduce-label">Reducir imagen</span>${content}</summary></details>`;
}
