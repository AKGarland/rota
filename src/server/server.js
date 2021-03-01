import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

let port = 7575;
let app = express();

app.listen(port, console.log(`server listening on port ${port}`));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.post('/rotate', (req, res) => {
  console.log(req);

  res.status(200).send();
})