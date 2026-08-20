import { useState } from 'react';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import './auth.css';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <div className="auth-header">
        <Button
          label="Sign In"
          className={_switch ? 'auth-tab auth-tab-active' : 'auth-tab'}
          onClick={() => setSwitch(true)}
        />
        <Button
          label="Sign Up"
          className={_switch ? 'auth-tab' : 'auth-tab auth-tab-active'}
          onClick={() => setSwitch(false)}
        />
      </div>
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </form>
  );
}

export default Authentication;
