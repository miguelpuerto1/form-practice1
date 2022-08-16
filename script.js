
document.body.addEventListener('click', function (e){
  if(e.target.classList.contains("far")){
   const inp=e.target.previousElementSibling;
   inp.type=inp.type=="text"?"password":"text";
  }
 });
