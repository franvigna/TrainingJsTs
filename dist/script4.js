"use strict";
const p4 = { nombre4: "Ana", edad4: 30 };
const e4 = { nombre4: "Luis", edad4: 28, salario4: 50000 };
class Cliente4 {
    constructor(nombre4, edad4) {
        this.nombre4 = nombre4;
        this.edad4 = edad4;
    }
}
const c4 = new Cliente4("Eva", 35);
const idStr4 = "abc";
const idNum4 = 123;
const d4 = 'arriba';
const ct4 = {
    nombre4: "Mía",
    edad4: 27,
    email4: "mia@mail.com"
};
// DOM
function ejecutarTipos4() {
    const out4 = document.getElementById("resultado4");
    if (!out4)
        return;
    let txt4 = "";
    txt4 += `Persona4: ${JSON.stringify(p4)}\n`;
    txt4 += `Empleado4: ${JSON.stringify(e4)}\n`;
    txt4 += `Cliente4: nombre=${c4.nombre4}, edad=${c4.edad4}\n`;
    txt4 += `ID4: ${idStr4}, ${idNum4}\n`;
    txt4 += `Direccion4: ${d4}\n`;
    txt4 += `Contacto4: ${JSON.stringify(ct4)}\n`;
    txt4 += `Rstr4: ${JSON.stringify(["a", "b"])}\n`;
    txt4 += `Rnum4: ${JSON.stringify([1, 2])}\n`;
    out4.textContent = txt4;
}
// exponer global
;
window.ejecutarTipos4 = ejecutarTipos4;
document.getElementById("btn-tipos4")
    .addEventListener("click", ejecutarTipos4);
