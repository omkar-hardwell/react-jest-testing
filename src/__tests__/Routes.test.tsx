import React from "react";
import { Router, MemoryRouter, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { shallow } from "enzyme";

import Routes from "../Routes";
import Home from "../components/Home";
import EmployeeList from "../components/EmployeeList";

describe("Testing of application route", () => {
  it("render all routes", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Routes />
      </Router>
    );
  });

  it("render home page", () => {
    const component = shallow(
      <MemoryRouter initialentries="{['/']}">
        <Route path="/" render={() => <Home />} />
      </MemoryRouter>
    );

    component.find(Home);
  });

  it("render employee list page", () => {
    const component = shallow(
      <MemoryRouter initialentries="{['/employee']}">
        <Route path="/employee" render={() => <Home />} />
      </MemoryRouter>
    );

    component.find(EmployeeList);
  });
});
