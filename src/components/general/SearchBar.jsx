import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './general.css';

function SearchBar({ title, setTitle }) {
  function handleInput(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Search Movies"
      />
    </div>
  );
}

export default SearchBar;
