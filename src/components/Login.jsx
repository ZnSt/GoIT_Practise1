import { useState } from "react";
import { httpServer } from "../api";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await httpServer.post("/auth/signin", {
        login,
        password,
      });
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="login" className="label">
          Login
        </label>
        <input
          type="text"
          name="login"
          className="input"
          defaultValue={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="text"
          name="password"
          className="input"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn__submit">
          Send
        </button>
      </form>
    </div>
  );
}
