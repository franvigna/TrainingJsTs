// as y type assertions
const some: unknown = "texto";
const len = (some as string).length;

// typeof, instanceof, keyof, in
class A { a = 1 }
const inst = new A();
const isInst = inst instanceof A;
type Obj = { x: number; y: string };
type Keys = keyof Obj; // "x" | "y"
const hasX = "x" in { x: 10 };

// DOM
const out11 = document.getElementById("out-tipos")!;
document.getElementById("btn-assert")!
  .addEventListener("click", () => {
    out11.textContent = `Type assertion length: ${len}`;
  });
document.getElementById("btn-operators")!
  .addEventListener("click", () => {
    out11.textContent = 
      `instanceof A: ${isInst}\n` +
      `type Keys: ${["x","y"]}\n` +
      `"x" in Obj: ${hasX}`;
  });
