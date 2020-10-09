const express = require('express');
const app = express();
const port = 3003;
const db = require('../db/index.js');
const models = require('../db/models.js');

app.use(express.static('client/dist'));

app.get('/project-owner/:itemId', (req, res) => {
  models.fetchProjectOwner(req.params.itemId)
    .then((owner) => {
      if (!owner) {
        throw 'does not exist';
      }

      res.json(owner);
    })
    .catch((err) => {
      if (err === 'does not exist') {
        res.status(400).json('Project does not exist');
      } else if (typeof req.params.itemId !== 'number') {
        res.status(400).json('Invalid project id');
      } else {
        res.status(500).json(err);
      }
    });
});

app.get('/pledge-options/:itemId', (req, res) => {
  models.fetchPledgeOptions(req.params.itemId)
    .then((options) => {
      if (!options) {
        throw 'does not exist';
      }

      res.json(options);
    })
    .catch((err) => {
      if (err === 'does not exist') {
        res.status(400).json('Project does not exist');
      } else if (typeof req.params.itemId !== 'number') {
        res.status(400).json('Invalid project id');
      } else {
        res.status(500).json(err);
      }
    });
});

app.listen(port, () => {
  console.log(`Pledge component listening at http://localhost:${port}`);
});