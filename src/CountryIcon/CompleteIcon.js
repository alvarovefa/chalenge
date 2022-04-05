import React from 'react';
import { CountryIcon } from '.';

function CompleteIcon({ completed, onComplete }) {
  return (
    <CountryIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
