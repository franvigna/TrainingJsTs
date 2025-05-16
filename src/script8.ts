class CustomError extends Error {
  constructor(public code: number, msg: string) {
    super(msg);
    this.name = "CustomError";
  }
}

function lanzaError(): void {
  throw new CustomError(400, "Error personalizado ocurrido");
}

const out10 = document.getElementById("out-errores")!;
document.getElementById("btn-error")!
  .addEventListener("click", () => {
    try {
      lanzaError();
    } catch(e:any) {
      out10.textContent = `Catch: ${e.name} (${e.code}) → ${e.message}`;
    } finally {
      console.log("Bloque finally ejecutado");
    }
  });
