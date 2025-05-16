// 1. Interfaces
interface Persona4 {
  nombre4: string;
  edad4: number;
}
const p4: Persona4 = { nombre4: "Ana", edad4: 30 };

interface Empleado4 extends Persona4 {
  salario4: number;
}
const e4: Empleado4 = { nombre4: "Luis", edad4: 28, salario4: 50000 };

class Cliente4 implements Persona4 {
  constructor(
    public nombre4: string,
    public edad4: number
  ) {}
}
const c4 = new Cliente4("Eva", 35);

// 2. Types
type ID4 = string | number;
const idStr4: ID4 = "abc";
const idNum4: ID4 = 123;

type Direccion4 = 'arriba'|'abajo';
const d4: Direccion4 = 'arriba';

type Contacto4 = Persona4 & { email4: string };
const ct4: Contacto4 = {
  nombre4: "Mía",
  edad4: 27,
  email4: "mia@mail.com"
};

// 3. Condicionales y genéricos
type Elemento4<T> = T extends string ? string[] : number[];
type Rstr4 = Elemento4<string>;
type Rnum4 = Elemento4<number>;

// DOM
function ejecutarTipos4(): void {
  const out4 = document.getElementById("resultado4");
  if (!out4) return;

  let txt4 = "";
  txt4 += `Persona4: ${JSON.stringify(p4)}\n`;
  txt4 += `Empleado4: ${JSON.stringify(e4)}\n`;
  txt4 += `Cliente4: nombre=${c4.nombre4}, edad=${c4.edad4}\n`;
  txt4 += `ID4: ${idStr4}, ${idNum4}\n`;
  txt4 += `Direccion4: ${d4}\n`;
  txt4 += `Contacto4: ${JSON.stringify(ct4)}\n`;
  txt4 += `Rstr4: ${JSON.stringify((["a","b"] as Rstr4))}\n`;
  txt4 += `Rnum4: ${JSON.stringify(([1,2] as Rnum4))}\n`;

  out4.textContent = txt4;
}

// exponer global
;(window as any).ejecutarTipos4 = ejecutarTipos4;
document.getElementById("btn-tipos4")!
  .addEventListener("click", ejecutarTipos4);
