import React from "react";
import ReactDOM from "react-dom";
import Courses from "./component/Courses";

const App = () => (
  <div>
    <h1>Web development curriculum</h1>
    <Courses />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
