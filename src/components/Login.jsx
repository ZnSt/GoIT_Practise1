import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpServer } from '../api';

import { loginAc } from '../store/actions';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await httpServer.post('/auth/signin', {
      login,
      password,
    });

    dispatch(loginAc(data.data));

    navigate('/');
  };
  return (
    <div className="form__wrapper">
      <form className="form">
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
        <button type="button" className="btn__submit" onClick={(e) => handleSubmit(e)}>
          Send
        </button>
      </form>
    </div>
  );
}
