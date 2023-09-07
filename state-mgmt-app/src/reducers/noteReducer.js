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
export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: true,
      id: generateId(),
    },
  };
};

export const toggleImportance = (id) => {
  return { type: "TOGGLE_IMPORTANCE", payload: id };
};

export const noteReducer = (state = initialState, action) => {
  if (action.type === "NEW_NOTE") {
    return [...state, action.payload];
  } else if (action.type === "TOGGLE_IMPORTANCE") {
    return state.map((value) =>
      value.id === action.payload
        ? { ...value, important: !value.important }
        : value
    );
  }
  return state;
};

export const filterReducer = (state = "ALL", action) => {
  if (action.type === "SET_FILTER") {
    return action.payload;
  }
  return state;
};

export const changeFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};
