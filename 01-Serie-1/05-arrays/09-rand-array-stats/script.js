/*(() => {
    function getrandom(){
   return Math.floor(Math.random() * Math.floor(101));}
    document.getElementById('run').addEventListener('click', function(){
      
        document.getElementById('n-1').innerHTML = getrandom()
        document.getElementById('n-2').innerHTML = getrandom()
        document.getElementById('n-3').innerHTML = getrandom()
        document.getElementById('n-4').innerHTML = getrandom()
        document.getElementById('n-5').innerHTML = getrandom()
        document.getElementById('n-6').innerHTML = getrandom()
        document.getElementById('n-7').innerHTML = getrandom()
        document.getElementById('n-8').innerHTML = getrandom()
        document.getElementById('n-9').innerHTML = getrandom()
        document.getElementById('n-10').innerHTML = getrandom()
        
        
        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = 
        document.getElementById('average').innerHTML = sum / arrayOfn.length;
    });
})();*/
(() => {
//https://github.com/DelahayJoann/01.Series-1/blob/main/05-arrays/09-rand-array-stats/script.js*/
    document.getElementById('run').addEventListener('click', function(){
        let min = 101;
        let max = 0;
        let sum = 0;
        let arrayOfn = document.querySelectorAll('[id^="n-"]');                                                         
        for(elem of arrayOfn){
            elem.innerHTML = Math.trunc((Math.random()*100)+1);
            sum += Number.parseInt(elem.innerHTML);
            (Number.parseInt(elem.innerHTML) < min)? min = Number.parseInt(elem.innerHTML):'';
            (Number.parseInt(elem.innerHTML) > max)? max = Number.parseInt(elem.innerHTML):'';
        }
        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = sum / arrayOfn.length;
    });
})();    