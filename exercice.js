const readlineSync = require("readline-sync");
//exercice 1.2
//firstname=("gerard")
//Name =(" lambert")
//city=(" paris")
//console.log("votre nom est " + firstname +  Name + "et vous vivez a" + city);

//exercice 1.3
//let userName = readlineSync.question('Can you give me your name please?');
//console.log ("bonjour" + userName )

//exercice 1.4
//let nom   = readlineSync.question("peut tu me donner ton nom? " )
//let  prenom  = readlineSync.question ("peut tu me donner ton prenom?")
//let ville = readlineSync.question ("on tu habite?")
//console.log ("bonjour " + nom + " " + prenom + " tu habite a " + ville)

//exercice 1.5
//let  nbr1 = readlineSync.question("donne un nombre entre 10 et 20 decimal")
//let  nbr2 = readlineSync.question ("donne un autre nombre entre 10 et 20 decimal")
//console.log ((Math.round(nbr1))*nbr2)

//exercice 1.6
//let nbr1 = readlineSync.question("donne un nombre entre 10 et 20 entier")
//let nbr2 = readlineSync.question("donne un autre nombre entre 10 et 20 entier")
//console.log (nbr1/nbr2)

//exercice 1.7
//let pointure = readlineSync.question ("quel est ta pointure")
//let ans = readlineSync.question ("quel est ton anneee de naissance ")
//console.log ((pointure * 2 + 5) * 50 - ans + 1766 )

//exercice 1.8
//console.log ("repond a cest 5 qestion")
//let quest1  = readlineSync.question ("comment tu t appel")
//console.log ("encore 4 question")
//let quest2  = readlineSync.question ("tu aime les chat")
//console.log ("encore 3 question")
//let quest3  = readlineSync.question ("quel sont tes hobbies")
//console.log ("encore 2question")
//let quest4  = readlineSync.question ("tu viens d ou ")
//console.log ("encore1 question")
//let quest5  = readlineSync.question ("commment va tu ")
//console.log (quest1 + " " + quest2 + " " + quest3 + " " + quest4 + " "  + quest5)

//exercice 2.1
//let quest = readlineSync.question ("quel est ton age?")
//if (quest >= 18) { 
// console.log ("tu es majeur")
//}
//if (quest < 18 ) {
//    console.log ("tu es mineur")
//}

//exercice 2.2

//var nbr1 = readlineSync.question ("donne un nombre entre 10 et 20:")
//var nbr2 = readlineSync.question ("donne un nombre entre 10 et 20:")
//var nbr3 = readlineSync.question ("donne un nombre entre 10 et 20:") 

//if  (nbr1 <= 20 && nbr1 >=10) {
//    console.log(nbr1)
//} else {
//    console.log("error")
//}
//if  (nbr2 <= 20 && nbr2 >=10) {
//    console.log(nbr2) 
//} else  {
//    console.log("error")
        
//} 
//if  (nbr3 <= 20 && nbr3 >=10) {
//    console.log(nbr3) 
//} else {
//    console.log("error")
//}

//exercice 2.3 
//let i = 0
//while (i <= 100) {
//  console.log(i);
//  i += 2;
//} 
//let v = 0
//while (v <= 50) {
//    console.log(v)
//    v += 2
//}

//exercice 2.4 
//for  (let nbr = 1 ; nbr <= 100; nbr += 1){
//   if (nbr%2 == 0) console.log(nbr/2) // prend que le rreste de ma division par 2
//   else console.log(nbr*3)           //  si nbr%2 nest egale 0  alors else     
//}

//exercice 2.5
//do{
//nbr = readlineSync.question ("quel est ton nombre prefere? :")
 //if (nbr <=41 || nbr >=43)  {
    //console.log("etes vous sur????")}}while (nbr <=41 || nbr>=43);    
    //if (nbr=42)  { console.log("bravo")}
    //let pick = new Number(readlineSync.question('What is your favourite number ? '));

    //while (pick != 42) {
    //    pick = new Number(readlineSync.question('Are you sure ? Try again : '));
    //}
//exercice 2.6
//jour=readlineSync.question ("choisis un  nombre entre 1-7: ")
//if (jour==1){
//console.log("lundi")
//}
//else 
//if (jour==2){
//    console.log("mardi")
//}
//else 
//if (jour==3){
//    console.log("mercredi")
//}
//else 
//if (jour==4){
//    console.log("jeudi")
//}
//else 
//if (jour==5){
//    console.log("vendredi")
//}
//else 
//if (jour==6){
//    console.log("samedi")
//}
//else 
//if (jour==7){
//    console.log("dimanche")
//}

//exercice 2.7
//integer=1
//integer=2
//integer=3
//integer=4
//integer=5
//readlineSync.question ("choisis parmis c est nombre;1,2,3,4,5 : ")
//n = readlineSync.question ("choisi un nombre")

// exercice 3.1 
//let array1 = [1,2,3,4,5]
//console.log (array1[1]+array1[2]+array1[3]+array1[4]+array1[0])
//let array2 = [100,101,102]
//console.log ( array2[0]+array2[1]+array2[2])

//exercice 3.2
//let array1 = [1,2,3,4,5]
//console.log ((array1[1]+array1[2]+array1[3]+array1[4]+array1[0])/5)
//let array2 = [100,101,102]
//console.log (( array2[0]+array2[1]+array2[2])/3)

//exercice 3.3
//let numbers = [2,4,7,8]
//numbers[0]=5
//numberscopy= [...numbers ]
//console.log (numberscopy , numberscopy.length)
//numberscopy.push(15)
//numberscopy.push(10)
//numberscopy.pop()
//console.log(numberscopy , numberscopy.length)

//exercice 3.4
//let arr = ["Apple", "Pear", "Banana"];

