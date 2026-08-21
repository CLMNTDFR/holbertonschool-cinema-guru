import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/titles/watchlater/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setMovies(response.data);
      });
  }, []);

  return (
    <div className="WatchLater dashboard-page">
      <div className="page-title">
        <h1>Movies to watch later</h1>
      </div>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default WatchLater;
