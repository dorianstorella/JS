
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');
    
    var toi = {}
    for (i = 0; i < 10; i++){
    toi.genre = prompt("donne moi ton genre");
    toi.age = prompt("donne moi ton age");
    toi.ville = prompt("donne moi ta ville");
    
    if (confirm(toi.age+toi.genre+toi.ville)==true) {break;} }
        
 

