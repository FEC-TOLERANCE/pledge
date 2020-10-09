const mongoose = require('mongoose');

const projectOwnerSchema = new mongoose.Schema({
  name: String,
  created: Number,
  backed: Number,
  aboutMe: String,
  projects: [Number]
});

const pledgeOptionsSchema = new mongoose.Schema({
  itemId: Number,
  options: [
    {
      tier: Number,
      reward: String,
      rewardDetail: [String],
      estimatedDelivery: Date,
      shippingLocation: String,
      pledgeBackers: Number
    }
  ]
});

const ProjectOwner = mongoose.model('Project Owner', projectOwnerSchema);
const PledgeOptions = mongoose.model('Pledge Options', pledgeOptionsSchema);

const addProjectOwner = (obj) => {
  let newOwner = new ProjectOwner({
    name: obj.name,
    created: obj.created,
    backed: obj.backed,
    aboutMe: obj.aboutMe,
    projects: obj.projects
  });

  return newOwner.save();
}

const emptyProjectOwners = () => {
  return ProjectOwner.deleteMany({});
}

const fetchProjectOwner = (itemId) => {
  return ProjectOwner.findOne({projects: itemId});
}

const addPledgeOption = (obj) => {
  let newPledgeOptions = new PledgeOptions({
    itemId: obj.itemId,
    options: obj.options
  });

  return newPledgeOptions.save()
  .catch((err) => {
    console.log('Error with saving pledge options', err);
  });
}

const emptyPledgeOptions = () => {
  return PledgeOptions.deleteMany({});
}

const fetchPledgeOptions = (itemId) => {
  return PledgeOptions.findOne({itemId: itemId});
}

module.exports = {
  addProjectOwner,
  emptyProjectOwners,
  fetchProjectOwner,
  addPledgeOption,
  emptyPledgeOptions,
  fetchPledgeOptions,
  ProjectOwner,
  PledgeOptions
}