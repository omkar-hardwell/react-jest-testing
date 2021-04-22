import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ui container">
      <Link to="/employee">Employee view</Link>
    </div>
  );
};

export default Home;
