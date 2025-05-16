//====================================
// 1. Desestructuracion de objetos
//====================================

document.getElementById('btn-destruct-obj').addEventListener('click', () => {
    const usuario = { nombre: 'Ana', edad: 30, pais: 'AR' }
    const { nombre, pais } = usuario
    document.getElementById(
        'res-destruct-obj'
    ).innerText = `Nombre: ${nombre}, País: ${pais}`
})

//====================================
// 2. Desestructuracion de arrays
//====================================
document.getElementById('btn-destruct-arr').addEventListener('click', () => {
    const nums = [1, 2, 3]
    const [uno, , tres] = nums
    document.getElementById(
        'res-destruct-arr'
    ).innerText = `Primero: ${uno}, Tercero: ${tres}`
})

//====================================
// 3. Spread operator
//====================================
document.getElementById('btn-spread').addEventListener('click', () => {
    const a = [1, 2]
    const b = [3, 4]
    const combinado = [...a, ...b]
    document.getElementById(
        'res-spread'
    ).innerText = `Combinado: [${combinado.join(', ')}]`
})

//====================================
// 4. Rest operator
//====================================
document.getElementById('btn-rest').addEventListener('click', () => {
    function sumar(...numeros) {
        return numeros.reduce((acc, n) => acc + n, 0)
    }
    const total = sumar(5, 10, 15)
    document.getElementById('res-rest').innerText = `Total: ${total}`
})

//====================================
// 5. Template literals
//====================================
document.getElementById('btn-template').addEventListener('click', () => {
    const nom = 'Rocio'
    const saludo = `Hola, ${nom}! Bienvenido/a`
    document.getElementById('res-template').innerText = saludo
})
