import React from 'react';
import './CreateCountryButton.css';

function CreateCountryButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateCountryButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateCountryButton };
