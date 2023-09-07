const Notes = ({ note, updateImp }) => {
  return (
    <div>
      <li>
        {note.content}{" "}
        <button onClick={updateImp}>
          change {note.important ? "false" : "true"}
        </button>
      </li>
    </div>
  );
};

export default Notes;
