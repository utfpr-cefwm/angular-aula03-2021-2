import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { getCollection } from "../util/mongodb-util";

import { IArtigo } from "@cefwm-angular/common";

export const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const artigos = await getCollection<IArtigo>(req.app, 'artigos').find().toArray();
  res.json(artigos);
});

router.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const artigo: IArtigo = await getCollection<IArtigo>(req.app, 'artigos').findOne({
    _id: _id,
  });
  res.json(artigo);
});
