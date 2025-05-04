// import React from 'react';

// function SearchBar({ searchTerm, onSearch }) {
//   return (
//     <input
//       type="text"
//       placeholder="Search by recipient or subject..."
//       value={searchTerm}
//       onChange={(e) => onSearch(e.target.value)}
//       className="search-input"
//     />
//   );
// }

// export default SearchBar;
import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="🔍 Search by recipient or subject..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
