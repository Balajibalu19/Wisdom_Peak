import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetailPage = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-200">
        <p className="text-2xl font-bold text-red-600">User not found</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl mt-10">
      <button
        className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
        onClick={() => navigate("/")}
      >
        ← Go Back
      </button>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
          {user.name}
        </h1>

        {/* User image section */}
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src={user.image || "https://via.placeholder.com/150"}
            alt={`${user.name}'s avatar`}
            className="w-full h-full rounded-full shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            {user.email}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">Phone:</span>{" "}
            {user.phone}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">Company:</span>{" "}
            {user.company.name}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">Website:</span>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition-all duration-200"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
