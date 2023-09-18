import { useCounter } from "./hooks/useCounter";
const App = () => {
  const { count, increase, decrease, zero } = useCounter();

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>plus</button>
      <button onClick={decrease}>minus</button>
      <button onClick={zero}>zero</button>
    </div>
  );
};

export default App;
