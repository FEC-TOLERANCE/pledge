const faker = require('faker');
const db = require('../../db/index');
const models = require('../../db/models')

function generateProjectOwners() {
  let owners = [];
  const names = ['John Dryden', 'Samuel Pepys', 'John Bunyan', 'John Locke', 'Isaac Newton', 'Samuel Butler', 'John Wilmot', 'Aphra Behn', 'William Congreve', 'Mary Astell', 'Daniel Defoe', 'Anne Finch', 'Henry Fielding', 'Matthew Prior', 'Stephen Duck', 'Mary Collier', 'Mary Barber', 'Mary Jones', 'Lawrence Sterne', 'Thomas Chatterton'];

  return models.emptyProjectOwners()
    .then(() => {
      for (let i = 1; i <= names.length; i++) {
        let owner = {
          name: names[i - 1],
          created: Math.floor(Math.random() * 5),
          backed: Math.floor(Math.random() * 5),
          aboutMe: faker.lorem.paragraph(),
          projects: []
        }

        let j = (i * 5) - 4;

        while (j <= i * 5) {
          owner.projects.push(j);
          j++;
        }

        owners.push(models.addProjectOwner(owner));
      }

      return Promise.all(owners);
    })
    .catch((err) => {
      console.log('Error with seeding project owners', err);
    });
}

function generatePledgeOptions() {
  let options = [];

  return models.emptyPledgeOptions()
    .then(() => {
      for (let i = 1; i <= 100; i++) {
        let option = {
          itemId: i,
          options: generateOptions()
        }

        options.push(models.addPledgeOption(option));
      }

      return Promise.all(options);
    });
}

function generateOptions() {
  let options = [];
  const shipsAnywhere = [true, false];

  for (let i = 1; i <= 4; i++) {
    let option = {
      tier: Math.floor(Math.random() * 1000),
      reward: faker.lorem.sentence(),
      rewardDesc: faker.lorem.paragraph(),
      rewardDetail: [],
      pledgeBackers: Math.floor(Math.random() * 20)
    }

    for (let j = 0; j < 3; j++) {
      option.rewardDetail.push(faker.lorem.words());
    }

    option.estimatedDelivery = `${Math.floor(Math.random() * 10 + 2020)}-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(Math.random() * 27 + 1)}`;

    option.shippingLocation = shipsAnywhere[Math.floor(Math.random() * 2 + 1)];

    options.push(option);
  }

  return options;
}

generateProjectOwners()
  .then(() => {
    return generatePledgeOptions();
  })
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.log('Error with loading pledge database', err);
  });