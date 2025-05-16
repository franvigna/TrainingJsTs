"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludaModule = saludaModule;
exports.default = defecto;
function saludaModule(name) {
    return `Hola desde módulo, ${name}!`;
}
function defecto() {
    return "Export default ejecutado";
}
