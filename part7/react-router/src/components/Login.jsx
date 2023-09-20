import { useNavigate } from "react-router-dom";
// import { Form, Button, Alert } from "react-bootstrap";
import { TextField, Button } from "@mui/material";

export const Login = ({ setuser }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    setuser(e.target.username.value);
    navigate("/");
  };
  return (
    <div style={{ margin: "15px" }}>
      <form onSubmit={handleLogin}>
        <div>
          <TextField label="username" name="username" />
        </div>
        <div>
          <TextField label="password" type="password" />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  );
};
