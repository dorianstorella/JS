
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value
   function factorial(x){
   return (x==0)? 1 : x * factorial(x-1);}
    document.getElementById("run").addEventListener("click", () => {
       alert(factorial(Number.parseInt(document.getElementById('number').value)));

    });

})();
