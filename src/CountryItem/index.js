import React from 'react';
import { CompleteIcon } from '../CountryIcon/CompleteIcon';
import { DeleteIcon } from '../CountryIcon/DeleteIcon';
import './CountryItem.css';

function CountryItem(props) {
  return (
    <li className="CountryItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`CountryItem-p ${props.completed && 'CountryItem-p--complete'}`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { CountryItem };
