// app.js
const express = require('express');
const app = express();
const port = 3000;

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
