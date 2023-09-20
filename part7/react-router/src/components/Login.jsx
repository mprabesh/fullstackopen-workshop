import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

export const Login = ({ setuser }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setuser(e.target.username.value);
    <Alert variant="success">{e.target.username.value} logged in!</Alert>;
    navigate("/");
  };
  return (
    <div style={{ margin: "15px" }}>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control type="text" name="username" />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
