import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const CountryContext = React.createContext();

function CountryProvider(props) {
  const {
    item: countrys,
    saveItem: saveCountrys,
    loading,
    error,
  } = useLocalStorage('COUNTRYS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedCountrys = countrys.filter(country => !!country.completed).length;
  const totalCountrys = countrys.length;

  let searchedCountrys = [];

  if (!searchValue.length >= 1) {
    searchedCountrys = countrys;
  } else {
      searchedCountrys = countrys.filter(country => {
      const countryText = country.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return countryText.includes(searchText);
    });
  }

  const addCountry = (text) => {
    const newCountrys = [...countrys];
    newCountrys.push({
      completed: false,
      text,
    });
    saveCountrys(newCountrys);
  };

  const completeCountry = (text) => {
    const countryIndex = countrys.findIndex(country => country.text === text);
    const newCountrys = [...countrys];
    newCountrys[countryIndex].completed = true;
    saveCountrys(newCountrys);
  };

  const deleteCountry = (text) => {
    const countryIndex = countrys.findIndex(country => country.text === text);
    const newCountrys = [...countrys];
    newCountrys.splice(countryIndex, 1);
    saveCountrys(newCountrys);
  };
  
  return (
    <CountryContext.Provider value={{
      loading,
      error,
      totalCountrys,
      completedCountrys,
      searchValue,
      setSearchValue,
      searchedCountrys,
      addCountry,
      completeCountry,
      deleteCountry,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryProvider };
