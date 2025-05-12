function ejecutar() {
    // Código de ejemplo para mostrar resultados
    document.getElementById('resultado').innerText =
        'Resultado de la función: Hola desde JavaScript!'
}

// ===================================
// 1. Trabajando con objetos
// ===================================
const persona = {
    nombre: 'Cisco',
    edad: 21,
    profesion: 'Developer',
    saludar() {
        return `hola, soy ${this.nombre}`
    },
}

console.log('Objeto persona: ', persona)
console.log('Acceso punto: ', persona.nombre)
console.log('Acceso corchetes: ', persona['edad'])
console.log('Acceso saludar(): ', persona.saludar())

// ===================================
// 2. Creación Dinámica de Propiedades
// ===================================

persona.email = 'fvignardel@circostudio.com'
console.log('Propiedad añadida: ', persona.email)
delete persona.profesion
console.log('Despues de delete: ', persona)

// ===================================
// 3. Arrays y sus Métodos
// ===================================

const personas = [
    { nombre: 'Tomi', edad: 25, profesion: 'Ingenieria' },
    { nombre: 'Cisco', edad: 21, profesion: 'Ingenieria' },
    { nombre: 'Mili', edad: 23, profesion: 'Desarrollo web' },
    { nombre: 'Leandro', edad: 21, profesion: 'Desarrollo web' },
]

//mostrar todas las personas
console.log('lista de personas: ')
personas.forEach((persona) => console.log(persona))

//agregar una nueva persona al final del array
personas.push({ nombre: 'Yamila', edad: 24, profesion: 'Desarrollo Web' })
console.log('\n Despues de agregar a Yamila')
console.log(personas)

//Eliminar la primera persona del array
personas.shift()
console.log('\nDespues de eliminar la primera persona:')
console.log(personas)

//Filtrar personas mayores de 30 años
const menoresDe22 = personas.filter((persona) => persona.edad < 22)
console.log('\nPersonas menores de 22')
console.log(menoresDe22)

//obtener un array con solo los nombres de las personas
const nombres = personas.map((personas) => persona.nombre)
console.log('\nNombre de las personas: ')
console.log(nombres)

//calcular la edad promedio de las personas
const totalEdades = personas.reduce(
    (acumulador, persona) => acumulador + persona.edad,
    0
)
const promedioEdad = totalEdades / personas.length
console.log('\nEdad Promedio: ', promedioEdad)

//Encontrar una persona por su nombre
const personaBuscada = personas.find((persona) => persona.nombre === 'Cisco')
console.log('\nPersona buscada (cisco): ', personaBuscada)

//verificar si todas las personas son mayores de 18 años
const todosMayoresDe18 = personas.every((persona) => persona.edad > 18)
console.log('\n¿Todas las personas son mayores de 18? ', todosMayoresDe18)

//verificar si al menos una persona es de ingenieria
const hayDesarrollador = personas.some(
    (persona) => persona.profesion === 'Desarrollo web'
)
console.log('\n¿Hay al menos una desarrolladora? ', hayDesarrollador)
