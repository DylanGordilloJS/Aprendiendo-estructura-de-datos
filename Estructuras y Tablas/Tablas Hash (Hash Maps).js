const personas  = {}

personas['dylan']  =12
console.log(personas['dylan']) 
delete personas['dylan']


const  cosas  = new  Map([
    ['dylan' , 14],
    ['kevin' ,22]
]) 
// obtener el valor
console.log(cosas.get('kevin'))
// comprobara exotenxia
console.log(cosas.has('dylan'))
//eliminar
console.log(cosas.delete('dylan'))
//tamano 
console.log(cosas.size) 

/* 
haz un funcion  que obtenga el valor de la clave  y lo 
valide con si es mayor que a 18 si es le dice un mensaje si no
le dice acceso denenegado


*/

function verificarValor (clave) {
    const objetos = new Map([
        ['dylan',12],
        ['kevin',13],
        ['maicol',12]
    ])

    if (objetos.size === 0 ) return false;

    if (objetos.has(clave)){
        console.log(` exelente ${objetos.get(clave)}`)
    }else{
        console.log('mal')
    }
}
// buscar 
verificarValor("dylan")

