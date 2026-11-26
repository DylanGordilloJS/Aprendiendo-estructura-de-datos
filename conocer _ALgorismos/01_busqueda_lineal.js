console.log("=========busqueda_lineal====")
function busqueda_linea (arr,targer){
    const l = arr.length
    
    for (let i = 0; i < l; i++) {
        if (arr[i] === targer) {
            return i
        }
        
    }
return -1 
}

console.log(busqueda_linea([2,2,1,3,1,3],21))

console.log('=====CALIFICACIONES==========')
// buscar calificaciones 

function calificaciones (arr, target)  {
    //recorrer la lsta
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target){
            return i
        }
    }
    return -1
}
// variables y verificacion
let notas = [85, 70, 95, 60, 40, 88, 92]
let target = 70
let result = calificaciones(notas , target)
if(result != -1 ){ 
    console.log("encontro el numero en la posicion: "+ result)
}else{
    console.log('no encontro el nuemro dio: '+ result)
}


console.log('El Buscador de Múltiples Coincidencias')

function Múltiples_Coincidencias(ar, tar) {
    let arr = []
    for (let i = 0; i < ar.length; i++) {
        if (ar[i]=== tar){
            arr.push(i)
        }
    }
    return arr // return [] no se puedo  es decir que el solo devuelveme un valor en  0 eso lo toma siempre sin leer lo demas
}
notas = [85, 70, 95, 60, 70, 88, 92, 70];
target = 70;
result = Múltiples_Coincidencias(notas,target)
if (result.length !== 0) {
    console.log("encotro los diferetes nueros:  " + result)
}else{
    console.log("error")
}