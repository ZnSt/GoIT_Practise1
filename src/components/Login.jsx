export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="login" className="label">
          Login
        </label>
        <input type="text" name="login" id="login" className="input" />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input type="text" name="password" id="password" className="input" />
        <button type="submit" className="btn__submit">
          Send
        </button>
      </form>
    </div>
  );
}
