import React, { useState, useEffect } from 'react';
import './Crew.scss';
import Modal from '../Component/Modal';
import axios from 'axios';
import { API_URL } from '../../../../config/contansts';
import BottomMenu from '../Component/BottomMenu';
import Buttonmain from "../../../../components/Main/Button";

const Crew = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [crewData, setCrewData] = useState([]);

  //try catch > promise가 아닌 것 에러처리용
  //그렇기 때문에(막기 위해) async await.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/crew`);
        setCrewData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const openModal = (crew) => {
    setSelectedCrew(crew);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <BottomMenu />
      <div className="crew-container">
        <h1>크루들이 만들어가는 맥도날드의 변화 이야기</h1>
        <div className="crew-list">
          {crewData.map((crew) => (
            <div key={crew.id} className="crew-item" onClick={() => openModal(crew)}>
              <img className="crew-image" src={crew.image} alt={`이미지 - ${crew.name}`} />
              <div className="crew-details">
                <h2>{crew.name}</h2>
                <p>{crew.region}</p>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && selectedCrew && <Modal crew={selectedCrew} closeModal={closeModal} />}
      </div>
      <>
        <Buttonmain />
      </>
    </>
  );
};

export default Crew;
