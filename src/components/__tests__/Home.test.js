import { Router, MemoryRouter } from "react-router-dom";
import { act, create } from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import { createMemoryHistory } from "history";

import Home from "../Home";

describe("Home page test with", () => {
  it("render a link", () => {
    let component;
    act(() => {
      component = create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("check valid link", () => {
    const history = createMemoryHistory();

    // mock push function
    history.push = jest.fn();

    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    screen.getByText("Employee view");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/employee");
  });
});
