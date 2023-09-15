import { useNavigate } from "react-router-dom";

export const Login = ({ setuser }) => {
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
