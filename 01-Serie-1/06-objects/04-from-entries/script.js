// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    let object1=[];
    document.getElementById('run').addEventListener('click', function(){
        keys.forEach((item,index) =>{
            object1.push([item,values[index]]);
        });
        const obj =Object.fromEntries(object1);
        console.log(obj);
        });
})();
