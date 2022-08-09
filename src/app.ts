import 'dotenv/config';

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  return res.send('<h1>Hello</h1>');
});


app.post('/api/data', (req, res) => {
  console.log(req.body);

  return res.sendStatus(200);
});

app.all('/api/all', (req, res) => {
  return res.sendStatus(200)
});

app.listen(PORT, () => {
  console.log(`Server started been: http://localhost:${PORT}/`)
});
 