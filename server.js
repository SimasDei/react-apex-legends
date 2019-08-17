const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 5500;

app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
  console.log(req.params.platform, req.params.gamertag);
  res.send('Ahoy Sailor o/');
});

app.listen(port, () => {
  console.log(`Backend server running on port: ${port}, Mode: ${process.env.NODE_ENV}`);
});
