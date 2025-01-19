import React from "react";

const Sorting = ({ sortOrder, setSortOrder }) => (
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="w-full md:w-auto px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300 ease-in-out text-gray-700 font-medium"
  >
    <option value="asc" className="text-gray-600">
      Sort: A to Z
    </option>
    <option value="desc" className="text-gray-600">
      Sort: Z to A
    </option>
  </select>
);

export default Sorting;
