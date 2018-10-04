const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req,res) => {
  console.log("received req from: " + req.baseUrl);
  res.send("Hello from root");
});

app.listen(8080, () => {
  console.log("listening on port 8080...");
});