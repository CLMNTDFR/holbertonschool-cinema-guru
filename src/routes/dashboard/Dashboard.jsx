import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';
import './dashboard.css';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="Dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-body">
          <SideBar />
          <div className="dashboard-content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
