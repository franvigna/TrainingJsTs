"use strict";
// ==================================
// 1. Variables con tipos explícitos
// ==================================
let texto = "Hola desde TypeScript";
let numero = 42;
let booleano = true;
let nulo = null;
let indef = undefined;
let simbolo = Symbol("id");
// ==================================
// 2. any y unknown
// ==================================
let cualquiera = "puedo cambiar";
cualquiera = 100;
let desconocido = "quizá sea un string";
// ==================================
// 3. var, let y const
// ==================================
// var: variable con alcance de función (o global), hoisting y reasignable.
var antigua = "soy var";
// let: variable con alcance de bloque, no hoisting al nivel de bloque y reasignable.
let moderna = 10;
// const: variable con alcance de bloque, debe inicializarse al declararse y no puede reasignarse.
const constante = false;
// ==================================
// 4. Operadores
// ==================================
const suma = numero + 8;
const esMayor = numero > 50;
const esIgual = numero == Number("42");
const estaActivo = booleano && !constante;
// ==================================
// 4. mostrar resultados en DOM
// ==================================
function ejecutar() {
    const out = document.getElementById("resultado");
    if (!out)
        return;
    out.innerHTML = `
    <p><strong>texto</strong>: ${texto}</p>
    <p><strong>numero + 8</strong>: ${suma}</p>
    <p><strong>numero > 50</strong>: ${esMayor}</p>
    <p><strong>numero == "42"</strong>: ${esIgual}</p>
    <p><strong>booleano && !constante</strong>: ${estaActivo}</p>
    <p><strong>var antigua</strong>: ${antigua}</p>
    <p><strong>let moderna</strong>: ${moderna}</p>
    <p><strong>const constante</strong>: ${constante}</p>
    <p><strong>any</strong>: ${JSON.stringify(cualquiera)}</p>
    <p><strong>unknown (length si es string)</strong>: ${typeof desconocido === "string" ? desconocido.length : "no es string"}</p>
  `;
}
