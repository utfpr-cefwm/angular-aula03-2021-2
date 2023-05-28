/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

import { router as artigosRouter } from './app/routes/artigos';

MongoClient.connect(
  'mongodb://angular-aula03-2021-2_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('app-artigos');
  console.log('    Conectado ao MongoDB');
}).catch(err => {
  console.log(err);
});

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/artigos', artigosRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
