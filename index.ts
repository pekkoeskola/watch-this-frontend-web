import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});