//for (let i = 0; i < arr.length; i += 1) {
//  console.log("Do you want to eat a " + arr[i] + "?");
//}
//let arre = ["Apple", "Pear", "Banana"];

//for (let elem of arre) {
//  console.log("Do you want to eat a " + elem + "?");
//}

//exercice 3.4
//let array = [15,8,3,4,5,6,7,16,9,10]
//console.log (Math.max (...array),Math.min(...array))

//exercice 4.1
//function calcSurface(L, l) {
//    return L * l;
//  }
//  let longueur = new Number(readlineSync.question('quel est ta longueur?'));
//  let largeur = new Number(readlineSync.question('quel est ta largeur'));
// console.log(`ton ratio est ${calcSurface(longueur,largeur)}`)
 
//exercice 4.2
//function rand10(){
//    return Math.floor(Math.random()*10)+1;
//}
//console.log(rand10());

//exercice 4.3
//function rand10(){
//    return Math.floor(Math.random()*10)+1;
//}
//function multiRand(m){
//    let arr = [];
//   for (var i = 0; i < m; i++){
//        arr.push(rand10());}
//        return arr;
//    }
//    let entree = new Number(readlineSync.question("combien veut tu generer de nombre?"));
//    console.log(multiRand(entree));

//exercice 4.4
//function calcdistance(ax, ay, bx, by){
//    let x = ax - bx;
//    let y = ay - by;
//    let dist = Math.sqrt(Math.pow(x,2)+ Math.pow(y,2)); //distance entre(a,b)= V (x2-x1)²+(y2-y1)²              
//    return dist;
//}
//console.log(calcdistance(4,1,1,1));

//exercice 4.6
//nbr=1;
//function factoriel(a){
//if (a>=1){
//    nbr *= a;
//    factoriel(a - 1);
//}
//return nbr
//}
//console.log(factoriel(4));

//exercice 5.1
//const taserie ={}
//function asktvserie(){
//taserie.Nom =readlineSync.question('quel est ta serie?');
//taserie.anneeprod=readlineSync.question(`quelle est l anne de prod "${taserie.Nom}"`);
//taserie.membre=[];
//let nommembre=true;
//while (nommembre=true) {
//    let ciao = readlineSync.question('donne moi un nom d un membre. tape exit pour stopper')
//    if (ciao ==='exit'){
//        break;
//    } 
//    taserie.membre.push(ciao);
//}
//}
//asktvserie();
//console.log(taserie);

//exercice 5.2
//function randomizecast(tvserie){
//    for (let i=tvserie.length - 1; i > 0;i--){
//        const calc = Math.floor(Math.random()*(i+1));
//        [tvserie[calc], tvserie[calc]] = [tvserie[calc], tvserie[i]];
//    }
//    return tvserie;
//} 
//const Serie={}; 
//function asktvserie(){
//    Serie.nom=readlineSync.question(`donne moi une serie`);
//    Serie.prod=readlineSync.question(`annee de production ?"${Serie.nom}"`);
//    Serie.tab=[];
//
//let gens =true;
//while (gens=true){
//    let tape =readlineSync.question('donne moi les memnre et quand tu a finit tape exit')
//    if(tape==='exit'){
//        break;
//    }
//    Serie.tab.push(tape)
//}
//return Serie;
//}
//asktvserie();
//function random(ser){
//   randomizecast(ser.tab);
//}
//random(Serie);
//console.log(Serie);

//exercice 6.1
//class Cercle {
//    constructor(xpos, ypos, rad){
//        this.xpos = xpos;
//        this.ypos = ypos;
//        this.rad = rad;
//    }
//    get surface(){
//        return Math.pow(this.rad, 2)*3.14;
//    }
//}
//let cercleun = new Cercle(4, 4, 2);
//console.log(cercleun.surface);

//exercice 6.2
//class  rectangle {
//    constructor(x, y, longueur, largeur){
//        this.x = x;
//        this.y = y;
//        this.largeur = largeur
//        this.longeur = longueur;
//   }
//    collision(otherectangle){
//       if 
//          ((((this.x+This.largeur)>otherectangle.x)&&((otherectangle.x + otherectangle.largeur)>this.x)) 
//             &&
//            (((this.y+this.longueur)>otherectangle.y)&&((otherectangle.y+otherectangle.longueur)>this.y))) 
//                {
//            return true;
//       }else{
//            return false;
//        }
//    }
//}
//const a = new rectangle(3, 3, 2, 2);
//const b = new rectangle(4, 4, 2, 2);

//exercice 6.3
//class rectangle{
//    constructor(x, y, largeur, longueur){
//        this.x=x;
//        this.y=y;
//        this.largeur=largeur;
//        this.longueur=longueur;
//    }
//    collision(otherectangle){
//         if
//            ((((this.x + this.largeur) > otherectangle.x) && 
//            ((otherectangle.x + otherectangle.largeur) > this.x))
//            &&
//            (((this.y + this.longueur) > otherectangle.y) && 
//            ((otherectangle.y + otherectangle.longueur) > this.y)))
//            {
//                return true;
//            } else {
//                return false;
//            }
//            }
//        }
//        function randInt(n){
//            return parseInt(Math.floor(Math.random()*n+1));
//        }
//       function gen(n){
//           const genere = []
//            for (i =0; i< n;i++){
//                genere.push(new rectangle(randInt(10), randInt(10), randInt(10), randInt(10))) 
//           }
//           return genere;
//       }
//        function collision(arr){
//            for (i=0;i < arr.length;i++){
//                for (j=0;j<arr.length;j++){
//                    temp=arr[i].collision(arr[j]);
//                    if (temp){
//                        console.log(`rectangle ${i} collision avec rectangle ${j}`)
//                    }
//                }
//            }        
//        }
//        collision(gen(10));
        

