import React from "react";

function Search({userInput, setUserInput}) {
  console.log(userInput);
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={userInput}
        placeholder="Type a name to search..."
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
