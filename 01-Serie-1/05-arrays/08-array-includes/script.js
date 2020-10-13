// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];
document.getElementById('run').addEventListener('click', function(){
    console.log(fruits.includes('apple',[0]));
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
    });   
    // your code here

})();
