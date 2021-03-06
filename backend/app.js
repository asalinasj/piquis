const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', apiRouter);

app.get('/', (req,res) => {
  console.log("received req from: " + req.baseUrl);
  res.send("Hello from root");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});