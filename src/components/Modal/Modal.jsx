import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css'; // Ensure this file exists

export const Modal = ({ children, toggleModal }) => {
  return (
    <div className={s.overlay} onClick={toggleModal}>
      <div className={s.modal}>
        {children}
        <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
