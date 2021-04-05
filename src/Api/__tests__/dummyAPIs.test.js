import { getEmployeeList } from "../dummyAPIs";

it("Testing of async API calls", async () => {
  let dummyEmployeeList = require("../test-data/employee_list.json");

  return getEmployeeList().then((data) =>
    expect(data).toEqual(dummyEmployeeList)
  );
});
