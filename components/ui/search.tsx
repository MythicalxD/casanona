import React from "react";

import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-2">
      <div className="flex items-center border border-gray-300 rounded-lg h-10">
        <SearchIcon className="w-4 h-4 text-gray-300 ml-2" />
        <input
          type="text"
          className="flex-grow pl-3 pr-10 text-sm border-none bg-transparent focus:outline-none placeholder-gray-500 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:ring-transparent"
          placeholder="Search for products..."
        />
        <button className="m-1 px-4 py-[0.3rem] text-sm border bg-blue-700 text-white rounded-lg hover:bg-blue-5000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
