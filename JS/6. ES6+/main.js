import areaCuadrado from './module.js'

document.getElementById('btn-modulo').addEventListener('click', () => {
    const area = areaCuadrado(5)
    document.getElementById(
        'res-modulo'
    ).innerText = `Area de cuadrado de lado 5: ${area}`
})
