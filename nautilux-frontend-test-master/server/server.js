const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const data = require('./data.json');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/interventions', (req, res) => {
  res.json(data);
});
