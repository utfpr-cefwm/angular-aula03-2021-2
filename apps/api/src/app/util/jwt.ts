import * as jsonWebToken from 'jsonwebtoken';

import * as expressJwt from 'express-jwt';

import { IUsuario } from '@cefwm-angular/common';

import { sanitizeUsuario } from './sanitization';

export const JWT_SECRET_KEY = 'Ch4v3-SecrET4';

export function criarToken(iUsuario: IUsuario): string {
  return jsonWebToken.sign(
    sanitizeUsuario(iUsuario),
    JWT_SECRET_KEY,
    {
      expiresIn: '10m',
    },
  );
}

export const requireJwtToken = expressJwt({
  secret: JWT_SECRET_KEY,
  algorithms: ['HS256'],
});
