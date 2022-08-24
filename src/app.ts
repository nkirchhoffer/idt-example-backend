import express from 'express';

const app = express();

const PORT = process.env.NODE_PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Listening to :${PORT}`);
});