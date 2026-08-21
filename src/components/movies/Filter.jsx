import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';
import './movies.css';

const GENRES = [
  'Action',
  'Drama',
  'Comedy',
  'Biography',
  'Romance',
  'Thriller',
  'War',
  'History',
  'Sport',
  'Sci-Fi',
  'Documentary',
  'Crime',
  'Fantasy',
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'highestrated', label: 'Highest rated' },
  { value: 'lowestrated', label: 'Lowest rated' },
];

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  return (
    <div className="filter">
      <SearchBar title={title} setTitle={setTitle} />
      <div className="filter-row">
        <div className="filter-controls">
          <Input
            label="Min Date:"
            type="number"
            value={minYear}
            setValue={setMinYear}
          />
          <Input
            label="Max Date:"
            type="number"
            value={maxYear}
            setValue={setMaxYear}
          />
          <SelectInput
            label="Sort:"
            options={SORT_OPTIONS}
            value={sort}
            setValue={setSort}
          />
        </div>
        <ul className="filter-tags">
          {GENRES.map((genre) => (
            <Tag
              key={genre}
              genre={genre}
              filter={true}
              genres={genres}
              setGenres={setGenres}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
