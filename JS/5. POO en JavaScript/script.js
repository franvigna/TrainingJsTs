const resultado = document.getElementById('oop-resultado')

// =========================
// 1. Clases y objetos
// =========================
document.getElementById('btn-instanciar').addEventListener('click', () => {
    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre
            this.edad = edad
        }
        saludar() {
            return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
        }
    }
    const p = new Persona('Cisco', 21)
    console.log(p.saludar())

    resultado.innerHTML = `<p>${p.saludar()}</p>`
})

// =========================
// 2. Getters y Setters
// =========================
document.getElementById('btn-getset').addEventListener('click', () => {
    class Empleado {
        constructor(nombre, sueldo) {
            this.nombre = nombre
            this._sueldo = sueldo
        }

        get sueldo() {
            return this._sueldo
        }
        set sueldo(valor) {
            if (valor >= 0) this._sueldo = valor
        }

        info() {
            return `Empleado ${this.nombre} - Sueldo: $${this._sueldo}`
        }
    }

    const e = new Empleado('Mili', 0)
    e.sueldo = 330000 //setter

    console.log(`info: ${e.info()}`)
    resultado.innerHTML = `<p>${e.info()}</p>`
})

// ===============================
// 3. Herencia y métodos estáticos
// ===============================

document.getElementById('btn-herencia').addEventListener('click', () => {
    class Animal {
        constructor(nombre) {
            this.nombre = nombre
        }
        hablar() {
            return `${this.nombre} hace un sonido`
        }
    }

    class Perro extends Animal {
        hablar() {
            return `${this.nombre} ladra`
        }
        static especie() {
            return 'Canis lupus familiaris'
        }
    }
    const dog = new Perro('Caniche')
    resultado.innerHTML = `
  <p>${dog.hablar()}</p>
  <p>Especie: ${Perro.especie()}</p>
  `
})

// ===============================
// 4. Encapsulamiento
// ===============================
document.getElementById('btn-cuenta').addEventListener('click', () => {
    class Cuenta {
        #saldo
        constructor(inicial) {
            this.#saldo = inicial
        }
        depositar(cant) {
            this.#saldo += cant
        }
        obtenerSaldo() {
            return this.#saldo
        }
    }
    const cuenta = new Cuenta(1000)
    cuenta.depositar(500)
    resultado.innerHTML = `<p>Saldo actual $${cuenta.obtenerSaldo()}</p>`
})
