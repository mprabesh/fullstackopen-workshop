import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";

const notes = [
  {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
  {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
];

const Home = () => (
  <div>
    {" "}
    <h2>TKTL notes app</h2>{" "}
  </div>
);

const Notes = ({ notes }) => (
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
const Note = ({ notes }) => {
  const id = useParams().id;
  const val = notes.find((note) => note.id == id);
  return <li>{val.content}</li>;
};
const Login = ({ setuser }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.user.value);
    setuser(e.target.user.value);
    navigate("/");
  };
  return (
    <div style={{ margin: "15px" }}>
      <form onSubmit={handleLogin}>
        user <input type="text" name="user" />
        <button>submit</button>
      </form>
    </div>
  );
};
const Users = () => (
  <div>
    {" "}
    <h2>Users</h2>{" "}
  </div>
);

const App = () => {
  const [user, setuser] = useState(null);
  const padding = {
    padding: 15,
  };

  return (
    <BrowserRouter>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? <em>{`${user} logged in`}</em> : <Link to="/login">login</Link>}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/notes/:id" element={<Note notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/login" element={<Login setuser={setuser} />} />
      </Routes>
      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </BrowserRouter>
  );
};

export default App;
