// import { render, screen } from "@testing-library/react";
import React from "react";
import { shallowToJson } from "enzyme-to-json";
import { shallow } from "enzyme";

import EmployeeList from "../EmployeeList";

import "../../setupTests.js";

describe("Test EmployeeList component with", () => {
  let wrapper;

  const dummyEmployeeList = {
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
  const employeeListWithZeroData = { employee: [] };

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
    React.useState = jest.fn((initialValue) => [dummyEmployeeList, () => {}]);
    wrapper = shallow(<EmployeeList />);

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("data not defined", () => {
    React.useState = jest.fn((initialValue) => [
      employeeListNotFound,
      () => {},
    ]);
    wrapper = shallow(<EmployeeList />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("Zero data found", () => {
    React.useState = jest.fn((initialValue) => [
      employeeListWithZeroData,
      () => {},
    ]);
    wrapper = shallow(<EmployeeList />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
