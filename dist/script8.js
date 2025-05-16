"use strict";
class CustomError extends Error {
    constructor(code, msg) {
        super(msg);
        this.code = code;
        this.name = "CustomError";
    }
}
function lanzaError() {
    throw new CustomError(400, "Error personalizado ocurrido");
}
const out10 = document.getElementById("out-errores");
document.getElementById("btn-error")
    .addEventListener("click", () => {
    try {
        lanzaError();
    }
    catch (e) {
        out10.textContent = `Catch: ${e.name} (${e.code}) → ${e.message}`;
    }
    finally {
        console.log("Bloque finally ejecutado");
    }
});
