// class nodo {
//      constructor(valor) {
//         this.valor = valor
//         this.flecha = null
//      }
// }

// const nodo1 = new nodo("Hola ")
// const nodo2 = new nodo("mundo")
// const nodo3 = new nodo("tasa")

// nodo1.flecha = nodo2
// nodo2.flecha = nodo3

// console.log(nodo1.valor)
// console.log(nodo1.flecha.valor)
// console.log(nodo1.flecha.flecha.valor)


//hola mundo con nodo conectado

// console.log(nodo1.valor + nodo1.flecha.valor)

// data  (guardad valores)
// next (es la flecha o puntero que que guarda el siguente direccion del nodo)

class oraganizar {

   constructor (data) {
      this.data = data
      this.next = null
   }
}

const ndo1 = new oraganizar("hola")
const ndo2 = new oraganizar("cosa")
const nod3 = new oraganizar("tasa")

ndo1.next = ndo2
ndo2.next = nod3

console.log(ndo1.data)
console.log(ndo1.next.data)
console.log(ndo1.next.next.data)

// interpolacion 

console.log(`estos son los nodos  ${ndo1.data} => ${ndo1.next.data} => ${ndo1.next.next.data} => null`)



// ejemplode de nodo de  un tren

class vagon  {
    constructor (carga) {
         this.carga = carga  // es al carga osea todos los elemetos
         this.gancho = null   // el gancho que conecta todo lo vagones  || esto es es le punter  mas conocido next / flecha
    }
}

// cracion de objetos para guardales   la carga 
// creacion de vagones
const vagon1 = new vagon("carbon") 
const vagon2 = new vagon("hierro")
const vagon3 = new vagon("madera")


// conexion de vagones
vagon1.gancho = vagon2
vagon2.gancho = vagon3


let actual =  vagon1
// mientra el vagon donde estoy no sea vacio
while (actual !== null) {
   // e; vagon donde estoy
   console.log("Revisamos " + actual.carga)
   // para que comine a los siguentes vagones
   actual = actual.gancho
}

// ejemplo de   de Collar nodos 

class Collar {
   constructor(decoracion) {
      this.decoracion =decoracion
      this.hilo = null
   }
}

class EstucheDeCollar {
    constructor () {
       this.iniciodelhilo = null
    }

    LinkedList(Nombres){
      const Nueva_bola = new Collar(Nombres)
       if(this.iniciodelhilo ===  null) {
         this.iniciodelhilo = Nueva_bola
         return
       }
       let  actual =this.iniciodelhilo
       while ( actual.hilo !== null) {
               actual =actual.hilo
       }
       actual.hilo = Nueva_bola
    }

   print() {
   let Actual_decoracion = this.iniciodelhilo
   // minetras la decoarion no sea nada
   while (Actual_decoracion !== null) {
   // aca son dice en donde estamos 
   console.log(` conectando todo las bolas ${Actual_decoracion.decoracion}`)
   // aca avanzada cada interacion  
   Actual_decoracion = Actual_decoracion.hilo
   }
    }
}

const miCollar = new EstucheDeCollar();
miCollar.LinkedList("Perla");
miCollar.LinkedList("Rubí");
miCollar.LinkedList("Diamante");

// cracion de nodos ||  descoracon

// const  Decoracion1 = new Collar("bola 1")
// const  descoracon2 = new Collar("bola 2")
// const  descoracon3 = new Collar("bola 3")
// const  descoracon4 = new Collar("bola 4")
// const  descoracon5 = new Collar("bola 5")

// //conexion de decoracion 

// Decoracion1.hilo = descoracon2
// descoracon2.hilo = descoracon3
// descoracon3.hilo = descoracon4
// descoracon4.hilo = descoracon5



