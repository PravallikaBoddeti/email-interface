import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setLogin }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onchange = (event) => {
    event.target.id === "email"
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  };
  const onLogin = () => {
    if (email === "abc@gmail.com" && password === "12345") {
      setLogin(true);
      navigate("/dashboard");
    } else alert("Enter valid details!");
  };
  return (
    <div
      style={{
        margin: "5em 20em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Login page</h1>
      <div style={{ margin: 10 }}>
        <label>Email</label>
        <input type="email" id="email" value={email} onChange={onchange} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onchange}
        />
      </div>
      <div style={{ margin: "2em 5em" }}>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};
export default Login;
