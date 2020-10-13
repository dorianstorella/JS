// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    var suppdernier =fruits.pop();
    var supppremier =fruits.shift();
    var nouvpremier =fruits.unshift('ananas');
    var nouvdernier =fruits.push('kiwi')
    
    document.getElementById("run").addEventListener('click',function(){
        alert(fruits)
    })
    // your code here

})();
