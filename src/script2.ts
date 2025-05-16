// ==============================================
// 1. Tipos compuestos
// ==============================================
const nums2: number[] = [1, 2, 3];
const tupla2: [string, number] = ["edad", 21];

interface Persona2 { nombre: string; edad: number; }
const pObj2: Persona2 = { nombre: "Cisco", edad: 21 };

// ==============================================
// 2. Intersección y unión
// ==============================================
type A2 = { a: string };
type B2 = { b: number };
type C2 = A2 & B2;
const cObj2: C2 = { a: "Hola", b: 5 };

type ID2 = string | number;
const idStr2: ID2 = "abc";
const idNum2: ID2 = 123;

// ==============================================
// 3. Literales y condicionales
// ==============================================
type Direccion2 = 'arriba' | 'abajo' | 'izq' | 'der';
const r1Value2 = ((): string => {
  const test2: unknown = 123;
  return typeof test2 === 'string' ? 'es string' : 'no es string';
})();
const r2Value2 = ((): string => {
  const test2: unknown = "hola";
  return typeof test2 === 'string' ? 'es string' : 'no es string';
})();

// ==============================================
// 4. Tipos especiales
// ==============================================
let any2: any = 10;
let unk2: unknown = "desconocido";

function fallo2(msg: string): never {
  throw new Error(msg);
}
function loguear2(msg: string): void {
  console.log(msg);
}

// ==============================================
// 5. Generics
// ==============================================
function identidad2<T>(arg: T): T {
  return arg;
}
const genNum2 = identidad2<number>(456);
const genStr2 = identidad2<string>("genérico");

// ==============================================
// DOM
// ==============================================
function ejecutarAvanzados2(): void {
  const out2 = document.getElementById("resultado");
  if (!out2) return;

  let texto2 = "";
  texto2 += `nums2: [${nums2.join(", ")}]\n`;
  texto2 += `tupla2: [${tupla2[0]}, ${tupla2[1]}]\n`;
  texto2 += `pObj2: ${JSON.stringify(pObj2)}\n`;
  texto2 += `cObj2: ${JSON.stringify(cObj2)}\n`;
  texto2 += `idStr2/idNum2: ${idStr2}, ${idNum2}\n`;
  texto2 += `Direccion2 literal: arriba → 'arriba'\n`;
  texto2 += `r1Value2: ${r1Value2}\n`;
  texto2 += `r2Value2: ${r2Value2}\n`;
  texto2 += `any2=10 → ${any2}\n`;
  texto2 += `unk2="desconocido" → ${unk2}\n`;
  texto2 += `genNum2: ${genNum2}\n`;
  texto2 += `genStr2: ${genStr2}\n`;
  try {
    fallo2("Provocando never");
  } catch (e: any) {
    texto2 += `fallo2() capturado: ${e.message}\n`;
  }

  out2.textContent = texto2;
}

// exponer global
;(window as any).ejecutarAvanzados2 = ejecutarAvanzados2;
document.getElementById("btn-avanzados2")!
  .addEventListener("click", ejecutarAvanzados2);
