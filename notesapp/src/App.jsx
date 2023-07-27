import { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    //1. get data from backend server
    let myAxiosPromise = axios.get("http://localhost:3001/notes");
    myAxiosPromise.then((myResult) => {
      //2. put the data into notes state
      setNotes(myResult.data);
    });
  }, []);

  const notesToShow = notes.filter((note) => (showAll ? true : note.important));

  const handleSubmit = (event) => {
    event.preventDefault();
    const myNote = {
      content: newNote,
      id: notes.length + 1,
      important: Math.random() > 0.5,
    };
    //1. add data to the backend
    const addPromise = axios.post(`http://localhost:3001/notes`, myNote);
    addPromise
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    //2. add data to the UI by updating the state
    setNotes(notes.concat(myNote));
    setNewNote("");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const updateImpData = (id) => {
    //1. first find to be updated value
    const toBeUpdated = notes.find((val) => val.id === id);
    const updatedValue = { ...toBeUpdated, important: !toBeUpdated.important };
    //2. update to backend server
    const updatePromise = axios.put(
      `http://localhost:3001/notes/${id}`,
      updatedValue
    );
    updatePromise.then((response) =>
      setNotes(notes.map((val) => (val.id === id ? response.data : val)))
    );
  };
  return (
    <>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((value) => {
          return (
            <Note
              key={value.id}
              note={value}
              updateImp={() => {
                updateImpData(value.id);
              }}
            />
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
