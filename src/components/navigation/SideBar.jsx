import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';

function SideBar() {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);

    if (pageName === 'Home') navigate('/home');
    else if (pageName === 'Favorites') navigate('/favorites');
    else if (pageName === 'Watch Later') navigate('/watchlater');
  }

  function pageKey(name) {
    return name.toLowerCase().replace(/\s+/g, '');
  }

  function loadActivities() {
    axios
      .get('http://localhost:8000/api/activity', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setActivities(response.data);
      });
  }

  useEffect(() => {
    loadActivities();

    window.addEventListener('activitiesUpdated', loadActivities);
    return () => window.removeEventListener('activitiesUpdated', loadActivities);
  }, []);

  return (
    <nav
      className={`sidebar ${small ? 'small' : ''}`}
      onMouseEnter={() => {
        setSmall(false);
        setShowActivities(true);
      }}
      onMouseLeave={() => {
        setSmall(true);
        setShowActivities(false);
      }}
    >
      <ul className="sidebar-nav">
        <li
          className={pageKey(selected) === 'home' ? 'selected' : ''}
          onClick={() => setPage('Home')}
        >
          <FontAwesomeIcon icon={faFolder} />
          <span className="sidebar-label">Home</span>
        </li>
        <li
          className={pageKey(selected) === 'favorites' ? 'selected' : ''}
          onClick={() => setPage('Favorites')}
        >
          <FontAwesomeIcon icon={faStar} />
          <span className="sidebar-label">Favorites</span>
        </li>
        <li
          className={pageKey(selected) === 'watchlater' ? 'selected' : ''}
          onClick={() => setPage('Watch Later')}
        >
          <FontAwesomeIcon icon={faClock} />
          <span className="sidebar-label">Watch Later</span>
        </li>
      </ul>
      {showActivities && (
        <ul className="sidebar-activities">
          {activities.slice(0, 10).map((activity) => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
}

export default SideBar;
