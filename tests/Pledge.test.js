import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from "enzyme";
import Pledge from '../client/src/components/Pledge.jsx';
import ProjectOwner from '../client/src/components/ProjectOwner.jsx';
import PledgeOption from '../client/src/components/PledgeOption.jsx';

configure({ adapter: new Adapter() });

describe("Pledge component", () => {
  test("renders", () => {
    const div = document.createElement('div');
    div.id = "pledge";
    const wrapper = shallow(<Pledge />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(ProjectOwner)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<PledgeOption />)).toEqual(false);
  });
});