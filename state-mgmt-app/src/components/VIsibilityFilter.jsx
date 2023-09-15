import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../reducers/filterReducer";

const VisisbilityFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const filterSelected = (filter) => {
    dispatch(changeFilter(filter));
  };
  return (
    <div>
      all{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => {
          filterSelected("ALL");
        }}
        checked={filter === "ALL"}
      />
      important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => {
          filterSelected("IMPORTANT");
        }}
      />
      not-important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => {
          filterSelected("NON-IMPORTANT");
        }}
      />
    </div>
  );
};

export default VisisbilityFilter;
