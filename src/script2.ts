// ==============================================
// 1. Tipos compuestos
// ==============================================
const nums: number[] = [1, 2, 3];
const tupla: [string, number] = ["edad", 21];
interface Persona { nombre: string; edad: number; };
const pObj: Persona = { nombre: "Cisco", edad: 21 };


// ==============================================
// 2. Interseccion y union
// ==============================================
type A = { a: string };
type B = { b: number };
type C = A & B;
const cObj: C = { a: "Hola", b: 5 };

type ID = string | number;
const idStr: ID = "abc";
const idNum: ID = 123;

// ==============================================
// 3. Literales y condicionales
// ==============================================
type Direccion = 'arriba' | 'abajo' | 'izq' | 'der';
type IsString<T> = T extends string ? 'es string' : 'no es string';
const r1Value = ((): string => {
  const test: unknown = 123;
  return typeof test === 'string' ? 'es string' : 'no es string';
})();

const r2Value = ((): string => {
  const test: unknown = "hola";
  return typeof test === 'string' ? 'es string' : 'no es string';
})();


// ==============================================
// 4. Tipos especiales
// ==============================================
let a: any = 10;
let u: unknown = "desconocido";

function fallo(msg: string): never {
    throw new Error(msg);
}

function loguear(msg: string): void {
    console.log(msg)
}


// ==============================================
// 5. Generics
// ==============================================
function identidad<T>(arg: T): T{
    return arg;
}

const genNum = identidad<number>(456);
const genStr = identidad("genérico");



// ==============================================
// DOM
// ==============================================

function ejecutarAvanzados(): void {
  const out = document.getElementById("resultado");
  if (!out) return;

  let texto = "";
  texto += `nums: [${nums.join(", ")}]\n`;
  texto += `tupla: [${tupla[0]}, ${tupla[1]}]\n`;
  texto += `pObj: ${JSON.stringify(pObj)}\n`;
  texto += `cObj (A&B): ${JSON.stringify(cObj)}\n`;
  texto += `idStr | idNum: ${idStr}, ${idNum}\n`;
  texto += `Direccion literal: arriba → 'arriba'\n`;
  texto += `R1 (IsString<number>): ${r1Value}\n`;
  texto += `R2 (IsString<"hola">): ${r2Value}\n`;
  texto += `any a=10 → ${a}\n`;
  texto += `unknown u="desconocido" → ${u}\n`;
  texto += `genNum (identidad<number>): ${genNum}\n`;
  texto += `genStr (identidad<string>): ${genStr}\n`;
  try {
    fallo("Provocando never");
  } catch (e: any) {
    texto += `fallo() capturado: ${e.message}\n`;
  }

  out.textContent = texto;
}

// Hacemos global
;(window as any).ejecutarAvanzados = ejecutarAvanzados;
document.getElementById("btn-avanzados")!
  .addEventListener("click", ejecutarAvanzados);