import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from "enzyme";
import Pledge from '../client/src/components/Pledge.jsx';
import ProjectOwner from '../client/src/components/ProjectOwner.jsx';
import PledgeOption from '../client/src/components/PledgeOption.jsx';
import { PromiseProvider } from "mongoose";
import { PledgeOptions } from "../db/models.js";

configure({ adapter: new Adapter() });

describe("Pledge component", () => {
  const div = document.createElement('div');
  div.id = "pledge";
  const wrapper = shallow(<Pledge />);

  it ("should render", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(ProjectOwner)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<PledgeOption />)).toEqual(false);
  });

  it ("should render the appropriate number of pledge options based on state", () => {
    const options = [
      {
        rewardDetail: ["ea eum aut","deleniti voluptas consequatur","nam libero placeat"],
        _id: "5f938c419f3e0fd616407a74",
        tier: 84,
        reward: "Beatae officia est.",
        rewardDesc: "Iusto maiores eaque laudantium quam non. Id at maxime ipsum quod corporis veritatis laboriosam. Quod consequatur iste nemo sequi. Consequatur accusantium aperiam sunt atque placeat harum.",
        pledgeBackers: 14,
        estimatedDelivery: "2021-07-18T07:00:00.000Z",
        shippingLocation: "false"
      },
      {
        rewardDetail: ["nisi aperiam animi","quasi aut et","eum error exercitationem"],
        _id: "5f938c419f3e0fd616407a75",
        tier: 343,
        reward: "Fuga harum veritatis qui libero aut rerum.",rewardDesc: "Voluptatibus illo facilis nihil ab excepturi. Quidem accusamus rerum molestiae autem. Similique id non blanditiis ea. Incidunt culpa minus minus.",
        pledgeBackers: 14,
        estimatedDelivery: "2028-12-24T00:00:00.000Z",
        shippingLocation: "false"
      },
      {
        rewardDetail: ["quasi est iste","quia eos ut","nihil illum quo"],
        _id: "5f938c419f3e0fd616407a76",
        tier: 316,
        reward: "Dolor quo laudantium et ut laborum.",
        rewardDesc: "Quis reprehenderit omnis facilis. Perferendis sequi ipsum fugit excepturi. Sed quos architecto.",
        pledgeBackers: 15,
        estimatedDelivery: "2021-05-26T07:00:00.000Z"
      },
      {
        rewardDetail: ["fugit id quas","et exercitationem aliquid","quia optio ut"],
        _id: "5f938c419f3e0fd616407a77",
        tier: 497,
        reward: "Nesciunt odio earum aperiam.",
        rewardDesc: "Reiciendis deserunt facilis sit suscipit est similique. Vel et assumenda possimus. Sit similique cumque aut.",
        pledgeBackers: 0,
        estimatedDelivery: "2029-11-17T00:00:00.000Z"
      }
    ];

    wrapper.setState({options: options});

    expect(wrapper.find(PledgeOption)).toHaveLength(4);
  });
});

describe("ProjectOwner component", () => {
  it ("should render according to passed props", () => {
    const owner = {
      projects: [1,2,3,4,5],
      _id: "5f938c419f3e0fd616407a5a",
      name: "John Dryden",
      iconUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/yehudab/128.jpg",
      created: 1,
      backed: 1,
      aboutMe: "Nobis aut nihil et quidem amet sint omnis dolore. Repellendus veniam velit aperiam. Praesentium corrupti tempore at.",
      __v: 0
    };
    const wrapper = shallow(<ProjectOwner owner={owner} />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains(<img src={owner.iconUrl} className="project-owner-icon"></img>)).toBe(true);
    expect(wrapper.contains(<h4 className="project-owner-name">{owner.name}</h4>)).toBe(true);
    expect(wrapper.contains(<p className="project-owner-backed-created">{owner.created} created - {owner.backed} backed</p>)).toBe(true);
    expect(wrapper.contains(<p className="project-owner-bio">{owner.aboutMe}</p>)).toBe(true);
  });
});

describe("PledgeOption component", () => {
  it ("should render according to passed props", () => {
    const option = {
      rewardDetail: ["ea eum aut", "deleniti voluptas consequatur", "nam libero placeat"],
      _id: "5f938c419f3e0fd616407a74",
      tier: 84,
      reward: "Beatae officia est.",
      rewardDesc: "Iusto maiores eaque laudantium quam non. Id at maxime ipsum quod corporis veritatis laboriosam. Quod consequatur iste nemo sequi. Consequatur accusantium aperiam sunt atque placeat harum.",
      pledgeBackers: 14,
      estimatedDelivery: "2021-07-18T07:00:00.000Z",shippingLocation: "false"
    }
    const wrapper = shallow(<PledgeOption option={option}/>);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains(<h3>Pledge ${option.tier} or more</h3>)).toBe(true);
    expect(wrapper.contains(<h4>{option.reward}</h4>)).toBe(true);
    expect(wrapper.contains(<p className="reward-desc grey-text">{option.rewardDesc}</p>)).toBe(true);
  });
});