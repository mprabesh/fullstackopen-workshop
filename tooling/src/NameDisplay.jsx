import React from "react";

let NameDisplay = (props) => {
  return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
};

export default NameDisplay;
