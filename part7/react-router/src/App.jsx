import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Notes, Note } from "./components/Notes";
import { Users, Home } from "./components/User";

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
