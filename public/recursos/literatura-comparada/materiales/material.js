// Keep the exact week or reading tab as the return destination, using only a same-origin referrer.
const back=document.querySelector('nav a');
if(back&&document.referrer){
 try{
  const previous=new URL(document.referrer);
  if(previous.origin===location.origin&&!previous.pathname.includes('/materiales/')){
   back.addEventListener('click',event=>{event.preventDefault();history.back();});
  }
 }catch{}
}
