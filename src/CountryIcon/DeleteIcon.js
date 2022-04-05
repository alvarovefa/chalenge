import React from 'react';
import { CountryIcon } from '.';

function DeleteIcon({ onDelete }) {
  return (
    <CountryIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
