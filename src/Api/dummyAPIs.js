export async function getEmployeeList() {
  let employees = require("./test-data/employee_list.json");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(employees);
    }, 1000);
  });
}
