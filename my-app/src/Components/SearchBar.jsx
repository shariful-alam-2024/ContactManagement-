import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className=" pt-4">
      <input
        type="text"
        className='px-8 text-white py-2 border-2 rounded-md bg-indigo-700 border-yellow-400'
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder=" Enter Search contacts"
    />
    </div>
  );
};

export default SearchBar;