import defecto, { saludaModule } from "./7-util.js";

namespace MiSpace {
  export function saludaNS(name: string): string {
    return `Hola desde namespace, ${name}!`;
  }
}

// DOM
const out7 = document.getElementById("out-modulos")!;
document.getElementById("btn-modulo")!
  .addEventListener("click", () => {
    out7.textContent = `${saludaModule("Usuario")}\n${defecto()}`;
  });
document.getElementById("btn-namespace")!
  .addEventListener("click", () => {
    out7.textContent = MiSpace.saludaNS("Usuario");
  });
