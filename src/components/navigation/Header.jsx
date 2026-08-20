import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <nav className="header">
      <p className="header-title">Cinema Guru</p>
      <div className="header-user">
        <img src="https://picsum.photos/100/100" alt="User avatar" />
        <p>Welcome, {userUsername}!</p>
        <span onClick={logout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Logout
        </span>
      </div>
    </nav>
  );
}

export default Header;
