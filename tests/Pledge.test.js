import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from "enzyme";
import Pledge from '../client/src/components/Pledge.jsx';

configure({ adapter: new Adapter() });

describe("Pledge component", () => {
  test("renders", () => {
    const div = document.createElement('div');
    div.id = "pledge";
    const wrapper = shallow(<Pledge />);

    expect(wrapper.exists()).toBe(true);
  });
});