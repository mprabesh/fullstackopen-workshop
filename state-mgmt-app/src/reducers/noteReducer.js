const initialState = [
  {
    content: "reducer defines how redux store works",
    important: true,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    important: false,
    id: 2,
  },
];
const generateId = () => Number((Math.random() * 1000000).toFixed(0));

import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action) {
      return [
        ...state,
        { content: action.payload, id: generateId(), important: false },
      ];
    },
    toggleImportance(state, action) {
      return state.map((value) =>
        value.id === action.payload
          ? { ...value, important: !value.important }
          : value
      );
    },
  },
});

export const { createNote, toggleImportance } = noteSlice.actions;
export default noteSlice.reducer;
