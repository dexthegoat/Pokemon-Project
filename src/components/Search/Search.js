import React, { useState } from 'react';
import './Search.css';

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchHandler } = props;

  const clickHandler = async () => {
    searchHandler(searchTerm);
  };
  return (
    <React.Fragment>
      <nav className="search">
        <i className="fa fa-search"></i>
        <input
          type="text"
          className="searchTerm"
          placeholder="     Search By Name"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" onClick={clickHandler}>
          SEARCH
        </button>
      </nav>
    </React.Fragment>
  );
}
