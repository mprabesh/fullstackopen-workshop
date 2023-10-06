import { useEffect, useState } from "react";
import { Note } from "./types";
import { getAllNotes, createNote } from "./noteService";

const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState<Note[]>([{ id: 1, content: "testing" }]);
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createNote({ content: newNote }).then((data) => setNotes([...notes, data]));
    setNewNote("");
  };

  useEffect(() => {
    getAllNotes().then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <h2>Note App with TS</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
