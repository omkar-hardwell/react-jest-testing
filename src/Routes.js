import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/employee" component={EmployeeList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
