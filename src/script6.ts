// Promesa genérica
function promesaDemo(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("🎉 ¡Promesa completada!"), 1000);
  });
}

// Async/await
async function asyncDemo(): Promise<string> {
  try {
    const msg = await promesaDemo();
    return `async/await: ${msg}`;
  } catch(e) {
    throw new Error("Error en asyncDemo");
  }
}

// Callback tipado
function callbackDemo(cb: (msg: string) => void) {
  setTimeout(() => cb("✅ Callback ejecutado"), 500);
}

// DOM
const out6 = document.getElementById("out-asincronia")!;

// Promesa con then/catch/finally
document.getElementById("btn-promesa")!
  .addEventListener("click", () => {
    promesaDemo()
      .then(res => out6.textContent = `then: ${res}`)
      .catch(err => out6.textContent = `catch: ${err.message}`)
      .finally(() => console.log("Promesa finalizada"));
  });

// Async/await
document.getElementById("btn-async")!
  .addEventListener("click", async () => {
    try {
      const res = await asyncDemo();
      out6.textContent = res;
    } catch(err:any) {
      out6.textContent = `Error: ${err.message}`;
    }
  });

// Callback tipado
document.getElementById("btn-callback")!
  .addEventListener("click", () => {
    callbackDemo(msg => out6.textContent = msg);
  });
