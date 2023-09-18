import { useCounter } from "./hooks/useCounter";
const App = () => {
  const leftCounter = useCounter();
  const rightCounter = useCounter();
  return (
    <>
      <div>
        <div>{leftCounter.count}</div>
        <button onClick={leftCounter.increase}>plus</button>
        <button onClick={leftCounter.decrease}>minus</button>
        <button onClick={leftCounter.zero}>zero</button>
      </div>
      <hr />
      <div>
        <div>{rightCounter.count}</div>
        <button onClick={rightCounter.increase}>plus</button>
        <button onClick={rightCounter.decrease}>minus</button>
        <button onClick={rightCounter.zero}>zero</button>
      </div>
    </>
  );
};

export default App;
