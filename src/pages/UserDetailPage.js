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
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-xl font-semibold text-red-600">User not found</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-xl mt-10">
      <button
        className="mb-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
        onClick={() => navigate("/")}
      >
        ← Go Back
      </button>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6">
          {user.name}
        </h1>

        {/* User image section */}
        <img
          src={user.image || "https://via.placeholder.com/150"} // Default placeholder image
          alt={`${user.name}'s avatar`}
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />

        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-800">Email:</span>{" "}
            {user.email}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-800">Phone:</span>{" "}
            {user.phone}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-800">Company:</span>{" "}
            {user.company.name}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-800">Website:</span>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
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
