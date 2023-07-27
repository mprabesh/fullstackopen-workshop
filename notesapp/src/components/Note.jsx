const Note = ({ note, updateImp }) => {
  return (
    <li>
      {note.content}
      <button onClick={updateImp}>
        change {note.important ? "false" : "true"}
      </button>
    </li>
  );
};

export default Note;
