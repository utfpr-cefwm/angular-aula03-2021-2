import { IUsuario } from "@cefwm-angular/common";

export function checkString(unk: unknown): string {
  if (typeof unk === 'string') {
    return unk;
  }
  throw new Error(`O parâmetro "${unk}" não é uma string.`);
}

export function sanitizeUsuario(iUsuario: IUsuario): Omit<IUsuario, 'senha'> {
  const usuario = { ...iUsuario };
  delete usuario.senha;
  return usuario;
}
