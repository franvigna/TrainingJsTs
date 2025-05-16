"use strict";
// as y type assertions
const some = "texto";
const len = some.length;
// typeof, instanceof, keyof, in
class A {
    constructor() {
        this.a = 1;
    }
}
const inst = new A();
const isInst = inst instanceof A;
const hasX = "x" in { x: 10 };
// DOM
const out11 = document.getElementById("out-tipos");
document.getElementById("btn-assert")
    .addEventListener("click", () => {
    out11.textContent = `Type assertion length: ${len}`;
});
document.getElementById("btn-operators")
    .addEventListener("click", () => {
    out11.textContent =
        `instanceof A: ${isInst}\n` +
            `type Keys: ${["x", "y"]}\n` +
            `"x" in Obj: ${hasX}`;
});
