"use strict";
// 1. Tipado de parámetros y retorno
function sumar(a, b) {
    return a + b;
}
// 2. Funciones anónimas y flecha
const resta = function (a, b) {
    return a - b;
};
const saludar = (nombre, saludo = "Hola") => {
    return `${saludo}, ${nombre}!`;
};
// 3. Funciones que retornan funciones
function crearMultiplicador(factor) {
    return (n) => n * factor;
}
const dup = crearMultiplicador(2);
// 4. Orden superior y callbacks
function aplicar(nums, fn) {
    return nums.map(fn);
}
const resultadoMap = aplicar([1, 2, 3], (n) => n * 3);
// Función para volcar al DOM
function ejecutarFunciones() {
    const out = document.getElementById("resultado");
    if (!out)
        return;
    let texto = "";
    texto += `sumar(4,5): ${sumar(4, 5)}\n`;
    texto += `resta(10,3): ${resta(10, 3)}\n`;
    texto += `saludar("Ana"): ${saludar("Ana")}\n`;
    texto += `dup(5): ${dup(5)}\n`;
    texto += `aplicar([1,2,3], n=>n*3): [${resultadoMap.join(", ")}]\n`;
    out.textContent = texto;
}
// Exponer global
;
window.ejecutarFunciones = ejecutarFunciones;
document.getElementById("btn-funciones")
    .addEventListener("click", ejecutarFunciones);
