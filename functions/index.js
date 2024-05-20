const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const ORIGINS = ['https://tomasps.com', 'https://www.tomasps.com'];

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!ORIGINS.includes(origin)) {
        return callback(
          new Error(`Not allowed by CORS. Origin must be: ${ORIGINS.join(' or ')}`)
        );
      }

      return callback(null, true);
    },
  })
);
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express server.');
});

module.exports.handler = require('serverless-http')(app);
