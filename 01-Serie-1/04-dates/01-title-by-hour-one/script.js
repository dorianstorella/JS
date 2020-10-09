
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
   var h = new Date();
   var heure =h.getHours()
   //alert(heure)
    if (heure>=18) {
    document.getElementById("target").innerHTML = ("good evening")
    } else
    {document.getElementById("target").innerHTML = ("HELLO!")}
    // your code here

})();
