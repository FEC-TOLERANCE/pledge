const express = require('express');
const app = express();
const port = 3003;
const db = require('../db');

app.use(express.static('client/dist'));

app.get('/project-owner/:itemId', (req, res) => {
  db.fetchProjectOwner(req.params.itemId)
    .then((owner) => {
      res.json(owner);
    })
    .catch((err) => {
      console.log('Error with fetching project owner', err);
    });
});

app.get('/pledge-options/:itemId', (req, res) => {
  db.fetchPledgeOptions(req.params.itemId)
    .then((options) => {
      res.json(options);
    })
    .catch((err) => {
      console.log('Error with fetching pledge options', err);
    });
});

app.listen(port, () => {
  console.log(`Pledge component listening at http://localhost:${port}`);
});