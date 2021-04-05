import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import EmployeeList from "./components/EmployeeList";
import { getEmployeeList } from "./Api/dummyAPIs";

function App() {
  const [employeeList, setEmployeeList] = useState(null);
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    getEmployeeList().then((res) => setEmployeeList(res));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <EmployeeList employeeList={employeeList} />
    </div>
  );
}

export default App;
