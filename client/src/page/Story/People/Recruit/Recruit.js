import React from 'react';
import './Recruit.scss';
import BottomMenu from '../Component/BottomMenu';

const Recruit = () => {
  return (
    <>
    <BottomMenu/>
      <div className="recruit-container">
        <div className="recruit-section">
          <img src="./images/Story/recruit1.png" alt="마그도나르도" />
          <h1>변화를 만나는 곳, 변화를 만드는 곳<br/>한국맥도날드의 최신 채용정보를 확인하세요.</h1>
        </div>
        <div className="recruit-set">
          <div className="recruit-item">
            <img src="./images/Story/recruit2.jpg" alt="이미지1" />
            <p>설명1</p>
            <button>뀨</button>
          </div>
          <div className="recruit-item">
            <img src="./images/Story/recruit3.jpg" alt="이미지2" />
            <p>설명2</p>
            <button>꺄</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruit;
