import React from "react";
import nameDisplay from "./NameDisplay";

let App = () => {
  return React.createElement("div", {}, [
    React.createElement(nameDisplay, { firstName: "Prabesh" }),
    React.createElement(nameDisplay, { firstName: "Sandesh" }),
    React.createElement(nameDisplay, { firstName: "Sunil" }),
  ]);
};

export default App;
