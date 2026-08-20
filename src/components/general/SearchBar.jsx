import './general.css';

function SearchBar({ title, setTitle }) {
  function handleInput(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
