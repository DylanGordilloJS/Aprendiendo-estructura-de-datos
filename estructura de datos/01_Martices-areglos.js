//  AREGLOS UNIDIMENCIONALES
// 1D
//  son datos finos que  se pude haceder con indice (posicion  numeroa  0  a nose por que esto debede de los datos)
let f = [15,25,18]
let suma = 0
for (let i = 0; i < f.length; i++) {
    suma +=  f[i]
}


//    Matrices (2D)
let matriz = [
  [10, 20,], // Fila 0
  [30, 40]  // Fila 1
];
let suma2 = 0
for(let i = 0 ; i < 2 ; i++){
    for(let j = 0 ; j < 2 ; j++){
        suma2 += matriz[i][j] 
    }
}
console.log(suma)

let calificaciones = [
  [10, 8, 9], // Fila 0: Alumno A
  [4, 5, 6]   // Fila 1: Alumno B
]

let a= 0

for(let i = 0 ; i < 3 ; i++){
    a += calificaciones[0][i] + calificaciones[1][i]
}
console.log(a)


let  mapa = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,100,0],
]

for(let i = 0 ;  i < 3 ; i++) {
    for(let n = 0 ; n <  4; n++){
        if (mapa[i][n] === 100) {
            console.log(`tesoro encontrado en la fila ${i} colmna ${n}`)
        }
    }
}


 const matrix  = [
    [2, 3,56],
    [4,7,9,3],   //siempre usar la coma 
    [2,32,111],
]

let amacenar = 0

for (let i = 0; i < 3; i++) {
       for (let k = 0; k < 4; k++) {
            if(matrix[0][k] === 111 )  {amacenar =  matrix[i][k]}
       }     
}
console.log(amacenar)



let Name = [
    ["dylan", "kevin", "jorge","molina"],
    ["carlos","sebastian","borques","canto"],
    ["esteban","lucas","camilo","narago"],
]

for (let i = 0; i <  3; i++) {
    for (let j = 0; j < 4 ;j++) {
        if(Name[i][j] === "camilo")[
            console.log(`has incotrado el nombre en fila ${j} y el nombre es ${i}`)
        ]
    }    
}

let datos_diferentes = [
    ["numbero",true,undefined,Number],
    [233, null , "tipo datos",String],
    [23,21,551,22],
]

for (let i = 0; i < datos_diferentes.length; i++) {
    for (let j = 0; j < 4; j++) {
            if(datos_diferentes[i][j] === String)  {console.log(`haz incotrado el tipo de datos que esta 
            en la fila ${i} y en la columna ${j}`)}
    }
}


// ordenamiendo borbuja 

let lista = [1,5,2,8,1,1] 
let n = lista.length 

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n  ; j++) {
        if(lista[j]  >  lista[j + 1] ) {   
            let temporla = lista[j]   
            lista[j] = lista[j + 1]        
            lista[j + 1] = temporla 
        }
    }
}


// ordenamiendo borbuja  pratica 1 

function Bubble_Sort (arr) {
    let length = arr.length
    for (let i = 0; i < length; i++) {
        for(let j = 0 ; j < length ; j++) {
            if(arr[j] > arr[j  + 1]) {
                let axuliar = arr[j]
                arr[j] = arr[j +  1]
                arr[j + 1] = axuliar
            }
        }
    }
    return arr
}


// console.log(Bubble_Sort([2,1,0,6,1,8]))


let arr = [2,1,5,2]
function  reveres (arr) {   
    let casa = []
    let   logutud = arr.length 
   for(let i = arr.length -1 ; i >= 0; i--) {
            casa.push(arr[i])
   }
   for (let j = 0; j < logutud; j++) {
        for(let h = 0 ; h < logutud ; h++) {
            if(casa[h] > casa[h  +  1]) {
            let temporals = casa[h]
                casa[h] = casa[h + 1] 
                casa[h  + 1 ] = temporals
            }
        }    
   }
   return casa
}

console.log(reveres(arr))


function cub () {
    let incotrado = 0
   const arr = [
        [0,0,0,0],
        [0,0,0,2],
        [0,0,1,0],
   ] 

   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < 4 ; j++) {
        if (arr[i][j] === 1) {
               incotrado++
        }else if (arr[i][j] === 0 || arr[i][j] === 2) {
               arr[0][2] = 1
                incotrado++
     }
   }
 }
   return incotrado
}

console.log(cub())

// entendimiento del Swap

function prectica () {
    let arr = [7,9]
    for(let i= 0; i <arr.length ; i++)
        for(let j= 0; j < arr.length; j++){
            if(arr[j] < arr[j+1]){
                let temporal = arr[j] // guerdas 
                arr[j] = arr[j+1]  //  muevs
                arr[j+1] = temporal // recuperas
            }
    }
    return arr
}
console.log(prectica())
