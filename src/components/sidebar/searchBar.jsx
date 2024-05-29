import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Type your search..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* <p>
        Searching for: <span className="font-semibold">{searchTerm}</span>
      </p> */}
    </div>
  );
}

export default SearchBar;
