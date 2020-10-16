// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class personne {
    constructor(prenom, nom){
        this.prenom= prenom;
        this.nom=nom;
        }
    getname() {
        return `${this.prenom}${this.nom}`;
        }
    setname(nomcomplet){
        this.prenom=nomcomplet.split(` `)[0]
        this.nom=nomcomplet.split(` `)[2]
        }
    }
    document.getElementById('run').addEventListener('click', function(){
        let pers =new personne('Frodo', 'Baggins');
        console.log(pers.getname());
        pers.setname('Sam  Gamgee');
        console.log(pers.getname());
        
    })
})();
