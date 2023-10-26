"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-500 hover:bg-zinc-600 text-white px-3 py-2 rounded-full"
        aria-label="Search"
        onClick={handleSearch}
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;
