import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NotesForm = () => {
  const dispatch = useDispatch();
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.new_note.value;
    event.target.new_note.value = "";
    dispatch(createNote(content));
  };
  return (
    <form onSubmit={addNote}>
      <input type="text" name="new_note" /> <button>Add note</button>
    </form>
  );
};

export default NotesForm;
