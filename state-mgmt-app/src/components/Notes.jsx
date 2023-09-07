import { useSelector, useDispatch } from "react-redux";
import { toggleImportance } from "../reducers/noteReducer";

const myStyle = { cursor: "pointer" };

const Notes = () => {
  const dispatch = useDispatch();
  const notesToShow = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.notes;
    }
    return state.filter === "IMPORTANT"
      ? state.notes.filter((val) => val.important)
      : state.notes.filter((val) => !val.important);
  });
  const increaseLike = (id) => {
    dispatch(toggleImportance(id));
  };

  const notes = useSelector((state) => state.notes);
  return (
    <div>
      {notesToShow.map((note) => (
        <li key={note.id} style={myStyle} onClick={() => increaseLike(note.id)}>
          {note.content} <strong>{note.important ? "important" : ""}</strong>
        </li>
      ))}
    </div>
  );
};

export default Notes;
