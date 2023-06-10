import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { getCollection } from "../util/mongodb-util";

import { ModifyResult } from "mongodb";

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

router.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const body: IArtigo = req.body;
  const artigo: ModifyResult<IArtigo> = await getCollection<IArtigo>(req.app, 'artigos').findOneAndReplace({
    _id: _id,
  }, body);
  res.json(artigo);
});
