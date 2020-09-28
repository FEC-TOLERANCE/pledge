const express = require('express');
const app = express();
const port = 3003;

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Pledge component listening at http://localhost:${port}`);
});