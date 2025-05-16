"use strict";
// ==============================================
// 1. Tipos compuestos
// ==============================================
const nums2 = [1, 2, 3];
const tupla2 = ["edad", 21];
const pObj2 = { nombre: "Cisco", edad: 21 };
const cObj2 = { a: "Hola", b: 5 };
const idStr2 = "abc";
const idNum2 = 123;
const r1Value2 = (() => {
    const test2 = 123;
    return typeof test2 === 'string' ? 'es string' : 'no es string';
})();
const r2Value2 = (() => {
    const test2 = "hola";
    return typeof test2 === 'string' ? 'es string' : 'no es string';
})();
// ==============================================
// 4. Tipos especiales
// ==============================================
let any2 = 10;
let unk2 = "desconocido";
function fallo2(msg) {
    throw new Error(msg);
}
function loguear2(msg) {
    console.log(msg);
}
// ==============================================
// 5. Generics
// ==============================================
function identidad2(arg) {
    return arg;
}
const genNum2 = identidad2(456);
const genStr2 = identidad2("genérico");
// ==============================================
// DOM
// ==============================================
function ejecutarAvanzados2() {
    const out2 = document.getElementById("resultado");
    if (!out2)
        return;
    let texto2 = "";
    texto2 += `nums2: [${nums2.join(", ")}]\n`;
    texto2 += `tupla2: [${tupla2[0]}, ${tupla2[1]}]\n`;
    texto2 += `pObj2: ${JSON.stringify(pObj2)}\n`;
    texto2 += `cObj2: ${JSON.stringify(cObj2)}\n`;
    texto2 += `idStr2/idNum2: ${idStr2}, ${idNum2}\n`;
    texto2 += `Direccion2 literal: arriba → 'arriba'\n`;
    texto2 += `r1Value2: ${r1Value2}\n`;
    texto2 += `r2Value2: ${r2Value2}\n`;
    texto2 += `any2=10 → ${any2}\n`;
    texto2 += `unk2="desconocido" → ${unk2}\n`;
    texto2 += `genNum2: ${genNum2}\n`;
    texto2 += `genStr2: ${genStr2}\n`;
    try {
        fallo2("Provocando never");
    }
    catch (e) {
        texto2 += `fallo2() capturado: ${e.message}\n`;
    }
    out2.textContent = texto2;
}
// exponer global
;
window.ejecutarAvanzados2 = ejecutarAvanzados2;
document.getElementById("btn-avanzados2")
    .addEventListener("click", ejecutarAvanzados2);
