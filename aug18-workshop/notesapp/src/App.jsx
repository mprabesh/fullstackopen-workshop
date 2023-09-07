import { useState, useEffect } from "react";
import Notes from "./components/Note";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const notesCall = axios.get("http://localhost:8080/api/notes");
    notesCall
      .then((result) => {
        setNotes(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    const newNoteObj = {
      content: newNote,
      important: Math.random() > 0.5,
    };
    const addPromise = axios.post(
      "http://localhost:8080/api/notes",
      newNoteObj
    );
    addPromise
      .then((result) => setNotes([...notes, result.data]))
      .catch((err) => console.log(err));
    setNewNote("");
  };
  const notesToShow = notes.filter((val) => (showAll ? true : val.important));

  const updateImp = (id) => {
    const currentNote = notes.find((val) => val.id === id);
    const updatedNote = { ...currentNote, important: !currentNote.important };
    console.log(updatedNote);
    const updatePromise = axios.put(
      `http://localhost:8080/api/notes/${id}`,
      updatedNote
    );
    updatePromise
      .then((result) => {
        setNotes(notes.map((val) => (val.id === id ? result.data : val)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "Important" : "all"}
      </button>
      <ul>
        {notesToShow.map((val) => (
          <Notes key={val.id} note={val} updateImp={() => updateImp(val.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
