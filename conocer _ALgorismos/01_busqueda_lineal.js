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