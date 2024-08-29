import React, { useState } from "react";
import "./App.css";
import List from "./List";
const App = () => {
  const list = ["data of registration ", "vendor score", "rating", "status"];
  const [active, setActive] = useState(false);
  const toggleDropdown = () => {
    setActive(!active);
  };
  return (
    <div className="container">
      <div className="parent">
        <div className="heading">
          <div className="filterparent" >
            <i className="fa-solid fa-bars"></i>
            <strong>Filter</strong>
          </div>
          <div className="filterparent" onClick={toggleDropdown}>
            <i className="fa-solid fa-bars"></i>
            <strong>Filter</strong>
          </div>
        </div>
      </div>
      <div className={`dropdown-menu ${active ? "active" : ""}`}>
        {list.map((list, index) => (
          <List key={index} list={list} />
        ))}
      </div>
    </div>
  );
};

export default App;
