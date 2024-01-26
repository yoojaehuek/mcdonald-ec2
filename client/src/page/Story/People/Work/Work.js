import React from 'react';
import './Work.scss';
import BottomMenu from '../Component/BottomMenu';
import Buttonmain from "../../../../components/Main/Button";

const Work = () => {
  return (
    <>
    <BottomMenu/>
      <div className="work-container">
        <h1>업무소개(Restaurant Department Management)</h1>
        <h2>맥도날드에서는 각 레스토랑에서 근무하는 정규 직원을 Manager 라고 부릅니다.<br />Manager는 업무와 교육 과정 수료 여부에 따라 다양한 단계로 나누어집니다.</h2>
        <div className="table-container">
          <div className="table-row">
            <div className="table-cell">레스토랑 제너럴 매니저<br />(Restaurant General Manager)</div>
            <div className="table-cell">레스토랑에서 품질, 서비스 및 청결에 관한 스탠다드가 준수되도록 운영합니다.<br />레스토랑에서 구체적인 책임을 가진 디파트먼트 매니저 팀을 이끌고 있으며,<br />레스토랑의 중요한 여러 가지 기능과 시스템을 관리합니다.</div>
          </div>
          <div className="table-row">
            <div className="table-cell">피플 디벨롭먼트 매니저<br />(People Development Manager)</div>
            <div className="table-cell">적합한 크루를 채용, 교육 및 스케줄링 할 책임이 있습니다.<br />크루의 레스토랑 입사 시부터 잘 정착하게 하고 근무하는 동안 관리합니다.</div>
          </div>
          <div className="table-row">
            <div className="table-cell">푸드 퀄리티 매니저<br />(Food Quality Manager)</div>
            <div className="table-cell">레스토랑 내의 프로덕션 시스템을 관리합니다.<br />이 책임은 고객에게 최고 품질의 제품 제공을 위한 인벤토리와 프로덕션 시스템을 관리합니다.</div>
          </div>
          <div className="table-row">
            <div className="table-cell">고객 경험 매니저<br />(Customer Experience Manager)</div>
            <div className="table-cell">고객에게 탁월한 고객 서비스 경험을 제공할 책임이 있으며, 세일즈 촉진 활동 및 서비스 프로그램을 관리합니다.</div>
          </div>
          <div className="table-row">
            <div className="table-cell">매니저 트레이니<br />(Manager Trainee)</div>
            <div className="table-cell">공개 채용 절차를 통해 입사하는 직급으로, 체계적인 매니저 교육을 통하여 성장의 기회를 갖게 됩니다.</div>
          </div>
        </div>
        <h1>맥도날드 교육의 힘</h1>
        <div className="image-container">
          <img src="../images/Story/work.jpg" alt="맥도날드 Work" />
          <h4>햄버거 철학을 배우다.</h4>
        </div>
        <div className="work-span">
          <span>
            맥도날드 Learning & Development 센터는 각 직무와 직급에 맞는 교육을 현장 경험이
            풍부한 강사진을 토대로 실무 중심의 교육을 실현하고 있습니다.<br></br>
            교육 과정은 각 직무 및 직급에 맞도록 다양한 커리큘럼으로 구성되어 있습니다.<br></br>
            특히 개인의 성장과 팀 발전을 도울 수 있도록 글로벌과 동일한 커리큘럼을 통해 동일한
            교육 과정으로 진행되고 있습니다.
          </span>
          <span>
            맥도날드 정직원의 50% 이상이 크루(파트타이머) 출신이라는 사실만 봐도 맥도날드 교육의 힘을 느낄 수 있습니다. 맥도날드에 첫발을 디딘 여러분들은 크루 시절부터 레스토랑 매니저가 되기까지 매장 운영 방식, QSC&V의 서비스 정신, 그리고 장비 관리 기술은 물론 리더십, 경영 기획에 이르기까지 각 단계별로 다양하고 완벽한 교육을 받게 됩니다.<br></br>
            세계 어디서나 똑같은 맥도날드의 음식과 서비스를 제공할 수 있는 것, 그리고 세계 어디서나 똑같이 직원 한 사람, 한 사람에게 무한한 자기 성장의 기회를 제공할 수 있는 것,
            이것이 바로 맥도날드 교육의 힘입니다.
          </span>
        </div>
        <>
          <Buttonmain />
        </>
      </div>
    </>
  );
};

export default Work;

