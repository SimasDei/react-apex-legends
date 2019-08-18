const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 5500;

app.use('/api/v1/profile', require('./routes/profile'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(port, () => {
  console.log(`Backend server running on port: ${port}, Mode: ${process.env.NODE_ENV}`);
});
