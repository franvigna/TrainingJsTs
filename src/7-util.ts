export function saludaModule(name: string): string {
  return `Hola desde módulo, ${name}!`;
}
export default function defecto(): string {
  return "Export default ejecutado";
}
