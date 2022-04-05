import React from 'react';
import { CountryContext } from '../CountryContext';
import { CountryCounter } from '../CountryCounter';
import { CountrySearch } from '../CountrySearch';
import { CountryList } from '../CountryList';
import { CountryItem } from '../CountryItem';
import { CountrysError } from '../CountrysError';
import { CountrysLoading } from '../CountrysLoading';
import { EmptyCountrys } from '../EmptyCountrys';
import { CountryForm } from '../CountryForm';
import { CreateCountryButton } from '../CreateCountryButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedCountrys,
    completeCountry,
    deleteCountry,
    openModal,
    setOpenModal,
  } = React.useContext(CountryContext);
  
  return (
    <React.Fragment>
      <CountryCounter />
      <CountrySearch />

      <CountryList>
        {error && <CountrysError />}
        {loading && <CountrysLoading />}
        {(!loading && !searchedCountrys.length) && <EmptyCountrys />}
        
        {searchedCountrys.map(Country => (
          <CountryItem
            key={Country.text}
            text={Country.text}
            completed={Country.completed}
            onComplete={() => completeCountry(Country.text)}
            onDelete={() => deleteCountry(Country.text)}
          />
        ))}
      </CountryList>

      {!!openModal && (
        <Modal>
          <CountryForm />
        </Modal>
      )}

      <CreateCountryButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
