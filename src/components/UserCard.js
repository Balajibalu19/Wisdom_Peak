import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user, isDarkMode }) => (
  <div
    className={`${
      isDarkMode
        ? "bg-gray-800 text-gray-100 border-gray-700"
        : "bg-white text-gray-800 border-gray-200"
    } border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 flex flex-col h-full`}
  >
    <img
      src={user.image}
      alt={`${user.name}'s avatar`}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h2 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      {user.name}
    </h2>

    <p className="text-sm mb-2">
      <span className="font-medium">Email:</span> {user.email}
    </p>
    <p className="text-sm mb-2">
      <span className="font-medium">City:</span> {user.address.city}
    </p>
    <p className="text-sm mb-4">
      <span className="font-medium">Phone:</span> {user.phone}
    </p>
    <Link to={`/user/${user.id}`} className="mt-auto">
      <button
        className={`w-full px-6 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ${
          isDarkMode
            ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 active:bg-gray-800"
            : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
        }`}
      >
        View Details
      </button>
    </Link>
  </div>
);

export default UserCard;
