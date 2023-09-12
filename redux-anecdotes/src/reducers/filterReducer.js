import { createSlice } from "@reduxjs/toolkit";

// const filterReducer = (state = "", action) => {
//   if (action.type === "FILTER_ANECDOTE") {
//     return action.payload;
//   }
//   return state;
// };

const filterSlice = createSlice({
  name: "filterAnecdote",
  initialState: "",
  reducers: {
    filterQuery(state, action) {
      return action.payload;
    },
  },
});

export const { filterQuery } = filterSlice.actions;
export default filterSlice.reducer;
