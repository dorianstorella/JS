
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var h = new Date();
    var heure =h.getHours()+h.getMinutes();
   
    var alert=17+30;
    //alert(heure)
     if (heure>=alert) {
     document.getElementById("target").innerHTML = ("good evening")
     } else {
     document.getElementById("target").innerHTML = ("HELLO!")}
     // your code here
    // your code here

})();
