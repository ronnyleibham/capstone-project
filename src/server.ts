import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.post('/api/getJobId/', async (_req, res) => {
  const storageId = 'storage://zzaQ3pIxO9Nb9hMHWpfD'; //change to: req.params
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Key ${process.env.DEEPVA_API_KEY}`,
    },
    body: {
      sources: [`${storageId}`],
      modules: {
        face_recognition: {
          model: 'celebrities',
        },
      },
    },
  };
  const response = await fetch(`${process.env.DEEPVA_BASE_URL},${options}`);
  const serverRes = await response.json();
  res.send(serverRes);
  console.log(serverRes);
});

app.get('/api/jobs/:id', async (_req, res) => {
  const jobId = '94367e42-2c07-4be3-aed7-e3021692e058'; //change to: req.params
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Key ${process.env.DEEPVA_API_KEY}`,
    },
  };
  const response = await fetch(
    `${process.env.DEEPVA_BASE_URL}/jobs/${jobId}/`,
    options
  );
  const serverRes = await response.json();

  res.send(serverRes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
