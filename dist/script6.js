"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Promesa genérica
function promesaDemo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("🎉 ¡Promesa completada!"), 1000);
    });
}
// Async/await
function asyncDemo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const msg = yield promesaDemo();
            return `async/await: ${msg}`;
        }
        catch (e) {
            throw new Error("Error en asyncDemo");
        }
    });
}
// Callback tipado
function callbackDemo(cb) {
    setTimeout(() => cb("✅ Callback ejecutado"), 500);
}
// DOM
const out6 = document.getElementById("out-asincronia");
// Promesa con then/catch/finally
document.getElementById("btn-promesa")
    .addEventListener("click", () => {
    promesaDemo()
        .then(res => out6.textContent = `then: ${res}`)
        .catch(err => out6.textContent = `catch: ${err.message}`)
        .finally(() => console.log("Promesa finalizada"));
});
// Async/await
document.getElementById("btn-async")
    .addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield asyncDemo();
        out6.textContent = res;
    }
    catch (err) {
        out6.textContent = `Error: ${err.message}`;
    }
}));
// Callback tipado
document.getElementById("btn-callback")
    .addEventListener("click", () => {
    callbackDemo(msg => out6.textContent = msg);
});
