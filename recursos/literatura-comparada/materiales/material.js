// Preserve the exact reading location only when the previous history entry
// belongs to that course page. A new tab can have a referrer and no course history.
const back=document.querySelector('nav a');
if(back&&document.referrer&&history.length>1){
 try{
  const previous=new URL(document.referrer);
  const entries=window.navigation?.entries?.();
  const current=entries?.findIndex(entry=>entry.key===window.navigation.currentEntry?.key);
  const prior=current>0&&entries[current-1].url?new URL(entries[current-1].url):null;
  const courseHistory=entries?prior?.origin===previous.origin&&prior?.pathname===previous.pathname:true;
  if(courseHistory&&previous.origin===location.origin&&!previous.pathname.includes('/materiales/')){
   back.textContent='Volver a la página anterior';
   back.addEventListener('click',event=>{event.preventDefault();history.back();});
  }
 }catch{}
}
