/* 작성자 : 백승준
 최종수정 : 2023-12-27
 내용 : 사회적 책임과 지원 > 스케일 포 굿
*/


import styled from 'styled-components';
import Tab from '../../../../components/Tab/Tab';
import './Scaleforgood.scss'

// http://localhost:3000/story/scaleforgood

// 상단 id, image, 소제목, 내용 등록
const Scale = [
  {
    id: 1,
    img_url: '/images/Story/img_scalefogood.jpg',
    title: '스케일 포 굿 캠페인은 맥도날드가 책임 있는 글로벌 기업으로 \n전 세계적으로 발생하고 있는 사회, 환경적 문제해결에 기여하고자 시작한 글로벌 캠페인입니다.',
    desc: '맥도날드는 전 세계 120개 마켓에서 37,000여개 레스토랑을 운영하며 매일 6,900만명의 고객이 찾는 \n책임 있는 글로벌 기업입니다. 맥도날드의 작은 변화는 전 세계에 아주 큰 변화를 만들어 낼 수 있습니다.',
  },
]

const Scaleforgood = () => {
  return(
    <>
    <div className="Scalecontainer">
      <div className="Contarea">
        <div className="inner">
          {/* 페이지 대제목 */}
          <h2>‘스케일 포 굿(Scale for Good) 캠페인’은 무엇인가요?</h2>
          <div className="Scaleforgood">
          {Scale.map(View => (
            // 페이지 상단 내용 및 소제목 
            <div key={View.id} className='topcont'>            
              <img src={View.img_url} alt={`Image ${View.id}`} />
              <h3>{View.title}</h3>
              <p>{View.desc}</p>            
            </div>
          ))}         
          </div>
          <div className="globalMC">
            {/* 하단 내용이 등록되어있는 Tab 호출 components/Tab/Tab.js */}
            <Tab></Tab>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Scaleforgood;