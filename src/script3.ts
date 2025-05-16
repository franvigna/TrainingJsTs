// 1. Tipado de parámetros y retorno
function sumar3(a: number, b: number): number {
  return a + b;
}

// 2. Funciones anónimas y flecha
const resta3: (a: number, b: number) => number = function(a, b) {
  return a - b;
};
const saludar3 = (nombre3: string, saludo3: string = "Hola"): string => {
  return `${saludo3}, ${nombre3}!`;
};

// 3. Funciones que retornan funciones
function crearMultiplicador3(factor3: number) {
  return (n3: number): number => n3 * factor3;
}
const dup3 = crearMultiplicador3(2);

// 4. Orden superior y callbacks
function aplicar3(
  nums3: number[],
  fn3: (n: number) => number
): number[] {
  return nums3.map(fn3);
}
const resultadoMap3 = aplicar3([1, 2, 3], (n) => n * 3);

// DOM
function ejecutarFunciones3(): void {
  const out3 = document.getElementById("resultado");
  if (!out3) return;

  let texto3 = "";
  texto3 += `sumar3(4,5): ${sumar3(4, 5)}\n`;
  texto3 += `resta3(10,3): ${resta3(10, 3)}\n`;
  texto3 += `saludar3("Ana"): ${saludar3("Ana")}\n`;
  texto3 += `dup3(5): ${dup3(5)}\n`;
  texto3 += `aplicar3([1,2,3], n=>n*3): [${resultadoMap3.join(", ")}]\n`;

  out3.textContent = texto3;
}

// exponer global
;(window as any).ejecutarFunciones3 = ejecutarFunciones3;
document.getElementById("btn-funciones3")!
  .addEventListener("click", ejecutarFunciones3);
