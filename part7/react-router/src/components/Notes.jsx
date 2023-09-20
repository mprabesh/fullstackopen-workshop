import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

export const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <Table striped>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </td>
            <td style={{ cursor: "pointer" }}>
              change {note.important ? "false" : "true"}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export const Note = ({ note }) => {
  return <li>{note.content}</li>;
};
