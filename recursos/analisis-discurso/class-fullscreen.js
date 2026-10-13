// The document root supports fullscreen; a modal <dialog> itself does not.
export function createClassFullscreen(doc,onChange=()=>{}){
 let owned=false,wanted=false,pending=false,message='';
 const state=()=>({available:typeof doc.documentElement.requestFullscreen==='function'&&doc.fullscreenEnabled!==false,active:!!doc.fullscreenElement,pending,message});
 const notify=()=>onChange(state());
 doc.addEventListener('fullscreenchange',()=>{if(!doc.fullscreenElement)owned=false;notify();});
 async function leave(onlyOwned=false){
  wanted=false;
  if(!doc.fullscreenElement||(onlyOwned&&!owned)){notify();return;}
  try{await doc.exitFullscreen();message='';}
  catch{message='No se pudo salir de pantalla completa. Usa Esc o el control del navegador.';}
  notify();
 }
 async function enter(){
  wanted=true;
  if(doc.fullscreenElement||pending){notify();return;}
  if(!state().available){message='La proyección ocupa toda la ventana. Este navegador no permite activar la pantalla completa desde la página.';notify();return;}
  pending=true;message='';notify();
  try{
   await doc.documentElement.requestFullscreen({navigationUI:'hide'});
   owned=doc.fullscreenElement===doc.documentElement;
   if(!wanted&&owned)await leave(true);
  }catch{message='La proyección ocupa toda la ventana. El navegador no permitió la pantalla completa; puedes reintentar con el botón.';}
  finally{pending=false;notify();}
 }
 return {get state(){return state();},enter,close:()=>leave(true),toggle:()=>doc.fullscreenElement?leave():enter()};
}
