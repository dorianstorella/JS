// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    let passone = document.getElementById('pass-one');
    let indic = document.getElementsByClassName('indicator')[0];

    passone.setAttribute('maxlength' , '10');
    passone.addEventListener('input' , function() {
        indic.textContent = `${passone.value.length}/10`;
    })

})();
