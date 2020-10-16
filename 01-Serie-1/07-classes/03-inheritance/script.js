// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {                                      // IL FAUT QUE JE PENSE PLUS A ANALYSE SE QU ON ME DONNE ET PRENDRE MON 
    class Animal {                            // TEMPS POUR ANALYSE ET COMMENTER  PLUSIEUR FACON DE FAIRE AVEC DES BONNE 
        sayHello() {                          // OU MAUVAISE 
            return `${this.constructor.greeting}! I'm ${this.name}!`;          
        }
    }
    
    class chien extends Animal {
        static greeting='coucou';
        constructor(name){
        super();
        this.name= name; //appelle le constructeur de la classe parente ici chien avec le paramètre super et il le faut 
                        //car on est dans une extend
            }   
    }
    class chat extends Animal {
        static greeting='bizour';
        constructor(name){
            super();
            this.name=name
        }
    }
        document.getElementById('run').addEventListener('click', function(){
        console.log(new chien ('boulette').sayHello())
        console.log(new chat ('bibou').sayHello())
    })
    // your code here
})();
