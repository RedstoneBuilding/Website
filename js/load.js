$( document ).ready(function() {
  $('.fadein').fadeIn(3000);
  $('.slidedown').slideDown(1000);

  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js', {scope: '../'})
  .then((reg) => {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
});
window.addEventListener("load", () => {
 document.querySelector("body").classList.add("loaded");
});
if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
    var popup = document.getElementById("landscapePopup");
    popup.classList.toggle("show");
}
