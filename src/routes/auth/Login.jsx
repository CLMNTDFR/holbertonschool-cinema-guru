import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import './auth.css';

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body">
      <h2>Sign in with your account</h2>
      <div className="auth-inputs">
        <Input
          label="Username:"
          type="text"
          value={username}
          setValue={setUsername}
          icon={faUser}
        />
        <Input
          label="Password:"
          type="password"
          value={password}
          setValue={setPassword}
          icon={faKey}
        />
      </div>
      <div className="auth-submit">
        <Button label="Sign In" icon={faKey} type="submit" />
      </div>
    </div>
  );
}

export default Login;
