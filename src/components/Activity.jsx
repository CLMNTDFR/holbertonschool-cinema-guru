import './components.css';

function Activity({ activity }) {
  const username = activity.user?.username || '';
  const title = activity.title?.title || '';
  const date = new Date(activity.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  let action = 'added';
  let list = 'to watch later';

  switch (activity.activityType) {
    case 'favorite':
      action = 'added';
      list = 'to favorite';
      break;
    case 'watchLater':
      action = 'added';
      list = 'to watch later';
      break;
    case 'removeFavorited':
      action = 'removed';
      list = 'from favorite';
      break;
    case 'removeWatchLater':
      action = 'removed';
      list = 'from watch later';
      break;
    default:
      break;
  }

  return (
    <li className="activity">
      <p>
        <span className="activity-highlight">{username}</span>
        {` ${action} `}
        <span className="activity-highlight">{title}</span>
        {` ${list} - `}
        <span className="activity-date">{date}</span>
      </p>
    </li>
  );
}

export default Activity;
