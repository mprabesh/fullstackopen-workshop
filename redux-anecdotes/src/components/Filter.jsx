import React from "react";
import { useDispatch } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch({ type: "FILTER_ANECDOTE", payload: e.target.value });
  };
  const style = { marginBottom: 10 };
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
}
