// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    let passone = document.getElementById('pass-one');
    let passtwo = document.getElementById('pass-two');

   document.getElementById("run").addEventListener("click", () => {
    if(passone.value !== passtwo.value){
        passone.setAttribute('class','error');
        passtwo.setAttribute('class','error');
        }
   }) 

})();
