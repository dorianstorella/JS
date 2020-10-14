// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);
    document.getElementById('run').addEventListener('click', function(){ 
      fruits.add('kiwi');
      fruits.add('banana');  //ajoute
      fruits.delete('apple'); //supprime
      fruits.delete('cerise');
    //  fruits.clear(fruits) supprime tout les element du tableaux
      console.log(fruits)
    })
})();
