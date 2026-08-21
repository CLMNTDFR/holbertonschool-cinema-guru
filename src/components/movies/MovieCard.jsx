import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag';
import './movies.css';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const [brokenImage, setBrokenImage] = useState(false);

  const poster = movie.imageurls && movie.imageurls[0];
  const token = localStorage.getItem('accessToken');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/titles/favorite/', { headers })
      .then((response) => {
        setIsFavorite(
          response.data.some((item) => item.imdbId === movie.imdbId)
        );
      });

    axios
      .get('http://localhost:8000/api/titles/watchlater/', { headers })
      .then((response) => {
        setIsWatchLater(
          response.data.some((item) => item.imdbId === movie.imdbId)
        );
      });
  }, [movie.imdbId]);

  function handleClick(type) {
    const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;
    const isActive = type === 'favorite' ? isFavorite : isWatchLater;

    if (isActive) {
      axios.delete(url, { headers }).then(() => {
        if (type === 'favorite') setIsFavorite(false);
        else setIsWatchLater(false);
      });
    } else {
      axios.post(url, {}, { headers }).then(() => {
        if (type === 'favorite') setIsFavorite(true);
        else setIsWatchLater(true);
      });
    }
  }

  const synopsis = movie.synopsis || '';

  return (
    <li className="movie-card">
      <div className="movie-poster">
        {poster && !brokenImage ? (
          <img
            src={poster}
            alt={movie.title}
            onError={() => setBrokenImage(true)}
          />
        ) : (
          <div className="movie-poster-fallback">
            <FontAwesomeIcon icon={faFilm} />
          </div>
        )}
        <div className="movie-icons">
          <FontAwesomeIcon
            icon={faClock}
            className={isWatchLater ? 'active' : ''}
            onClick={() => handleClick('watchlater')}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={isFavorite ? 'active' : ''}
            onClick={() => handleClick('favorite')}
          />
        </div>
        <h3>{movie.title}</h3>
      </div>
      <p className="movie-synopsis">{synopsis}</p>
      <ul className="movie-genres">
        {(movie.genres || []).map((genre) => (
          <Tag key={genre} genre={genre} filter={false} />
        ))}
      </ul>
    </li>
  );
}

export default MovieCard;
