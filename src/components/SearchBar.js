import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="flex justify-start items-center">
    <div className="relative max-w-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
        className="w-full px-5 py-3 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-3 right-4 h-6 w-6 text-gray-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
        />
      </svg>
    </div>
  </div>
);

export default SearchBar;
