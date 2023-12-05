import React from 'react';
import './Menubar.scss';

const Modal = ({ crew, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img className="modal-image" src={crew.image} alt={`이미지 - ${crew.name}`} />
        <div className="modal-details">
          <h2>{crew.name}</h2>
          <p>{crew.description}</p>
          <hr />
          <p>{crew.region}</p>
        </div>
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
