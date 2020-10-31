const mongoose = require('mongoose');
const models = require('../db/models');
const axios = require('axios');
const databaseName = 'test';

describe('Database functions', () => {

  beforeAll(async () => {
    const url = `mongodb://localhost/${databaseName}`;
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }
  }

  afterEach(async () => {
    await removeAllCollections();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  })

  it ('should add a project owner', async () => {
    const savedOwner = {
      name: 'John Smith',
      created: 5,
      backed: 3,
      aboutMe: 'I exist somewhere',
      projects: [101, 102, 103]
    };

    const owner = await models.addProjectOwner(savedOwner);
    expect(owner._id).toBeDefined();
    expect(owner.name).toBe('John Smith');
  });

  it ('should add pledge options', async () => {
    const pledge = {
      itemId: 109,
      options: [
        {
          tier: 34,
          reward: 'worm on a string',
          rewardDetail: ['worm', 'string'],
          estimatedDelivery: '2021-09-01',
          shippingLocation: true,
          pledgeBackers: 21
        }
      ]
    };

    const saved = await models.addPledgeOption(pledge);
    expect(saved._id).toBeDefined();
    expect(saved.itemId).toBe(109);
  });

});

describe('API routes', () => {
  const path = 'http://127.0.0.1:3003/';

  it ('should fetch project owner by itemId', async () => {
    const res = await axios.get(`${path}project-owner/5`);

    expect(res.status).toBe(200);
    expect(res.data.projects).toEqual(expect.arrayContaining([5]));
  });

  it ('should return status code 400 for project that is not assigned to an owner', async () => {
    const res = await axios.get(`${path}project-owner/101`, {
      validateStatus: function (status) {
        return status;
      }
    });

    expect(res.status).toBe(400);
  });

  it ('should return status code 400 for invalid project owner itemId', async () => {
    const res = await axios.get(`${path}project-owner/cat`, {
      validateStatus: function (status) {
        return status;
      }
    });

    expect(res.status).toBe(400);
  });

  it ('should fetch pledge options by itemId', async () => {
    const res = await axios.get(`${path}pledge-options/47`);

    expect(res.status).toBe(200);
    expect(res.data.itemId).toBe(47);
  });

  it ('should return status code 400 for project that does not exist', async () => {
    const res = await axios.get(`${path}pledge-options/102`, {
      validateStatus: function (status) {
        return status;
      }
    });

    expect(res.status).toBe(400);
  });

  it ('should return status code 400 for invalid pledge options itemId', async () => {
    const res = await axios.get(`${path}pledge-options/dog$`, {
      validateStatus: function (status) {
        return status;
      }
    });

    expect(res.status).toBe(400);
  });
});