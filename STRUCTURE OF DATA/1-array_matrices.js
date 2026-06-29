// array y matrices 
//suma
const  arr = [13,3,12,4,5]
let sum = 0
let i = 0
while(i < arr.length){
    sum += arr[i]
    i++
}
console.log(sum)
//multiplicacio
const arr1 = [5,6,7,1,7]
let mult = 1 // se inicio por uno ya que por 0 da en mismo numero 
let p = 0

while(p < arr1.length){
    mult *= arr1[p]
    p++
}
console.log(mult)
//divicion
const arr2 = [1,2,5,7,13,5]
let div = 1
let k = 0

while(k <arr2.length){
    div /=arr2[k]
    k++
}
console.log(div)

//matices 

const arr3 = [
    [1,2,4,6],
    [1,2,3,5],
    [2,4,6,7]
]
let suma1 = 0
for (let s = 0; s < 3; s++) {
    for (let j = 0; j < 4; j++) {
       suma1 += arr3[s][j]
    }
}
console.log(suma1)

// encotrar algo 

const arr4 = [
    [1,3,4,5],
    [1,2,5,2],
    [13,2,3,5]
]
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 4; k++) {
    if (arr4[i][k] == 13) {console.log(`tesosro encontrado fila ${i} columa ${k}`)}
  }
}

// array con nombre 
const arr5  = [
   ["dylan","camilo","maicol","stiven"],
   ["computadora","teclado","caso","dedo"],
   ["mause","lola","ses","cosa"],
   ["Nan","lol","po","re"],
]

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
        if(arr5[i][k] == "maicol"){
            console.log(`tesosro encontrado fila ${i} columa ${k}`)
        }
    }
}
//Sistema de Gestión de Inventario


const arr6 = ["Laptop", "Smartphone", "Teclado"]
const arr7 = [
    [3,1,6,22],
    [22,35,2,7],
    [22,44,5,77]
]
// la suma total de todo producto que tiene el invetario
for (let i = 0; i < 3; i++) {
    let sum = 0
 for (let h = 0; h < 4; h++) {
     sum =+ arr7[i][h]
 }    
 console.log(`${arr6[i]} : ${sum}`);
}

// el mayor dato de sus columna con su nombre  de cada uno (saldra todo productos con el nombre el mayor numero)
for (let i = 0; i < 3; i++) {
    let numeroMayor = arr7[0][0]
    for (let s = 0; s < 4; s++) {
        if(arr7[i][s] > numeroMayor){
           numeroMayor = arr7[i][s]
        }
    } 
    console.log(`El número más grande de la matriz es:${numeroMayor} y el producto es ${arr6[i]}`);
}
//LA SUMA TOTAL : SE SUAM TODO EL PRODUCTO Y SE DIVIDE EN 4  ESE SERA EL TOTAL : 37
for (let i = 0; i < 3; i++) {
     let suma_divicion_total = 0
    for (let s = 0; s < 4; s++) {
        suma_divicion_total += arr7[i][s]  /4
    }    
    console.log(`total ${suma_divicion_total}`)
}
//SITEMA DE IVENTARIO
// se crear un array con los datos alamacenados en la mamoria  que sea unidimicional  (complet)
// crear un array de matrix con los datos de producto (complet)
// sumar todos los datos del producto (complet)
// proyectar en la pantalla el dato mayor de la fila
// sumar todo y divir por 4 

const NAME_PRODUCT =["COMPUTER","BRAND","MODEL"]
const THE_PRODUCT =[
    [1,32,4,5],
    [12,4,6,1],
    [14,6,22,55],
]

// interact the  product by addition
for (let i = 0; i < 3; i++) {
     let addition = 0
    for (let k = 0; k < 4; k++) {
        addition += THE_PRODUCT[i][k]
    }
    console.log(`total of the addition ${addition}`)
}

// the number elderly 
 for (let i = 0; i < 3; i++) {
     let number_elderly = THE_PRODUCT[i][0]
    for (let k = 0; k < 4; k++) {
         if(THE_PRODUCT[i][k] > number_elderly){
            number_elderly = THE_PRODUCT[i][k]
         }
    }
    console.log(`NAME ${NAME_PRODUCT[i]} is  ${number_elderly}`)
 }
//total
for (let i = 0; i < 3; i++) {
       let suma_divicion_total = 0
     for (let k = 0; k < 4; k++) {
    suma_divicion_total = THE_PRODUCT[i][k] / 4
     }    
     console.log(`product total is ${suma_divicion_total}`)
}
// EJErcicio de Matrices

/*

Dada una matriz cuadrada de números enteros de tamaño N x N, escribe una función que calcule y devuelva de forma separada la suma de su diagonal principal y la suma de su diagonal secundaria.

Diagonal principal: Los elementos que van desde la esquina superior izquierda hasta la esquina inferior derecha.

Diagonal secundaria: Los elementos que van desde la esquina superior derecha hasta la esquina inferior izquierda.

Ejemplo de entrada:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]





 /*  Ejercicio: La Matriz Transpuesta 
 
Dada una matriz de números enteros, escribe un programa que calcule su matriz transpuesta.

Transponer una matriz significa transformar las filas en columnas y las 
columnas en filas. El elemento que originalmente estaba en la fila 
i y columna j ahora pasará a estar en la fila j y columna i.

Ejemplo de entrada (Matriz de 2x3):
 
 [
  [1, 2, 3], 0
  [4, 5, 6]  1  
]


arr [i][j]         aux[j][i] 
arr[0][0]          aux[0][0] = 1
arr[0][1]          aux =[1][0] = 2
arr[0][2]          aux =[2][0] = 3
arr[1][0]          aux =[0][1]  = ,4
arr[1][1]          aux= [1][1] = ,5
arr[1][2]          aux = [2][1] = ,6

aux =  [
    [1,4],
    [2,5],
    [3,1]
]

*/


