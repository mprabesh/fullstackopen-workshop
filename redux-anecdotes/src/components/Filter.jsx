import React from "react";
import { useDispatch } from "react-redux";
import { filterQuery } from "../reducers/filterReducer";

export default function Filter() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterQuery(e.target.value));
  };
  const style = { marginBottom: 10 };
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
}
