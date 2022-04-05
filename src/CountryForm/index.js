import React from 'react';
import { CountryContext } from '../CountryContext';
import './CountryForm.css';

function CountryForm() {
  const [newCountryValue, setNewCountryValue] = React.useState('');
  const {
    addCountry,
    setOpenModal,
  } = React.useContext(CountryContext);
  
  const onChange = (event) => {
    setNewCountryValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addCountry(newCountryValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Agrega tu nuevo País</label>
      <textarea
        value={newCountryValue}
        onChange={onChange}
        
      />
      <div className="CountryForm-buttonContainer">
        <button
          type="button"
          className="CountryForm-button CountryForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="CountryForm-button CountryForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { CountryForm };
