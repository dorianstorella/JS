
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    const body=document.body;
    
    function getRandomColor() {
        return Math.floor(Math.random()*16777215).toString(16);
    }document.getElementById("run").addEventListener('click',function(){
        body.style.background="#"+ getRandomColor()});
})();
