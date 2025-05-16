// ================================
// 1. Trabajar con JSON
// ================================
document.getElementById('btn-json').addEventListener('click', () => {
    const personaObj = { nombre: 'Cisco', edad: 21 }
    const jsonStr = JSON.stringify(personaObj, null, 2)
    const persona2 = JSON.parse(jsonStr)

    const out = document.getElementById('res-json')
    out.innerText =
        'JSON.stringify(personaObj): \n' +
        jsonStr +
        '\n\nJSON.parse(jsonStr):\n' +
        JSON.stringify(persona2, null, 2)
})

// ================================
// 2. consumo de APIs con fetch
// ================================
document.getElementById('btn-fetch').addEventListener('click', () => {
    const out = document.getElementById('res-fetch')
    out.innerText = 'Cargando...'

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP error ${res.status}`)
            return res.json()
        })
        .then((data) => {
            out.innerText =
                'Datos recibidos: \n' + JSON.stringify(data, null, 2)
        })
        .catch((err) => {
            out.innerText = `Error: ${err.name} - ${err.message}`
        })
        .finally(() => {
            console.log('Fetch Completado')
        })
})
