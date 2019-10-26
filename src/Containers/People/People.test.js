import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import People from "./People";
import FullPerson from "../../Components/FullPerson/FullPerson";

configure({ adapter: new Adapter() });

describe("<People /> ", () => {
  it("should render none <FullPerson /> element if not fetch the JSON file", () => {
    const wrapper = shallow(<People />);
    expect(wrapper.find(FullPerson)).toHaveLength(0);
  })
})
