import React from "react";
import { shallowToJson } from "enzyme-to-json";
import { shallow } from "enzyme";

import EmployeeCard from "../EmployeeCard";

import "../../setupTests.js";

describe("EmployeeCard testing with", () => {
  let wrapper;

  const dummyEmployeeInfo = {
    id: 1,
    name: "Omkar",
    designation: "React developer",
    department: "UI",
  };
  it("render card", () => {
    wrapper = shallow(<EmployeeCard employee={dummyEmployeeInfo} />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
