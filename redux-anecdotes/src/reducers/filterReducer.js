const filterReducer = (state = "", action) => {
  if (action.type === "FILTER_ANECDOTE") {
    return action.payload;
  }
  return state;
};

export default filterReducer;
