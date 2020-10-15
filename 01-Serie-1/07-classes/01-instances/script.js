// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let Obj = new Cat('skitty','9');
    let Obj2 = new Cat('pixel','6');
    document.getElementById('run').addEventListener('click',function(){
        console.log(Obj)
        console.log(Obj2)
    })
    /* https://github.com/DelahayJoann/01.Series-1/blob/main/07-classes/01-instances/script.js
    
    document.getElementById('run').addEventListener('click', function(){
        console.log(new Cat('Skitty', 9));
        console.log(new Cat('Pixel',6)); 
    });*/
    
    // your code here
})();
