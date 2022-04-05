import React from 'react';
import './CountryList.css'

function CountryList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { CountryList };
