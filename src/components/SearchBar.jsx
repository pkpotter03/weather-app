import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <input
        type="text"
        className="text-black border p-2 rounded-l-lg h-10"
        placeholder="Enter city name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r-lg h-10"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;