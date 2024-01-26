import React from 'react';
import './Menubar.scss';
import { API_URL } from '../../../../config/contansts';

const Modal = ({ crew, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img className="modal-image" src={API_URL + crew.img_url} alt={`이미지 - ${crew.name}`} />
        <div className="modal-details">
          <h2>{crew.title}</h2>
          <p>{crew.description}</p>
          <hr />
          <p>{crew.name} {crew.position}</p>
        </div>
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