function  Transponer() {
    const arr = [
        [1, 2, 3],
        [4, 5, 6]
    ]

   let aux = [
     [],
     [],
     []
   ]

   for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            aux[j][i] = arr[i][j]
        }    
   }
   return  JSON.stringify(aux)
}

console.log(Transponer())


/* 

Ejercicio: Matriz Simétrica

Escribe una función en JavaScript que reciba una matriz cuadrada (de tamaño N x N) y 
determine si es simétrica o no (debe devolver true o false).
Una matriz es simétrica si es igual a su propia matriz transpuesta. En términos de código, 
esto significa que el número que está en la posición [i][j]
debe ser exactamente el mismo que está en la posición [j][i] en toda la matriz.



[
  [1, 7, 3],
  [7, 4, -5],
  [3, -5, 6]
]

paso a paso 

tener el objeto en l array que es matrix con todos los datos se delcara con constatnte

 */

function Matris_simetrica(params) {
    const arr = [
  [1, 7, 3],  // 0
  [7, 4, -5], // 1
  [3, -5, 6] // 2
]


    // interar todos los  filas y columnas

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //primero le damos los datos 
            // un condicional para comprovar son iguales
            if(arr[i][j] !== arr[j][i]){
                    return false
            }//no necesitamos else porque es como decir si son igual es true el un vuela que hace bucle nos daria true hay que dejar que revise todo
        }
    }
    // me devuelve  verdadero si  a revusisar los  datos  son iguales
    return true
}

console.log(Matris_simetrica())

/* sumar 2 matrixes 

const matrizA = [
  [1, 2],
  [3, 4]
];

const matrizB = [
  [5, 6],
  [7, 8]
];


*/

function sumar_dos_matrixes (){
  const matrizA = [
  [1, 2],
  [3, 4]
]

let   resultado =[
  [],
  []
]

const matrizB = [
  [5, 6],
  [7, 8]
]



    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j]
        }        
    }
    return JSON.stringify(resultado)
}

console.log(sumar_dos_matrixes())

/*
Ejercicio: Multiplicación por un Escalar
Escribe una función en JavaScript que reciba una matriz de cualquier tamaño y un número entero (llamado escalar).
La función debe devolver una nueva matriz donde cada uno de los elementos originales se haya multiplicado por ese número.
*/

function Multiplicación_Escalera () {
const matriz = [
  [2, 4],
  [1, 3]
]
// lo que vamos a multiplicar
const escalar = 3
// almacenar los datos multiplicados
let resultado = [
    [],
    []
]

//interacion de matrix
for (let i = 0; i < 2; i++) { // filas
    for (let j = 0; j < 2; j++) { // columnas
        resultado[i][j] = matriz[i][j] * escalar
    }
}

return  JSON.stringify(resultado)
} 

console.log(Multiplicación_Escalera())


/*Suma por Filas



Escribe una función en JavaScript
 que reciba una matriz y devuelva un arreglo simple 
 (de una sola dimensión) que contenga la suma de los elementos de cada 
 fila por separado
*/ 


function arreglo_suma_simple () {
    const matriz = [
  [1, 2, 3], // Fila 0
  [4, 5, 6]  // Fila 1
];
// alamecenar datos de solo una  1 dimecion
const valor_total = []

for (let i = 0; i < 2; i++) { // filas
    let suma = 0
    for (let j = 0; j < 3; j++) { // columnas
       suma  += matriz[i][j]

    }
    valor_total.push(suma)

}
return JSON.stringify(valor_total)
}
console.log(arreglo_suma_simple())


/*
 matrix diagonal
 
 esto cosa que que tendremos que suamar en x 
 de todos los  datos

 este sera el esta sera la matrix  de 3x3

 [
  [1,3,5], 0
  [5,6,7], 1
  [6,5,4]  2
 ]

 como tenemos  la fila  0 su columan 0  hazi haremos que 
 se suma  
 con la otra diganal tendremos que comenzar desde  la ultima index  culumna-




*/


function suma_diagonal () {
    // la matrix que tendremos que suamr
    const arr =[
        [1,3,5], // 0
        [5,6,7], //1
        [6,5,4] // 2
    ]
    // crearemos  todos la variables que utilizaremos
    // para utilizar las  en nuetro return  bloque 
    // de codigo  par sobrescribir con el dato que necesitmso
    let suma_diagonal1 = 0
    let suma_diagonal2 = 0
    //  bucles para recorrer la lista y culumnas
    for (let i = 0; i < 3; i++) {
        // suma  de  x 
        suma_diagonal1 += arr[i][i]
        // suma  de  y
        suma_diagonal2 += arr[i][arr.length -1 -i] 
    }

    return suma_diagonal1 + 'la otra' + suma_diagonal2
}
console.log(suma_diagonal())