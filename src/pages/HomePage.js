import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import Sorting from "../components/Sorting";

const HomePage = () => {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  const usersPerPage = 6; // Number of users to display per page

  // Filter and sort users
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // Pagination calculations
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Toggle theme mode
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      } min-h-screen`}
    >
      <div className="max-w-4xl mx-auto shadow-md rounded-lg p-6 mt-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            User Directory
          </h1>

          <span
            onClick={toggleTheme}
            className="text-2xl cursor-pointer transition-transform transform hover:scale-110"
            role="button"
            aria-label={`Toggle ${isDarkMode ? "Light" : "Dark"} Mode`}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </span>
        </div>

        {/* Search and Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Sorting sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>

        {/* User Cards */}
        {currentUsers.length === 0 ? (
          <p className="text-center text-red-500 font-semibold">
            No users found matching your search.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {currentUsers.map((user) => (
              <UserCard key={user.id} user={user} isDarkMode={isDarkMode} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
