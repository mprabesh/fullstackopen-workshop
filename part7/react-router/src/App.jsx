import { useState } from "react";
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import { Login } from "./components/Login";
import { Notes, Note } from "./components/Notes";
import { Users, Home } from "./components/User";
// import { Navbar, Nav } from "react-bootstrap";
import {
  Container,
  Alert,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";

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
  const match = useMatch("/notes/:id");
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null;
  // const padding = {
  //   padding: 15,
  // };

  return (
    <Container>
      {" "}
      <div className="notification_container">
        {user ? <Alert variant="success">{user} logged in</Alert> : null}
      </div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="menu"
            ></IconButton>
            <Button color="info">
              <Link style={{ color: "green" }} to="/">
                home
              </Link>
            </Button>
            <Button color="info">
              <Link style={{ color: "green" }} to="/notes">
                notes
              </Link>
            </Button>
            <Button color="info">
              <Link style={{ color: "green" }} to="/users">
                users
              </Link>
            </Button>
            <Button color="info">
              {user ? (
                <em style={{ color: "green" }}>{user} logged in</em>
              ) : (
                <Link style={{ color: "green" }} to="/login">
                  login
                </Link>
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/login" element={<Login setuser={setuser} />} />
      </Routes>
      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Container>
  );
};

export default App;
