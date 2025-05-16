"use strict";
// ==============================================
// 1. Tipos compuestos
// ==============================================
const nums = [1, 2, 3];
const tupla = ["edad", 21];
;
const pObj = { nombre: "Cisco", edad: 21 };
const cObj = { a: "Hola", b: 5 };
const idStr = "abc";
const idNum = 123;
const r1Value = (() => {
    const test = 123;
    return typeof test === 'string' ? 'es string' : 'no es string';
})();
const r2Value = (() => {
    const test = "hola";
    return typeof test === 'string' ? 'es string' : 'no es string';
})();
// ==============================================
// 4. Tipos especiales
// ==============================================
let a = 10;
let u = "desconocido";
function fallo(msg) {
    throw new Error(msg);
}
function loguear(msg) {
    console.log(msg);
}
// ==============================================
// 5. Generics
// ==============================================
function identidad(arg) {
    return arg;
}
const genNum = identidad(456);
const genStr = identidad("genérico");
// ==============================================
// DOM
// ==============================================
function ejecutarAvanzados() {
    const out = document.getElementById("resultado");
    if (!out)
        return;
    let texto = "";
    texto += `nums: [${nums.join(", ")}]\n`;
    texto += `tupla: [${tupla[0]}, ${tupla[1]}]\n`;
    texto += `pObj: ${JSON.stringify(pObj)}\n`;
    texto += `cObj (A&B): ${JSON.stringify(cObj)}\n`;
    texto += `idStr | idNum: ${idStr}, ${idNum}\n`;
    texto += `Direccion literal: arriba → 'arriba'\n`;
    texto += `R1 (IsString<number>): ${r1Value}\n`;
    texto += `R2 (IsString<"hola">): ${r2Value}\n`;
    texto += `any a=10 → ${a}\n`;
    texto += `unknown u="desconocido" → ${u}\n`;
    texto += `genNum (identidad<number>): ${genNum}\n`;
    texto += `genStr (identidad<string>): ${genStr}\n`;
    try {
        fallo("Provocando never");
    }
    catch (e) {
        texto += `fallo() capturado: ${e.message}\n`;
    }
    out.textContent = texto;
}
// Hacemos global
;
window.ejecutarAvanzados = ejecutarAvanzados;
document.getElementById("btn-avanzados")
    .addEventListener("click", ejecutarAvanzados);
