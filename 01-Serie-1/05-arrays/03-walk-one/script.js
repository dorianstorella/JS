// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    document.getElementById('run').addEventListener('click', function(){
        for (elem of fruits) alert(elem); //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
    });
    
    
        
  
    // your code here

})();
