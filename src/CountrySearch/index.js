import React from 'react';
import { CountryContext } from '../CountryContext';
import './CountrySearch.css';

function CountrySearch() {
  const { searchValue, setSearchValue } = React.useContext(CountryContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="CountrySearch"
      placeholder="Buscar país"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { CountrySearch };
