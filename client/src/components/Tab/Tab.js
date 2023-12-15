import { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config/contansts';
import './Tab.scss';

const TabMenu = styled.ul`
  color: #808080;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;
  font-size: 20px;
  height: 40px;
  text-align: center;
  width: 100%;
  
  .submenu{
    display: block;
    jsutify-content: space-between;
    height: 30px;
    width: calc(100% /5);
    padding: 10px;
    transition: 0.5s;

  }
  .focused{
    color: #db0007;
    font-size: 20px;
    font-weight: 600;
    // border-bottom: 1px solid #db0007;
  }
  & div.desc{
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr= [
    { name: '온실가스 감축', content: [{img_url: '/upload/product/Ellipse70.png', img_desc: '전국 레스토랑에\n친환경 고효율 LED 조명 설치'},{img_url: '/upload/product/Ellipse70.png', img_desc: '태양광 발전 레스토랑 시범 운영\n(부산 및 제주 지역 5개 레스토랑)'},{img_url: '/upload/product/Ellipse70.png', img_desc: '맥딜리버리에 친혼경 전기바이크 사용\n(일부 지역 운영 중)'}, {img_url: '/upload/product/Ellipse70.png', img_desc: '폐식용유를 친환경\n바이오디젤 원료로 재활용'}], content_desc: '전 세계 레스토랑 및 사무실, 원재료 공급 및 유통 과정에서 발생하는 온실가스 배출량을 줄이겠습니다.'},
    { name: '지속가능한 공급', content: [{img_url: '/upload/product/Ellipse70.png', img_desc: '세계보건기구(WHO)가 규정한\n유해 항생제를 사용하지 않은\n건강한 닭고기만을 사용'},{img_url: '/upload/product/Ellipse70.png', img_desc: '맥카페 커피 원두는\n열대우림동맹 인증 받은\n친환경 원두로 100% 교체'},{img_url: '/upload/product/Ellipse70.png', img_desc: '2025년까지 공급 받는 계란을\n동물복지란으로 교체 예정'}], content_desc: '농장에서 레스토랑에 이르기까지 지속 가능한 원재료 도입을 위해 힘쓰겠습니다.'},
    { name: '친환경 포장재 사용 및 재사용', content: [{img_url: '/upload/product/Ellipse70.png', img_desc: '국내 외식업계 최초 산림관리협의회 인증\n친환경 포장재 사용(2019년 상반기부터)'},{img_url: '/upload/product/Ellipse70.png', img_desc: '레스토랑에서 제공하는 종이봉투에\n친환경 재생용지 사용'},{img_url: '/upload/product/Ellipse70.png', img_desc: '레스토랑 내 다회용 컵 사용하여\n1회 용품 감소 노력'}], content_desc: '친환경 포장재를 사용하고 더 많이 재활용해 지구를 살기 좋은 곳으로 만들겠습니다.'},
    { name: '가족 고객을 위한 약속', content: [{img_url: '/upload/product/Ellipse70.png', img_desc: '해피밀 등 가족 고객을 위한\n메뉴에 보다 건강한 옵션 제공\n(2019년 하반기부터)'},{img_url: '/upload/product/Ellipse70.png', img_desc: '해피밀에 책을 제공하는\n해피밀 리더스 프로그램 도입\n(2019년 하반기부터)'},{img_url: '/upload/product/Ellipse70.png', img_desc: '부산대학교 어린이 병원에 중증 어린이 환자와\n가족들이 병원 근처에 머물며 치료를 받을 수 있는\n로널드 맥도날드 하우스 건립 후원\n(2018년 하반기 완공 예정)'}], content_desc: '어린이를 동반한 가족 고객에게 더욱 건강한 메뉴 옵션과 즐거운 경험을 제공하겠습니다.'},
    { name: '사람에 대한 투자', content: [{img_url: '/upload/product/Ellipse70.png', img_desc: '단독기업형 프로그램\n세계 퀵서비스레스토랑 업계 리더로써\n쌓아온 노하우를 활용해 직원들이\n외식산업 전문가로 성장할 수 있도록\n본사교육 및 현장 훈련 진행'},{img_url: '/upload/product/Ellipse70.png', img_desc: '고용노동부와 함께 일학습병행제\n시행하여 직원들이 일과 학업을 병행하며 전문가로 성장할 수 있도록 지원'},{img_url: '/upload/product/Ellipse70.png', img_desc: '대학연계형 프로그램\n일을 하면서 학업을 지속하고자 하는\n직원들에게 대학교육 및 학사학위\n취득기회 제공'}], content_desc: '매년 100만명 이상의 직원들이 맥도날드에서 일하며 업무 역량을 키우는 동시에 학업을 병행하고 있습니다.'},
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return(
    <>
    <div className="tabcontainer">
      <h2>글로벌 맥도날드 과제</h2>
      <div className="Tabinput">
        <TabMenu>
          {menuArr.map((el, index) => (
            <li key={index} className={index === currentTab ? "submenu focused" : "submenu" }
            onClick={() => selectMenuHandler(index)}>{el.name}</li>
          ))}
        </TabMenu>          
        <Desc>          
        {menuArr[currentTab].content.map((item, index) => (
              <li key={index} className='maincont'>
                <img src={API_URL+item.img_url}></img>
                <p>{item.img_desc}</p>
              </li>
          ))}
          <li>            
            <span>{menuArr[currentTab].content_desc}</span>
          </li>          
        </Desc>
      </div>
    </div>
    </>
  )
}

export default Tab;