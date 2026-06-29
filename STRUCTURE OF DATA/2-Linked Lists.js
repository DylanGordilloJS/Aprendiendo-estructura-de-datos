// // linked list




// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LINKEDLIST {
//     constructor () {
//         this.head = null;
//     }   
//     append (value) {
//         const newNode =  new Node(value)
//         if(!this.head) {
//             this.head = newNode
//             return
//         }
//         let current = this.head
//         while(current.next) {
//             current = current.next
//         }
//         current.next = newNode
//     }

//     print() {
//         let current = this.head
//         let result = []
//         while(current) {
//             result.push(current.value)
//             current = current.next
//         }
//         console.log(result.join(" ->") + "-> null")
//     }

//     reverse (){
//         let prev = null
//         let current = this.head
//         let next = null

//         while(current !== null){
//             current.next = prev  // (3)
//             prev =current
//             current = next
//         }
//           this.head = prev
//     }
// }

// const  milsita = new LINKEDLIST()
// milsita.append(1)
// milsita.append(3)
// milsita.append(4)
// milsita.reverse()
// milsita.print()


// class carts {
//     constructor (costo){
//         this.costo = costo
//         this.next = null
//     }
// }

// class linked_list_cart {
//     constructor () {
//         this.head = null
//     }

//     inser_nodo (costo){
//         const  newcart = new carts(costo)
//         if(!this.head) {
//             this.head  = newcart
//             return
//         }
//         let current = this.head
//         while (current.next) {
//             current =  current.next
//         }
//          current.next  = newcart // referencia  que es null  cambiada por el dato
//     }

//     dyspley () {
//         let current = this.head
//         let end = []
//         while (current) {  // actual 
//             end.push(current.costo)
//             current = current.next
//         }
//             console.log(end.join(" -> ")  +  " -> null")
//     }

//     conteo_nodo ()  {
//         let current = this.head
//         let total = 0
//         while (current) {
//            total++ // conteo cuando hace la iteracion
//             current = current.next
//         }
//         console.log(`tienes la ${total} productos en tu carrito`)
//     }

//     delete (costo) {
//         if(!this.head){
//             return
//         }
//         if(this.head.costo === costo){
//             this.head = this.head.next
//             return
//         }
//            let current = this.head
//            while(current.next) {
//             if (current.next.costo === costo) {
//              current.next = current.next.next
//              return
//             }
//             current = current.next
//         }
//     }


// }

// const r = new linked_list_cart ()
// r.inser_nodo(1)
// r.inser_nodo(2)
// r.inser_nodo(3)
// r.conteo_nodo()
// r.dyspley()
// r.delete(2)
// r.dyspley()



//Crear una  una lista enlazada  de  tieneda

class Store {
    constructor(value){
        this.value = value
        this.arrow = null
    }

}

// lista enlazada

class linked_list_Store {
    constructor (){
        this.head = null
    }

  Insert (value) {
     const newvalue = new Store(value)
     if(!this.head) {
        this.head = newvalue
        return
     }
     let current = this.head    
     while(current.arrow) {
        current = current.arrow
     }
      current.arrow = newvalue
  }
   
  look() {
    let current = this.head
    let list = []
    while(current){
         list.push(current.value)
         current = current.arrow
    }
       console.log(list.join(" -> ") + " -> null")
  }

  conteto() {
    let current = this.head
    let total = 0
    while(current){
      total++
      current = current.arrow
    }
    console.log(`valor es: ${total}`)
  }

  delete (value) {
    if(this.head.value === value){
        this.head =this.head.arrow
     return
    }
    let current = this.head
    while(current.arrow){
         if(current.arrow.value === value){
            current.arrow = current.arrow.arrow 
            return
         }
         current = current.arrow // haciendo la referecia
    }
  }
   

}

const list_data = new linked_list_Store()
list_data.Insert(1)
list_data.Insert(3)
list_data.Insert(2)
list_data.Insert(12)
list_data.conteto()
list_data.look()
list_data.delete(12)
list_data.look()

/* CASO DE  USO (LIKEND LIST)
se usa como  en google  o 
*/


