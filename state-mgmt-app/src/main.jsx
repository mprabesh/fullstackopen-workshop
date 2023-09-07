import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { noteReducer, filterReducer } from "./reducers/noteReducer.js";

const reducers = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
