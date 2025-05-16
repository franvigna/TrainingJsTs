"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cuenta5_saldo5;
// 1. Clases y constructor
class Persona5 {
    constructor(nombre5) {
        this.nombre5 = nombre5;
    }
    saludar5() {
        return `Hola, soy ${this.nombre5}`;
    }
}
// 2. Herencia
class Empleado5 extends Persona5 {
    constructor(n5, s5) {
        super(n5);
        this.salario5 = s5;
    }
    obtenerSalario5() {
        return this.salario5;
    }
}
// 3. Miembros estáticos
class Matematica5 {
    static cuadrado5(x5) {
        return x5 * x5;
    }
}
Matematica5.PI5 = 3.1416;
// 4. Encapsulamiento (getter/setter)
class Cuenta5 {
    constructor(initial5) {
        _Cuenta5_saldo5.set(this, void 0);
        __classPrivateFieldSet(this, _Cuenta5_saldo5, initial5, "f");
    }
    get Saldo5() {
        return __classPrivateFieldGet(this, _Cuenta5_saldo5, "f");
    }
    set Depositar5(monto5) {
        __classPrivateFieldSet(this, _Cuenta5_saldo5, __classPrivateFieldGet(this, _Cuenta5_saldo5, "f") + monto5, "f");
    }
}
_Cuenta5_saldo5 = new WeakMap();
class Calculadora5 {
    operar5(a5, b5) {
        return a5 + b5;
    }
}
class Animal5 {
    constructor(nombre5) {
        this.nombre5 = nombre5;
    }
}
class Perro5 extends Animal5 {
    emitirSonido5() {
        console.log("¡Guau!");
    }
}
// DOM
function ejecutarOOP5() {
    const out5 = document.getElementById("resultado5");
    if (!out5)
        return;
    let texto5 = "";
    const p5 = new Persona5("Ana");
    const e5 = new Empleado5("Luis", 50000);
    texto5 += `Persona5: ${p5.saludar5()}\n`;
    texto5 += `Empleado5: ${p5.saludar5()}, salario $${e5.obtenerSalario5()}\n`;
    texto5 += `PI5: ${Matematica5.PI5}\n`;
    texto5 += `cuadrado5(4): ${Matematica5.cuadrado5(4)}\n`;
    const cuenta5 = new Cuenta5(1000);
    cuenta5.Depositar5 = 500;
    texto5 += `Cuenta5 saldo: $${cuenta5.Saldo5}\n`;
    const calc5 = new Calculadora5();
    texto5 += `Calculadora5.operar5(3,5): ${calc5.operar5(3, 5)}\n`;
    const dog5 = new Perro5("Firulais");
    dog5.emitirSonido5();
    texto5 += `Perro5: ${dog5.nombre5} (ver consola para sonido)\n`;
    out5.textContent = texto5;
}
// exponer global
;
window.ejecutarOOP5 = ejecutarOOP5;
document.getElementById("btn-oop5")
    .addEventListener("click", ejecutarOOP5);
