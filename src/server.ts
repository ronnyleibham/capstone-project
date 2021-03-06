import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

// imports from 'node-fetch'
import fetch from 'node-fetch';
import type { RequestInit } from 'node-fetch';

// imports from 'form-data'
import FormData from 'form-data';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// upload image to storage and receive storageID
app.post('/api/getStorageId/', async (_req, res) => {
  const imageURL = '/Users/ronny/Desktop/maverick.jpg'; //change to: req.params
  const exampleFile = fs.createReadStream(imageURL);

  const form = new FormData();
  form.append('folder', '/');
  form.append('file', exampleFile);

  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.DEEPVA_API_KEY}`,
    },
    body: form,
  };

  const response = await fetch(
    `${process.env.DEEPVA_BASE_URL}/storage/`,
    options
  );

  const serverRes = await response.json();
  res.send(serverRes);
  console.log(serverRes);
});

// start job with chosen modules and receive JobID
app.post('/api/getJobId/', async (_req, res) => {
  const storageId = 'storage://Zw2hQ7zYSKVxwcGic4VJ'; //change to: req.params
  const options: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.DEEPVA_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sources: [`${storageId}`],
      modules: {
        face_recognition: {
          model: 'celebrities',
        },
      },
    }),
  };
  const response = await fetch(`${process.env.DEEPVA_BASE_URL}/jobs/`, options);

  const serverRes = await response.json();
  res.send(serverRes);
  console.log(serverRes.id);
});

// call done job from API with JobID
app.get('/api/jobs/', async (_req, res) => {
  const jobId = '0578aef7-bebc-434c-927f-6043d1741a13'; //change to: req.params
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

// call ALL done jobs listed from API
app.get('/api/jobsList/', async (_req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Key ${process.env.DEEPVA_API_KEY}`,
    },
  };
  const response = await fetch(`${process.env.DEEPVA_BASE_URL}/jobs/`, options);
  const serverRes = await response.json();
  res.send(serverRes);
  console.log(serverRes);
});

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});
