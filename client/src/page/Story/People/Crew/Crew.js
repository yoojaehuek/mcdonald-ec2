import React, { useState } from 'react';
import './Crew.scss';
import Modal from '../Component/Modal';
import Menubar from '../Component/Menubar'

const Crew = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState(null);

  const crewData = [
    {
      id: 1,
      name: '크루1',
      image: './images/Story/people.jpg',
      region: '서울',
      description: '크루1에 대한 설명입니다.',
    },
    {
      id: 2,
      name: '크루2',
      image: './images/Story/people.jpg',
      region: '부산',
      description: '크루2에 대한 설명입니다.',
    },
    {
      id: 3,
      name: '크루3',
      image: './images/Story/people.jpg',
      region: '대구',
      description: '크루3에 대한 설명입니다.',
    },
    {
      id: 4,
      name: '크루4',
      image: './images/Story/people.jpg',
      region: '인천',
      description: '크루4에 대한 설명입니다.',
    },
  ];

  const openModal = (crew) => {
    setSelectedCrew(crew);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <Menubar/>
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
        {modalOpen && selectedCrew && (
          <Modal crew={selectedCrew} closeModal={closeModal} />
        )}
      </div>
    </>
  );
};

export default Crew;
