// esturctura de basica de cola


class cola {
    constructor () {
        this.diego = [];
    }
    // poner elemeto midiante  la array
    poner (elemeto) {
        this.diego.push(elemeto);
    }
    // quitar el primer elemeto
    quitar() { 
        if (this.esta_vacio())  return 'Cola vacia';
        this.diego.shift();
    }
    // imprime el primer elemento de  array con el indice 0
    verificar(){
        if (this.esta_vacio()) return 'Cola vacia';
        return  this.diego[0];
    }
    //  verifcar que la logitud sea 0 si esa vacio
    esta_vacio () {
        return this.diego.length === 0 ;
    }
   // sacar lo logutud de array
    logutud () {
        return this.diego.length ;
    }

};


let colas = new cola()
colas.poner(1);
colas.poner(2);
colas.poner(3);

colas.quitar();
colas.verificar();
colas.esta_vacio();
colas.logutud();

console.log(JSON.stringify(colas))
