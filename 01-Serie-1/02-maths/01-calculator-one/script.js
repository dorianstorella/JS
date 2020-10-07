
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
     
    document.getElementById("addition").addEventListener("click", function calculate(x,y) {
    var x = Number(document.getElementById('op-one').value);
    var y = Number(document.getElementById('op-two').value); 
    alert(x+y)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var x = Number(document.getElementById('op-one').value);
        var y = Number(document.getElementById('op-two').value); 
        alert(x-y)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var x = Number(document.getElementById('op-one').value);
        var y = Number(document.getElementById('op-two').value); 
        alert(x*y)
    });

    document.getElementById("division").addEventListener("click", function() {
        var x = Number(document.getElementById('op-one').value);
    var y = Number(document.getElementById('op-two').value); 
    alert(x/y)
    });
})();
