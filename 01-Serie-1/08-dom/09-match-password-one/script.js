// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    let passone = document.getElementById('pass-one')
    let passtwo = document.getElementById('pass-two')

    document.getElementById('run').addEventListener('click', () =>{
        if(passone.value !== passtwo.value){
            passone.style.border ='3px solid red';
            passtwo.style.border ='3px solid red';
        }
    })
    document.getElementById('run').addEventListener('click', ()=> {
        if (passone.value === passtwo.value){
            passone.style.border="3px solid green";
            passtwo.style.border="3px solid green";
        }
    })
})();
