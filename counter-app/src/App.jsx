import { useState } from "react";
import ChangeButton from "./ChangeButton";
import DisplayNumber from "./DisplayNumber";

const App = () => {
  let [counter, setCounter] = useState(1);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const setToZero = () => {
    setCounter(0);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  //code to change the state in every 3sec re-renders the page
  // setTimeout(() => {
  //   changeCounter();
  // }, 3000);
  return (
    <div>
      <DisplayNumber value={counter} />
      <ChangeButton changeFunc={increaseCounter} text={`increase count`} />
      <ChangeButton changeFunc={setToZero} text={`reset count`} />
      <ChangeButton changeFunc={decreaseCounter} text={`decrease count`} />
    </div>
  );
};

export default App;
