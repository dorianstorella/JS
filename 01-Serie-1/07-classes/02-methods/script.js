//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class personne {
                constructor(prenom,nom){
                this.prenom=prenom;
                this.nom=nom;
            }
            parler(){
                return `hello,${this.prenom} ${this.nom}`;
                 //
            }
            }
    document.getElementById('run').addEventListener('click', function(){
        let pers = new personne('dodo','lassaumur');
            console.log(pers.parler());
            
    });

})();
