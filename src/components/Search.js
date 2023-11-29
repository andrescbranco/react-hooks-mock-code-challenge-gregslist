import React, { useState } from "react";

function Search({onSearch, searchTerm}) {


  function handleSubmit(e) {
    e.preventDefault();
    
  }
  
  function handleSearch(e){
    onSearch(e.target.value)
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
