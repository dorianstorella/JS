console.log("It works !!!");
const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
//variable
let age = 25; // I'm 25
age = 36; // I get older
age = 18; // Miraculously I'm getting younger
let phrase = "Coding is fun!";  //string
let isItTrue = true;   //booleen
let isItFalse = false; //booleen
//number()
let age = 23;
let sisterAge = age + 11;
age += 12; // age = age + 12;
console.log(age);
//strings
let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);
let userName = readlineSync.question("What's your name?");
console.log("He's called " + userName);
//new number()
let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));
let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");
new Number() converts a string to a number.
//beware type variable
console.log('10' + '5'); // '105' => string type
console.log(10 + 5); // 15 => number type
