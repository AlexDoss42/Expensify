const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`It's over Anakin. I have the 3000 port!`)
});