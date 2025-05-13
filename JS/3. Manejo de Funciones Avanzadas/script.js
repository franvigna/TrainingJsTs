function ejecutar() {
    // Código de ejemplo para mostrar resultados
    document.getElementById('resultado').innerText =
        'Resultado de la función: Hola desde JavaScript!'
}

const personas = [
    { nombre: 'Tomi', edad: 25, profesion: 'Ingenieria Informatica' },
    { nombre: 'Cisco', edad: 21, profesion: 'Ingenieria Informatica' },
    { nombre: 'Mili', edad: 23, profesion: 'Desarrollo Web' },
    { nombre: 'Leandro', edad: 21, profesion: 'Desarrollo Web' },
    { nombre: 'Martin', edad: 24, profesion: 'Ingenieria Informatica' },
    { nombre: 'Gonzalo', edad: 24, profesion: 'Ingenieria Informatica' },
    { nombre: 'Yami', edad: 23, profesion: 'Desarrollo Web' },
    { nombre: 'Rocio', edad: 23, profesion: 'Ingenieria Informatica' },
]

// ===================================
//1. Funciones de orden superior
// ===================================

//map
const nombresMayus = personas.map((p) => p.nombre.toUpperCase())
console.log('NombresEn mayúscula: ', nombresMayus)

//filter
const devs = personas.filter((p) => p.profesion === 'Desarrollo Web')
console.log('Personas de desarrollo web: ', devs)

//reduce
const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0)
console.log('Suma total de edades: ', sumaEdades)

// ===================================
//2.Funciones que devuelven funciones
// ===================================

function crearSaludo(saludo) {
    return function (nombre) {
        return `${saludo}, ${nombre}!`
    }
}

const saludoHola = crearSaludo('Hola')
console.log('Saludo personalizado: ', saludoHola('Cisco'))

// ===================================
//3. Callbacks
// ===================================

function procesarPersona(persona, callback) {
    callback(persona)
}

procesarPersona(personas[1], function (p) {
    console.log('Procesando persona con callback', p.nombre)
})

// ===================================
// 4. Promesas
// ===================================

function obtenerDolar() {
    return fetch('https://dolarapi.com/v1/dolares/oficial')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status}`)
            }
            return response.json()
        })

        .then((data) => {
            console.log('Cotizacion dolar oficial: ')
            console.log(`Compra: ${data.compra}`)
            console.log(`Venta: ${data.venta}`)
            console.log(`Frecha Actualizado: ${data.fechaActualizacion}`)
        })

        .catch((error) => {
            console.error('No se pudo obtener la cotizacion: ', error.message)
        })

        .finally(() => {
            console.log('Consulta de tipo de cambio completada')
        })
}
obtenerDolar()
