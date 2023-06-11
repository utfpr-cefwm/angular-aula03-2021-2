export interface IUsuario {

  _id: number;

  login: string;

  senha: string;

  nome: string;

  administrador: boolean;

}

export interface IUsuarioLogado {

  jwt: string;

  usuario: Omit<IUsuario, 'senha'>;

}
