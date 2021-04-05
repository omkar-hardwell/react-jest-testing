// import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import EmployeeList from "../EmployeeList";

describe("Test EmployeeList component with", () => {
  it("data found", () => {
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

    /**
     * Without snapshot, simply redering a component
     */
    // render(<EmployeeList employeeList={dummyEmployeeList} />);
    /**
     * Snapshot testing
     */
    const treeNode = renderer
      .create(<EmployeeList employeeList={dummyEmployeeList} />)
      .toJSON();
    expect(treeNode).toMatchSnapshot();
  });

  it("data not defined", () => {
    const employeeListNotFound = null;
    const treeNode = renderer
      .create(<EmployeeList employeeList={employeeListNotFound} />)
      .toJSON();
    expect(treeNode).toMatchSnapshot();
  });

  it("Zero data found", () => {
    const employeeListNotFound = { employee: [] };
    const treeNode = renderer
      .create(<EmployeeList employeeList={employeeListNotFound} />)
      .toJSON();
    expect(treeNode).toMatchSnapshot();
  });
});
