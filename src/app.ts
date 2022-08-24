import express from 'express';
import bodyParser from 'body-parser';

import lists from './routers/lists';

const app = express();

app.use(bodyParser.json());

app.use('/lists', lists);

const PORT = process.env.NODE_PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Listening to :${PORT}`);
});