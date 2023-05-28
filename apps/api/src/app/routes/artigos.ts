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
