import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

import emppic from "../images/steve.jpg";

const EmployeeCard = ({ ...props }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={emppic} />
        <Card.Header>{props.employee.name}</Card.Header>
        <Card.Meta>Emp ID - {props.employee.id}</Card.Meta>
        <Card.Meta>Designation - {props.employee.designation}</Card.Meta>
        <Card.Meta>Department - {props.employee.department}</Card.Meta>
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
