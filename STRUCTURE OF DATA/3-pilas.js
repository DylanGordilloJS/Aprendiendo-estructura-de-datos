let pila = [];

// Push: agregar elementos
pila.push('Manzana');
pila.push('Pera');

// Pop: sacar el último elemento
let ultimo = pila.pop(); // Regresa 'Pera'
console.log(JSON.stringify(ultimo))


// aplicacion en un clase

class pila2 {
    constructor(){
        this.diego = [];
    }

    join (elemento) {
        this.diego.push(elemento);
    }

    print_regresar_end() {
        console.log(JSON.stringify(this.diego.pop()))
    }
}

// instacia de de recolacion de objectos
const obj =  name = new pila2();
obj.join(2);
obj.join('hola');
obj.print_regresar_end() 