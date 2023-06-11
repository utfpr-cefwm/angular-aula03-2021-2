import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { IUsuario, IUsuarioLogado } from "@cefwm-angular/common";

import { checkString, sanitizeUsuario } from "../util/sanitization";
import { getCollection } from "../util/mongodb-util";
import { criarToken } from "../util/jwt";

export const router = Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  let body: Pick<IUsuario, 'login' | 'senha'>;
  try {
    body = {
      login: checkString(req.body.login),
      senha: checkString(req.body.senha),
    };
  } catch(err) {
    next(err);
  }

  const usuario = await getCollection<IUsuario>(
    req.app,
    'usuarios',
  ).findOne(body);

  if (usuario) {
    const usuarioLogado: IUsuarioLogado = {
      jwt: criarToken(usuario),
      usuario: sanitizeUsuario(usuario),
    };
    res.json(usuarioLogado);
  } else {
    res.status(401);
    next(new Error('Login ou senha errados'));
  }

});
