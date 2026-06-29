// operadores estudiar 
//asignacion de igual (=)
// problema tenemos y = 1 | x = 56  necesitamos que el valor de  x pase ahacer y 

let y = 1
let x = 56
let asignacion_igual = y = x
console.log(asignacion_igual)// ya que lo estamos sobre escribiendo todo el valor  que que queremos  de esta forma
// se podra hacer de cual quier forma  como izquierda  y derecha  \ derecha y izquierda 

let g = 1
let s = 2
console.log( s += g ) 

//ASIGNACION DE RESTA
let num1 = 23
let num2 = 2
console.log(num1 -= num2)
//ASIGNACION DE MULTIPLICACION
let num3 = 5
let num4 = 10
console.log(num3 *= num4)
//ASIGNACION DE divicion
let num5 = 22 
let num6 = 33
console.log(num5 /= num6) // 0,6666666666
// asignacion de residuo
 let num7 = 12
 let num8 =  5  // se pode  en 5 para que sea entera
 console.log(num7 %= num8) // 2
//ASIGNACION DE POTENCIA 
let num9 = 3
let num10 = 3
console.log(num9 **= num10)


//ejercicio de operadores
// Datos del usuario que intenta registrarse (puedes probar cambiando los valores)
const edad = 21;
const tieneCarnet = true;
const numeroRegistro = 142; // Es un número par

// Escribe aquí tu código usando operadores
let esElegible = (edad >= 18 && edad <= 25) && (tieneCarnet) &&  (numeroRegistro % 2 === 0 )
// Mostrar resultado en consola
console.log("¿Es elegible para el pase de estudiante?:", esElegible);

// Datos del dron actual
const porcentajeBateria = 15; // ¡Ojo! Es menor al 20%
const climaOptimo = false;     // El clima está terrible
const retornoForzado = true;  // Se activó la alerta de emergencia

// Escribe tu código aquí usando operadores (&&, ||, >, <, etc.)
let puedeDespegar = (porcentajeBateria > 20 && climaOptimo) || retornoForzado
// Mostrar resultado en consola
console.log("¿El dron puede despegar?:", puedeDespegar);    


// Datos del estudiante
const puntajeExamen = 100;      // ¡Tuvo examen perfecto!
const promedioSecundaria = 82;  // Su promedio es bajo, no llega a 90
const pagoCompletado = false;   // ¡Ojo! Olvidó pagar la inscripción

// Escribe tu código aquí usando operadores (&&, ||, >=, ===) y paréntesis ()
let esAceptado = ((puntajeExamen >= 85 && promedioSecundaria >= 90) || puntajeExamen === 100) && pagoCompletado;
// Mostrar resultado en consola
console.log("¿El estudiante es aceptado?:", esAceptado);

//registar todos de volentin y validar todo  si el estudiate es aprobado  o denegado
//datos registados
const estudiante_1 = 12  // tiene que ser mas de 15 para aprovbar
const aprobado = false
const Pago_incripcion = true
//validar si este estudiante es aprodado por el voletin
let validacion = (estudiante_1 >= 15 && aprobado) && Pago_incripcion
console.log('El estudiante es aceptado?', validacion)

//validar con negacion ! negar un valor
const nota = 100
const descuente = 0.10
const total_pagar = 2000
const inscripción = false
let total = (`${'total a pagar '} ${(descuente * total_pagar)}`)
