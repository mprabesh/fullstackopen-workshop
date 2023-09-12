import React from "react";
import { useDispatch } from "react-redux";
import { asObject } from "../reducers/anecdoteReducer";

export default function AnecdoteForm() {
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    const newAnecdote = event.target.newVal.value;
    dispatch({ type: "ADD_ANECDOTE", payload: asObject(newAnecdote) });
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input type="text" name="newVal" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
}
