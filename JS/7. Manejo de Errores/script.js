//==============================
// 1. Try / Catch
//==============================
document.getElementById('btn-trycatch').addEventListener('click', () => {
    const out = document.getElementById('res-trycatch')
    try {
        JSON.parse('{"badJson": }')
        out.innerText = 'JSON válido'
    } catch (e) {
        out.innerText = `Error capturado: ${e.name} - ${e.message}`
    }
})

//==============================
// 2. Throw
//==============================
document.getElementById('btn-throw').addEventListener('click', () => {
    const out = document.getElementById('res-throw')
    const edad = Number(document.getElementById('input-edad').value)
    try {
        function validarEdad(e) {
            if (e < 18) throw new Error('Debes ser mayor de edad')
            return 'Acceso permitido'
        }
        out.innerText = validarEdad(edad)
    } catch (e) {
        out.innerText = `Error lanzado: ${e.name} - ${e.message}`
    }
})

//==============================
// 3. Finally
//==============================
document.getElementById('btn-finally').addEventListener('click', () => {
    const out = document.getElementById('res-finally')
    let recursoAbierto = false
    try {
        recursoAbierto = true
        throw new Error('Algo falló')
    } catch (e) {
        out.innerText = `Catch: ${e.message}`
    } finally {
        recursoAbierto = false
        out.innerText += `\nFinally: recursoAbierto = ${recursoAbierto}`
    }
})

//==============================
// 4. Error Objects
//==============================
document.getElementById('btn-errorobj').addEventListener('click', () => {
    const out = document.getElementById('res-errorobj')

    try {
        null.metodo()
    } catch (e) {
        if (e instanceof TypeError) {
            out.innerText = `TypeError capturado: ${e.message}`
        } else {
            out.innerText = `otro error:${e.name} - ${e.message}`
        }
    }
})
