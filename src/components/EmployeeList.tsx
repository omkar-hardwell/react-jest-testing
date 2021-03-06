import React, { useEffect } from "react";
import { Card, Container, Loader } from "semantic-ui-react";
import { Header, Divider } from "semantic-ui-react";

import { getEmployeeList } from "../Api/dummyAPIs";
import EmployeeCard from "./EmployeeCard";
import { IEmployee, IEmployeeList } from "./models";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = React.useState<IEmployeeList>();
  useEffect(() => {
    fetchDetails();
  }, []);

  // Fetch employee details
  const fetchDetails = () => {
    getEmployeeList().then((res) => setEmployeeList(res));
  };

  return (
    <>
      <Container>
        <Divider horizontal>
          <Header as="h4">Employee Details</Header>
        </Divider>
        {employeeList ? (
          employeeList.employee.length > 0 ? (
            <Card.Group>
              {employeeList.employee.map((employee: IEmployee) => {
                return <EmployeeCard key={employee.id} employee={employee} />;
              })}
            </Card.Group>
          ) : (
            <p>No records founds!</p>
          )
        ) : (
          <Loader active inline="centered" />
        )}
      </Container>
    </>
  );
};

export default EmployeeList;
