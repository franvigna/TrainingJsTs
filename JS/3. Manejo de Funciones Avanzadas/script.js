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
const sumaEdades = personas.reduce(())