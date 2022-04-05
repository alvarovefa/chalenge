import React from 'react';
import { CountryProvider } from '../CountryContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <CountryProvider>
      <AppUI />
    </CountryProvider>
  );
}

export default App;
