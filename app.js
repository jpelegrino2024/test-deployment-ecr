const express = require('express');

const app = express();

app.get('/sayhello', (req, res) => {
  res.status(200).send('Hello world from NodeJs and express');
});

app.listen(8002, () => {
  console.log('App started');
});
