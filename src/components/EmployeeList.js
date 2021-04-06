import React, { useEffect, useState } from "react";

import { getEmployeeList } from "../Api/dummyAPIs";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = React.useState(null);
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    getEmployeeList().then((res) => setEmployeeList(res));
  };

  return (
    <>
      <h1>Employee Details</h1>
      <hr />
      {employeeList && employeeList.employee.length > 0 ? (
        employeeList.employee.map((employee) => {
          return (
            <React.Fragment key={employee.id}>
              <div>
                <b>Employee ID :</b> {employee.id}
              </div>
              <div>
                <b>Employee Name :</b> {employee.name}
              </div>
              <div>
                <b>Designation :</b> {employee.designation}
              </div>
              <div>
                <b>Department :</b> {employee.department}
              </div>
              <hr />
            </React.Fragment>
          );
        })
      ) : (
        <p>No records founds!</p>
      )}
    </>
  );
};

export default EmployeeList;
