// ==================================
// 1. Variables con tipos explícitos
// ==================================
let texto1: string = "Hola desde TypeScript";
let numero1: number = 42;
let booleano1: boolean = true;
let nulo1: null = null;
let indef1: undefined = undefined;
let simbolo1: symbol = Symbol("id");

// ==================================
// 2. any y unknown
// ==================================
let cualquiera1: any = "puedo cambiar";
cualquiera1 = 100;
let desconocido1: unknown = "quizá sea un string";

// ==================================
// 3. var, let y const
// ==================================
var antigua1: string = "soy var";
let moderna1: number = 10;
const constante1: boolean = false;

// ==================================
// 4. Operadores
// ==================================
const suma1: number = numero1 + 8;
const esMayor1: boolean = numero1 > 50;
const esIgual1: boolean = numero1 == Number("42");
const estaActivo1: boolean = booleano1 && !constante1;

// ==================================
// 5. mostrar resultados en DOM
// ==================================
function ejecutar1(): void {
  const out1 = document.getElementById("resultado1");
  if (!out1) return;
  out1.innerHTML = `
    <p><strong>texto1</strong>: ${texto1}</p>
    <p><strong>numero1 + 8</strong>: ${suma1}</p>
    <p><strong>numero1 > 50</strong>: ${esMayor1}</p>
    <p><strong>numero1 == "42"</strong>: ${esIgual1}</p>
    <p><strong>booleano1 && !constante1</strong>: ${estaActivo1}</p>
    <p><strong>var antigua1</strong>: ${antigua1}</p>
    <p><strong>let moderna1</strong>: ${moderna1}</p>
    <p><strong>const constante1</strong>: ${constante1}</p>
    <p><strong>any cualquiera1</strong>: ${JSON.stringify(cualquiera1)}</p>
    <p><strong>unknown desconocido1.length</strong>: ${
      typeof desconocido1 === "string" ? (desconocido1 as string).length : "no es string"
    }</p>
  `;
}

// exponer global
;(window as any).ejecutar1 = ejecutar1;
document.getElementById("btn-ejecutar1")!
  .addEventListener("click", ejecutar1);
