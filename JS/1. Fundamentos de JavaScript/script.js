// ==============================
// 1. Sintaxis básica y comentarios
// ==============================

//Comentario de una linea

/*
Comentario 
multilinea
*/

console.log('Hola mundo')

// ==============================
// 2. Variables: var, let, const
// ==============================

var nombre = 'Cisco'
let edad = 21
const PI = 3.1415

console.log(nombre, edad, PI)

// ==============================
// 3. Tipos de datos primitivos
// ==============================

let texto = 'Hola'
let numero = 55
let booleano = true
let indefinido
let nulo = null
let simbolo = Symbol('id')

console.log(
    typeof texto,
    typeof numero,
    typeof booleano,
    typeof indefinido,
    typeof nulo,
    typeof simbolo
)

// ==============================
// 4. Operadores
// ==============================

//Aritmeticos
let suma = 5 + 3
let resta = 10 - 2
let multiplicacion = 4 * 2
let division = 20 / 5
let modulo = 7 % 3

//Comparacion
console.log(5 == '5') //true (comparacion debil)
console.log(5 === '5') // false (comparacion estricta)
console.log(5 != '5') // false
console.log(5 !== '5') // true
console.log(3 > 3) // true
console.log(5 < 3) // false

//Lógicos
console.log(true && false)
console.log(true || true)
console.log(!false)

// ==============================
// 5. Estructuras de control
// ==============================

//Condicionales
let numeroEjemplo = 10

if (numeroEjemplo > 0) {
    console.log('El número es positivo')
} else if (numeroEjemplo < 0) {
    console.log('El número es negativo')
} else {
    console.log('El número es cero')
}

//Switch

let dia = 1
switch (dia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miercoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sabado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Otro día')
}

// ==============================
// 6. Bucles
// ==============================

//for
for (let i = 0; i < 3; i++) {
    console.log('For loop, iteración: ', i)
}

//while
let contador = 0
while (contador < 3) {
    console.log('While loop, contador: ', contador)
    contador++
}

//Do-While
let i = 0
do {
    console.log('Do-while loop, indice: ', i)
    i++
} while (i < 3)

// ==============================
// 7. Funciones
// ==============================

//Funcion declarada
function saludar(nombre) {
    return `Hola, ${nombre}`
}

console.log(saludar('Cisco'))

//Arrow Function
const multiplicar = (a, b) => a * b
console.log(multiplicar(4, 5))

// ==============================
// 8. Funciones callback y recursivas
// ==============================

//Calback
function procesarEntradaUsuario(callback) {
    let nombre = 'Mili'
    callback(nombre)
}

procesarEntradaUsuario(function (nombre) {
    console.log(`Hola, ${nombre}`)
})

// Recursiva
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// Ejemplo de uso:
console.log(fibonacci(1)) // 1
console.log(fibonacci(6)) // 8
console.log(fibonacci(10))
// 55

// ==============================
// 9. Funciones autoejecutables (IIFE)
// ==============================

// (function() {
//   console.log("Esta función se ejecuta inmediatamente");
// })();

// ==============================
// 10. Ámbito y contexto
// ==============================

//Ámbito global y local
let variableGlobal = 'Soy global'

function mostrarVariable() {
    let variableLocal = 'Soy local'
    console.log(variableGlobal)
    console.log(variableLocal)
}

mostrarVariable()

//console.log(variableLocal);
//script.js:201 Uncaught ReferenceError: variableLocal is not defined

//this en diferentes contextos
const objeto = {
    nombre: 'objeto',
    mostrarNombre: function () {
        console.log(this.nombre)
    },
}
objeto.mostrarNombre()

// ==============================
// 11. Closures
// ==============================

function crearContador() {
    let contador = 0
    return function () {
        contador++
        return contador
    }
}

const contador1 = crearContador()
console.log(contador1()) //1
console.log(contador1()) //2

const contador2 = crearContador()
console.log(contador2()) //1

// ==============================
// 12. Scope (alcance) y Hoisting (elevación)
// ==============================

//Hosting con var
console.log(variableHoisting) //undefined
var variableHoisting = '¿Qué pasó?'

//hoisting con let y const
//console.log(variableLet);
//Error:script.js:241 Uncaught ReferenceError: variableLet is not defined
let variableLet = 'Ahora sí'

// Ámbito de bloque
{
    let variableBloque = 'Estoy dentro de un bloque'
    console.log(variableBloque)
}
//console.log(variableBloque);
// Error: variableBloque no está definida

function mostrarMensaje() {
    const mensaje = 'Hello world in JavaScript'
    document.getElementById('resultado').innerText = mensaje
}
