import React from "react";
import { shallowToJson } from "enzyme-to-json";
import { shallow } from "enzyme";

import EmployeeCard from "../EmployeeCard";
import { IEmployee } from "../models";

import "../../setupTests.js";

describe("EmployeeCard testing with", () => {
  const dummyEmployeeInfo: IEmployee = {
    id: 1,
    name: "Omkar",
    designation: "React developer",
    department: "UI",
  };
  it("render card", () => {
    const wrapper = shallow(<EmployeeCard employee={dummyEmployeeInfo} />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
