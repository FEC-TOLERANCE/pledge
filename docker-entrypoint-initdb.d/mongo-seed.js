const paragraphs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat.', 'Semper quis lectus nulla at volutpat diam. Vel orci porta non pulvinar neque laoreet suspendisse. Vitae proin sagittis nisl rhoncus.', 'Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Et magnis dis parturient montes. Dui faucibus in ornare quam viverra orci sagittis.', 'Ultrices gravida dictum fusce ut placerat. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Molestie ac feugiat sed lectus.', 'In arcu cursus euismod quis viverra nibh. Justo laoreet sit amet cursus. At augue eget arcu dictum varius duis at consectetur lorem.', 'Nunc lobortis mattis aliquam faucibus purus in massa tempor. Nunc pulvinar sapien et ligula ullamcorper. Urna condimentum mattis pellentesque id nibh tortor.', 'Duis ut diam quam nulla porttitor massa. Tincidunt arcu non sodales neque sodales ut. Tempor nec feugiat nisl pretium fusce id velit.', 'Massa tempor nec feugiat nisl pretium fusce. Diam quam nulla porttitor massa. Diam quis enim lobortis scelerisque fermentum.', 'Nunc congue nisi vitae suscipit tellus mauris a. Nec feugiat in fermentum posuere urna. Pulvinar mattis nunc sed blandit libero.', 'Nulla aliquet porttitor lacus luctus accumsan. Sit amet risus nullam eget felis eget. Faucibus scelerisque eleifend donec pretium.', 'Volutpat ac tincidunt vitae semper quis lectus. Massa tincidunt dui ut ornare lectus sit amet est placerat.', 'Ac tincidunt vitae semper quis lectus nulla. Interdum velit laoreet id donec ultrices tincidunt arcu. Ut aliquam purus sit amet luctus.', 'Odio euismod lacinia at quis. Sit amet cursus sit amet dictum sit amet justo donec. Ac turpis egestas integer eget aliquet nibh praesent tristique magna.', 'At quis risus sed vulputate odio ut. Magna eget est lorem ipsum dolor sit. Malesuada proin libero nunc consequat interdum.', 'Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Etiam sit amet nisl purus in.', 'In dictum non consectetur a erat nam. Vitae semper quis lectus nulla. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus.', 'Non pulvinar neque laoreet suspendisse interdum consectetur. Vitae suscipit tellus mauris a diam.', 'Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Sed arcu non odio euismod lacinia at quis risus. Mauris vitae ultricies leo integer malesuada nunc vel.', 'Scelerisque fermentum dui faucibus in. Ridiculus mus mauris vitae ultricies leo. Auctor urna nunc id cursus metus aliquam eleifend mi in. Varius vel pharetra vel turpis nunc eget.', 'Aliquet sagittis id consectetur purus ut. Orci a scelerisque purus semper eget duis. Ipsum consequat nisl vel pretium lectus quam id leo in. Cras pulvinar mattis nunc sed blandit libero.'];
const words = ['in mollis nunc sed', 'in aliquam sem fringilla', 'volutpat consequat mauris nunc', 'eget nullam non nisi', 'dapibus ultrices in iaculis', 'lacus vel facilisis volutpat', 'ut eu sem integer', 'risus quis varius quam', 'tempor commodo ullamcorper a', 'elit duis tristique sollicitudin'];

function generateProjectOwners() {
  const names = ['John Dryden', 'Samuel Pepys', 'John Bunyan', 'John Locke', 'Isaac Newton', 'Samuel Butler', 'John Wilmot', 'Aphra Behn', 'William Congreve', 'Mary Astell', 'Daniel Defoe', 'Anne Finch', 'Henry Fielding', 'Matthew Prior', 'Stephen Duck', 'Mary Collier', 'Mary Barber', 'Mary Jones', 'Lawrence Sterne', 'Thomas Chatterton'];
  const icons = ['https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/908694/pexels-photo-908694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/583791/pexels-photo-583791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2557232/pexels-photo-2557232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1369653/pexels-photo-1369653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4019666/pexels-photo-4019666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3045639/pexels-photo-3045639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1576895/pexels-photo-1576895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4612722/pexels-photo-4612722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3302434/pexels-photo-3302434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4107337/pexels-photo-4107337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1234853/pexels-photo-1234853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/872512/pexels-photo-872512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4350067/pexels-photo-4350067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4452380/pexels-photo-4452380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4204832/pexels-photo-4204832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/4205798/pexels-photo-4205798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/5623083/pexels-photo-5623083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

  db["project owners"].remove({});

  for (let i = 1; i <= names.length; i++) {
    let owner = {
      name: names[i - 1],
      iconUrl: icons[i - 1],
      created: Math.floor(Math.random() * 5),
      backed: Math.floor(Math.random() * 5),
      aboutMe: paragraphs[i - 1],
      projects: []
    }

    let j = (i * 5) - 4;

    while (j <= i * 5) {
      owner.projects.push(j);
      j++;
    }

    db["project owners"].insertOne(owner);
  }
}

function generatePledgeOptions() {
  db["pledge options"].remove({});
  for (let i = 1; i <= 100; i++) {
    let option = {
      itemId: i,
      options: generateOptions()
    }

    db["pledge options"].insertOne(option);
  }
}

function generateOptions() {
  let options = [];
  const shipsAnywhere = [true, false];

  for (let i = 1; i <= 4; i++) {
    let option = {
      tier: Math.floor(Math.random() * 1000),
      reward: paragraphs[Math.floor(Math.random() * 20)].split('.')[0],
      rewardDesc: paragraphs[Math.floor(Math.random() * 20)],
      rewardDetail: [],
      pledgeBackers: Math.floor(Math.random() * 20)
    }

    for (let j = 0; j < 3; j++) {
      option.rewardDetail.push(words[Math.floor(Math.random() * 10)]);
    }

    option.estimatedDelivery = `${Math.floor(Math.random() * 10 + 2020)}-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(Math.random() * 27 + 1)}`;

    option.shippingLocation = shipsAnywhere[Math.floor(Math.random() * 2 + 1)];

    options.push(option);
  }

  return options;
}

db.getSiblingDB('pledge');

generateProjectOwners();
generatePledgeOptions();