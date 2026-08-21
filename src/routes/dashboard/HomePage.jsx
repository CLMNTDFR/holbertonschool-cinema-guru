import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import Button from '../../components/general/Button';
import './dashboard.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  function loadMovies(pageNumber) {
    axios
      .get('http://localhost:8000/api/titles/advancedsearch', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageNumber,
        },
      })
      .then((response) => {
        const titles = response.data.titles || [];

        if (pageNumber > 1) {
          setMovies((prev) => [...prev, ...titles]);
        } else {
          setMovies(titles);
        }
      });
  }

  useEffect(() => {
    setPage(1);
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);

  function handleLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  }

  return (
    <div className="HomePage dashboard-page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <div className="load-more">
        <Button label="Load More.." onClick={handleLoadMore} />
      </div>
    </div>
  );
}

export default HomePage;
