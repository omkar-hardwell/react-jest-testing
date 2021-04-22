// import { render, screen } from "@testing-library/react";
import React from "react";
import { shallowToJson } from "enzyme-to-json";
import { shallow } from "enzyme";

import EmployeeList from "../EmployeeList";
import { IEmployeeList } from "../models";

import "../../setupTests.js";

describe("Test EmployeeList component with", () => {
  const dummyEmployeeList: IEmployeeList = {
    employee: [
      {
        id: 1,
        name: "Omkar",
        designation: "React developer",
        department: "UI",
      },
      {
        id: 2,
        name: "Jigar",
        designation: "React developer",
        department: "UI",
      },
    ],
  };
  const employeeListNotFound = null;
  const employeeListWithZeroData: IEmployeeList = { employee: [] };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("data found", () => {
    /**
     * Without snapshot, simply redering a component
     */
    // render(<EmployeeList employeeList={dummyEmployeeList} />);
    /**
     * Snapshot testing
     */
    React.useState = jest.fn(() => [dummyEmployeeList, () => {}]);
    const wrapper = shallow(<EmployeeList />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("data not defined, shows loading...", () => {
    React.useState = jest.fn(() => [employeeListNotFound, () => {}]);
    const wrapper = shallow(<EmployeeList />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("zero data found", () => {
    React.useState = jest.fn(() => [employeeListWithZeroData, () => {}]);
    const wrapper = shallow(<EmployeeList />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
