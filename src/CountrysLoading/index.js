import React from 'react';
import './CountrysLoading.css';

function CountrysLoading() {
  return (
    <div className="LoadingCountry-container">
      <span className="LoadingCountry-completeIcon"></span>
      <p className="LoadingCountry-text">Cargando Paises...</p>
      <span className="LoadingCountry-deleteIcon"></span>
    </div>
  );
}

export { CountrysLoading };
