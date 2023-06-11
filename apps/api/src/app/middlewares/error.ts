import {
  NextFunction,
  Request,
  Response,
} from "express";

export function error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send('Token inválido');
  }
  if (!res.statusCode) {
    console.log('Erro genérico', err);
    return res.status(500);
  }
  return res.send(err.message);
}
