import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.content}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Note = ({ notes }) => {
  const id = useParams().id;
  const val = notes.find((note) => note.id == id);
  return <li>{val.content}</li>;
};
