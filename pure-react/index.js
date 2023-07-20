let nameDisplay = (props) => {
  return React.createElement("h1", { id: "myId" }, `Hello! ${props.firstName}`);
};
let App = () => {
  return React.createElement("div", {}, [
    React.createElement(nameDisplay, { firstName: "Prabesh" }),
    React.createElement(nameDisplay, { firstName: "Sandesh" }),
    React.createElement(nameDisplay, { firstName: "Sunil" }),
  ]);
};
let container = document.getElementById("root");
let root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
