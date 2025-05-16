"use strict";
// ==================================
// 1. Variables con tipos explícitos
// ==================================
let texto1 = "Hola desde TypeScript";
let numero1 = 42;
let booleano1 = true;
let nulo1 = null;
let indef1 = undefined;
let simbolo1 = Symbol("id");
// ==================================
// 2. any y unknown
// ==================================
let cualquiera1 = "puedo cambiar";
cualquiera1 = 100;
let desconocido1 = "quizá sea un string";
// ==================================
// 3. var, let y const
// ==================================
var antigua1 = "soy var";
let moderna1 = 10;
const constante1 = false;
// ==================================
// 4. Operadores
// ==================================
const suma1 = numero1 + 8;
const esMayor1 = numero1 > 50;
const esIgual1 = numero1 == Number("42");
const estaActivo1 = booleano1 && !constante1;
// ==================================
// 5. mostrar resultados en DOM
// ==================================
function ejecutar1() {
    const out1 = document.getElementById("resultado1");
    if (!out1)
        return;
    out1.innerHTML = `
    <p><strong>texto1</strong>: ${texto1}</p>
    <p><strong>numero1 + 8</strong>: ${suma1}</p>
    <p><strong>numero1 > 50</strong>: ${esMayor1}</p>
    <p><strong>numero1 == "42"</strong>: ${esIgual1}</p>
    <p><strong>booleano1 && !constante1</strong>: ${estaActivo1}</p>
    <p><strong>var antigua1</strong>: ${antigua1}</p>
    <p><strong>let moderna1</strong>: ${moderna1}</p>
    <p><strong>const constante1</strong>: ${constante1}</p>
    <p><strong>any cualquiera1</strong>: ${JSON.stringify(cualquiera1)}</p>
    <p><strong>unknown desconocido1.length</strong>: ${typeof desconocido1 === "string" ? desconocido1.length : "no es string"}</p>
  `;
}
// exponer global
;
window.ejecutar1 = ejecutar1;
document.getElementById("btn-ejecutar1")
    .addEventListener("click", ejecutar1);
