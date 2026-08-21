import { useState } from 'react';
import './movies.css';

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (!filter) return;

    if (selected) {
      setGenres(genres.filter((item) => item !== genre));
      setSelected(false);
    } else {
      setGenres([...genres, genre]);
      setSelected(true);
    }
  }

  return (
    <li
      className={`tag ${selected || !filter ? 'selected' : ''}`}
      onClick={handleTag}
    >
      {genre}
    </li>
  );
}

export default Tag;
