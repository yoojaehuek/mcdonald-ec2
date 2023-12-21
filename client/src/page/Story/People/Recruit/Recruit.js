import React from 'react';
import './Recruit.scss';
import BottomMenu from '../Component/BottomMenu';
import Buttonmain from "../../../../components/Main/Button";

const Recruit = () => {
  return (
    <>
    <BottomMenu/>
      <div className="recruit-container">
        <div className="recruit-section">
          <h1>변화를 만나는 곳, 변화를 만드는 곳<br/>한국맥도날드의 최신 채용정보를 확인하세요.</h1>
        </div>
        <div className="recruit-set">
          <div className="recruit-item">
            <img src="../images/Story/recruit2.jpg" alt="이미지1" />
            <p> 맥도날드의 시간제(Part Time) 근무자를 우리는 크루(Crew) 라고 부릅니다.<br></br>
                즐거운 일터에서 함께 일하며 경험을 쌓고, 다양한 혜택과 매니저로 성장할 수 있는
                최고의 기회를 누려보세요!
            </p>
            <button>크루 지원하기</button>
          </div>
          <div className="recruit-item">
            <img src="../images/Story/recruit3.jpg" alt="이미지2" />
            <p> 사회인으로 첫 발을 내딛는 지금, 당신은 중요한 선택의 순간에 서 있습니다.<br></br>
                당신의 첫번째 선택이 맥도날드가 되기를 희망합니다. 늘 현명한 선택으로 성공을 창조해 온 맥도날드, 이곳에서 당신의 소중한 꿈을 펼쳐보세요 !</p>
            <button>레스토랑 매니저/본사 직원 지원하기</button>
          </div>
        </div>
      </div>
      <>
        <Buttonmain />
      </>
    </>
  );
};

export default Recruit;
