// SearchBar.js

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setInput, searchPeople } from './SearchSlice'; // Import Redux actions and selectors

export const SearchBar = () => {
  const input = useSelector((state) => state.search.input);
  const searchResults = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.search.isLoading);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setInput(value));
    if (value.trim() !== '') {
      dispatch(searchPeople(value));
    }
  };

  return (
    <div className='inputWrapper'>
      <FaSearch id='searchIcon' />
      <input
        placeholder='Search...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults && (
          <div>
            {/* Display the fetched search results */}
            <h2>Search Results</h2>
            <pre>{JSON.stringify(searchResults, null, 2)}</pre>
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;
