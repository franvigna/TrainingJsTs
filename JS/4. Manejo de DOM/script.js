// ===================================
// 1.Seleccion de elementos
// ===================================
document.getElementById('btn-seleccionar').addEventListener('click', () => {
    const pId = document.getElementById('parrafo-demo')
    console.log('getElementById', pId)

    const clases = document.getElementsByClassName('clase-demo')
    console.log('getElementsByClassName', clases)

    const query = document.querySelectorAll('.clase-demo')
    console.log('querySelectorAll: ', query)
})
// ===================================
//2. Modificacion de contenido, atributos y estilos
// ===================================
document.getElementById('btn-contenido').addEventListener('click', () => {
    const txt = document.getElementById('texto')
    txt.innerText = 'El contenido ha sido modificado'
    txt.style.color = '#d14b4b'
    txt.style.fontWeight = 'bold'
})

document.getElementById('btn-atributos').addEventListener('click', () => {
    const img = document.getElementById('imagen-demo')
    img.src = 'https://placehold.co/300x300/abd14b/ffffff'
    img.alt = 'Imagen modificada'
    img.style.border = '5px solid #000000'
    img.style.borderRadius = '8px'
})

// ===================================
//3. Eventos y listeners
// ===================================

const log = document.getElementById('log-eventos')

document.getElementById('btn-click').addEventListener('click', () => {
    log.innerHTML += '<p>Botón clickeado</p>'
})

document.getElementById('area-hover').addEventListener('mouseover', () => {
    log.innerHTML += '<p>Mouse sobre el area</p>'
})

document.getElementById('input-key').addEventListener('keydown', (e) => {
    log.innerHTML += `<p>Tecla presionada: ${e.key}</p>`
})

// ===================================
//4. Manipulacion dinamica del DOM
// ===================================

const ul = document.getElementById('lista-dinamica')

document.getElementById('btn-agregar').addEventListener('click', () => {
    const li = document.createElement('li')
    li.innerText = `Nuevo elemento ${ul.children.length + 1}`
    ul.appendChild(li)
})

document.getElementById('btn-eliminar').addEventListener('click', () => {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild)
    }
})
// ===================================
// — 5. To-Do List —
// ===================================

const inputTarea = document.getElementById('nueva-tarea')
const btnAgregar = document.getElementById('btn-agregar-tarea')
const listaTareas = document.getElementById('lista-tareas')

function crearElementoTarea(texto) {
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.className = 'texto-tarea'
    span.innerText = texto
    li.appendChild(span)

    const acciones = document.createElement('div')
    acciones.className = 'todo-actions'

    const btnToggle = document.createElement('button')
    btnToggle.innerText = '✔'
    btnToggle.title = 'Done?'
    btnToggle.addEventListener('click', () => {
        li.classList.toggle('completed')
    })
    acciones.appendChild(btnToggle)

    const btnEliminar = document.createElement('button')
    btnEliminar.innerText = 'X'
    btnEliminar.tittle = 'Delete'
    btnEliminar.addEventListener('click', () => {
        listaTareas.removeChild(li)
    })

    acciones.appendChild(btnEliminar)

    li.appendChild(acciones)

    return li
}

btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim()
    if (!texto) return
    const tarea = crearElementoTarea(texto)
    listaTareas.appendChild(tarea)
    inputTarea.value = ''
    inputTarea.focus()
})
