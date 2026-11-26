const arr =  [1,2,2,3,3]
const name1 = new Set(arr)
//anadir cosas
 //name1.add(1 )
console.log(name1)// imprimimos
// si encontramos 3 en una funcion llama busaueda nos  salta 1 y no -1 

function busaueda (name1 ,ob){
    //busqueda pra busquadarlo (ob) 
    if(name1.has(ob)){
        return 1
    }
    //no lo en cuentra 
    return -1
}
console.log(busaueda(name1,5))


// meter cojunto a array  limpio con sus elemtos
let pru = [...arr]
console.log(pru)

// meter con su estrucutra de cojuntos
pru = Array(arr)
console.log(JSON.stringify(pru))
