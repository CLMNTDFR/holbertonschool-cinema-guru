import Header from '../../components/navigation/Header';
import './dashboard.css';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="Dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Dashboard;
