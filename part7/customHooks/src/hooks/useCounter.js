import { useState } from "react";

export const useCounter = () => {
  const [count, setCounter] = useState(0);
  const increase = () => {
    setCounter(count + 1);
  };
  const decrease = () => {
    setCounter(count - 1);
  };
  const zero = () => {
    setCounter(0);
  };
  return { increase, decrease, zero, count };
};
