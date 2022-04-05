import React from 'react';
import { CountryContext } from '../CountryContext';
import './CountryCounter.css';

function CountryCounter() {
  const { totalCountrys, completedCountrys } = React.useContext(CountryContext);
  
  return (
    <h2 className="CountryCounter">Has contado {completedCountrys} de {totalCountrys} Paises</h2>
  );
}

export { CountryCounter };
