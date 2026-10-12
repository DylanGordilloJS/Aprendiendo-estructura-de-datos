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




const inventario = new Map([
    ['manzana', 15],
    ['televisor', 450],
    ['audifonos', 60],
    ['pan', 5]
]);

function procesarProducto(inventarioMap, nombreProducto) {
    // 1. Validar si el mapa está vacío o si no mandaron un nombre válido
    if (inventarioMap.size === 0 || !nombreProducto || nombreProducto.length === 0) {
        console.log('Inventario vacío o producto inválido');
        return;
    }
    
    // 2. Comprobar si el producto existe
    if (inventarioMap.has(nombreProducto)) {
        // Obtenemos el precio original
        const precio = inventarioMap.get(nombreProducto);
        console.log(`Producto: ${nombreProducto} | Precio: $${precio}`);
        
        // 3. Si el precio es mayor o igual a 50, aplicamos el descuento AQUÍ ADENTRO
        if (precio >= 50) {
            const precioConDescuento = precio * 0.90; // Aplica el 10% de descuento
            console.log(`Precio con descuento: $${precioConDescuento}`);
        }
    } else {
        // 4. Si NO existe en el mapa
        console.log(`El producto '${nombreProducto}' no está en el inventario`);
    }
}

// Pruebas:
procesarProducto(inventario, "televisor"); 
// Producto: televisor | Precio: $450
// Precio con descuento: $405

procesarProducto(inventario, "manzana");
// Producto: manzana | Precio: $15

procesarProducto(inventario, "laptop");
// El producto 'laptop' no está en el inventario






function contarPalabras(texto) {
    let palabra = texto.toLowerCase().split(' ')
    let  hast = new Map()
    for (let i = 0; i < palabra.length; i++) {
            let p  = palabra[i]
        if (hast.has(p)) {
            hast.set(p ,hast.get(p)  + 1)
        }else{
            hast.set(p, 1)
        }
    }
    return hast
}

const frase = "hola mundo hola javascript mundo hola";
const resultado = contarPalabras(frase);

console.log(resultado);



console.log("|||||||||||||||||||||CARATER UNICO|||||||||||||||||||||||||||||")
function primerCaracterUnico(texto) {
    if (texto.length === 0){
        return null;
    }

    let conteo  = new Map ()
    for (let i = 0; i < texto.length; i++) {
        let p = texto[i]
        // esto pasa al ser la primera palabra se undifine lo suma 
        // con + 1 NAN  por que eso que hace || por que hacemos
        // pasar undifine como 0 y lueo sumamos 1 
        // nos da undifine por que no esta en el mapa 
        conteo.set(p, (conteo.get(p) || 0) + 1);
    }
    for (let i = 0; i < texto.length; i++) {
        let p = texto[i]
        if (conteo.get(p) === 1){
            return p
        }
        
    }
return null
}
console.log(primerCaracterUnico("swiss"));    

console.log(primerCaracterUnico("programacion")); 

console.log(primerCaracterUnico("aabbcc"));   


console.log("||||||||||||||||||||||||||sumados numeros|||||||||||||||| ")

function dosSumas(numeros, objetivo) {
  let visto = new Map(); // Guardará: numero => indice

  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let complemento = objetivo - num;
    // TODO 1: Verificar si el 'complemento' ya existe en el Map 'visto'
    if (visto.has(complemento)){
        return [visto.get(complemento), i ]
    }

        visto.set(num, i)
    
    // TODO 2: Si existe, retornar un arreglo con [visto.get(complemento), i]
    
    // TODO 3: Si no existe, guardar el número actual en el Map: visto.set(num, i)
  }

  return []; // Si no encuentra ningún par
}

// Casos de prueba:
console.log(dosSumas([2, 7, 11, 15], 9)); 
// Debería imprimir: [0, 1]  (porque numeros[0] + numeros[1] => 2 + 7 = 9)

console.log(dosSumas([3, 2, 4], 6));      
// Debería imprimir: [1, 2]  (porque numeros[1] + numeros[2] => 2 + 4 = 6)

console.log('||||||||||||||||||AGREAGAR USUARIO POR ROL|||||||||||||||||||||||||')


const usuarios = [
  { nombre: "Ana", rol: "admin" },
  { nombre: "Carlos", rol: "editor" },
  { nombre: "Elena", rol: "admin" },
  { nombre: "Luis", rol: "usuario" },
  { nombre: "Marta", rol: "editor" }
];

function agruparPorRol(lista) {
  let grupos = new Map();

  for (let i = 0; i < lista.length; i++) {
    let u = lista[i];
    if (grupos.has(u.rol)){
        grupos.get(u.rol).push(u.nombre)
    }else{
        grupos.set(u.rol,[u.nombre])
    }

    // TODO 1: Verificar si el rol ya existe en el Map
    // TODO 2: Si el rol ya existe, agregar el nombre al arreglo del rol usando .push()
    // TODO 3: Si el rol no existe, inicializar el rol en el Map con un arreglo conteniendo [u.nombre]
  }

  return grupos;
}

// Caso de prueba:
console.log(agruparPorRol(usuarios));

// Resultado esperado en el Map:
// 'admin'   => ['Ana', 'Elena']
// 'editor'  => ['Carlos', 'Marta']
// 'usuario' => ['Luis']