import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

import emppic from "../images/steve.jpg";
import { IEmployee } from "./models";

interface IEmployeeInfo {
  employee: IEmployee;
}

const EmployeeCard: React.FC<IEmployeeInfo> = ({ employee }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={emppic} />
        <Card.Header>{employee.name}</Card.Header>
        <Card.Meta>Emp ID - {employee.id}</Card.Meta>
        <Card.Meta>Designation - {employee.designation}</Card.Meta>
        <Card.Meta>Department - {employee.department}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default EmployeeCard;
