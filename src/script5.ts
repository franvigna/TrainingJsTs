// 1. Clases y constructor
class Persona5 {
  constructor(public nombre5: string) {}
  saludar5(): string {
    return `Hola, soy ${this.nombre5}`;
  }
}

// 2. Herencia
class Empleado5 extends Persona5 {
  private salario5: number;
  constructor(n5: string, s5: number) {
    super(n5);
    this.salario5 = s5;
  }
  obtenerSalario5(): number {
    return this.salario5;
  }
}

// 3. Miembros estáticos
class Matematica5 {
  static PI5: number = 3.1416;
  static cuadrado5(x5: number): number {
    return x5 * x5;
  }
}

// 4. Encapsulamiento (getter/setter)
class Cuenta5 {
  #saldo5: number;
  constructor(initial5: number) {
    this.#saldo5 = initial5;
  }
  get Saldo5(): number {
    return this.#saldo5;
  }
  set Depositar5(monto5: number) {
    this.#saldo5 += monto5;
  }
}

// 5. Interfaces en clases y abstractas
interface Operable5 {
  operar5(a5: number, b5: number): number;
}
class Calculadora5 implements Operable5 {
  operar5(a5: number, b5: number): number {
    return a5 + b5;
  }
}

abstract class Animal5 {
  constructor(public nombre5: string) {}
  abstract emitirSonido5(): void;
}
class Perro5 extends Animal5 {
  emitirSonido5(): void {
    console.log("¡Guau!");
  }
}

// DOM
function ejecutarOOP5(): void {
  const out5 = document.getElementById("resultado5");
  if (!out5) return;

  let texto5 = "";
  const p5 = new Persona5("Ana");
  const e5 = new Empleado5("Luis", 50000);
  texto5 += `Persona5: ${p5.saludar5()}\n`;
  texto5 += `Empleado5: ${p5.saludar5()}, salario $${e5.obtenerSalario5()}\n`;

  texto5 += `PI5: ${Matematica5.PI5}\n`;
  texto5 += `cuadrado5(4): ${Matematica5.cuadrado5(4)}\n`;

  const cuenta5 = new Cuenta5(1000);
  cuenta5.Depositar5 = 500;
  texto5 += `Cuenta5 saldo: $${cuenta5.Saldo5}\n`;

  const calc5 = new Calculadora5();
  texto5 += `Calculadora5.operar5(3,5): ${calc5.operar5(3,5)}\n`;

  const dog5 = new Perro5("Firulais");
  dog5.emitirSonido5();
  texto5 += `Perro5: ${dog5.nombre5} (ver consola para sonido)\n`;

  out5.textContent = texto5;
}

// exponer global
;(window as any).ejecutarOOP5 = ejecutarOOP5;
document.getElementById("btn-oop5")!
  .addEventListener("click", ejecutarOOP5);
