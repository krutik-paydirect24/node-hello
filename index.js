const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json());

// Use JWT authentication middleware
const currencyRoutes = require('./routes/currencyRoutes');

const http = require('http');
const port = process.env.PORT || 3000;


app.use(express.json());

app.use('/api/currencies', currencyRoutes);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
}).on('error', (err) => {
  console.error('Failed to start the server:', err);
});
