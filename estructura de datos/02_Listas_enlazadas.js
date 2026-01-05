class nodo {
     constructor(valor) {
        this.valor = valor
        this.flecha = null
     }
}

const nodo1 = new nodo("Hola ")
const nodo2 = new nodo("mundo")
const nodo3 = new nodo("tasa")

nodo1.flecha = nodo2
nodo2.flecha = nodo3

console.log(nodo1.valor)
console.log(nodo1.flecha.valor)
console.log(nodo1.flecha.flecha.valor)


//hola mundo con nodo conectado

console.log(nodo1.valor + nodo1.flecha.valor)
