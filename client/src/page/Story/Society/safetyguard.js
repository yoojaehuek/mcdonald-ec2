/* 작성자 : 백승준
 최종수정 : 2023-12-27
 내용 : 사회적 책임과 지원 > 지역사회 공헌 > 맥도날드 안전지킴 캠페인
*/


import './safetyguard.scss'
import { NavLink } from 'react-router-dom';

// http://localhost:3000/story/safetyguard

// 하단 내용 id, image, 소제목, 설명 등록
const guard = [
    {
        id: 1,
        image: "/images/Story/sg2.jpg",
        title: '서울지방경찰청과 안전 지킴 캠페인 업무협약',
        desc: '맥도날드는 2016년 11월 15일 서울지방경찰청과 안전문화 확립 협약식을\n체결했습니다.\n맥도날드는 안전 지킴 캠페인 출범 이후 서울지방경찰청 및 서울 강남경찰서,\n부산 진경찰서 및 부산 산업안전공단과 함께 지역 라이더 대상 안전 교육을 실시해\n왔습니다.\n2016년 11월 15일에는 보다 전문적이고 체계적인 안전 교육을 위해\n서울지방경찰청과 안전문화 확립 협약식을 체결했습니다. 협약에 따라 맥도날드는\n맥딜리버리,맥드라이브\n플랫폼의 안전성을 널리 알리고 서울지방경찰청과 연계한 라이더 교육, 안전 문화\n확산을 위한 다양한 활동을 전개해오고 있습니다.'
    },
    {
        id: 2,
        image: "/images/Story/sg3.jpg",
        title: '안전지킴 캠페인 업무협약 체결',
        desc: '맥도날드는 2019년 6월 3일 서울특별시자원봉사센터 및 공공소통연구소 LOUD와\n함께 교통안전 문화 확산을 위한 안전지킴 캠페인 업무 협약을 체결했습니다.\n맥도날드는 이번 캠페인을 위해 3.3.3메시지(▲3초 멈춤 ▲3곳 주의 ▲시속3km),\n속도 제한 표시, 보행자 주의 표시 등의 안전지킴 픽토그램을 개발했으며 이를 전국\n맥도날드 레스토랑에 설치할 예정입니다. 또한, 서울 지역의 안전지킴 캠페인 인지도\n확산을 위해서도 서울시자원봉사센터와 협력해 갈 예정입니다.'
    }
]

const safetyguard = () => {
    return(
        <>
        <div className="sgcontainer">
            <div className="inner">
                {/* 각 상세 페이지로 이동하기 위한 버튼 */}
            <ul className="inner_btn">
                    <li>
                        <NavLink to="/story/kidssoccer" role="button">
                            로날드 맥도날드 어린이 축구교실
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/happyburger" role="button">
                            행복의 버거 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/safetyguard" role="button" className="on">
                            맥도날드 안전지킴 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/mcdonaldhouse" role="button">
                            재단법인 로날드맥도날드하우스
                        </NavLink>
                    </li>
                </ul>
                {/* 상단 큰 이미지와 내용 */}
                <div className="top">
                    <img src="/images/Story/sg1.jpg"></img>
                    <h2>
                        '맥도날드 안전 지킴 캠페인' 은 무엇인가요?
                    </h2>
                    <p className="txtinfo01">
                        맥도날드 안전 지킴 캠페인은 업계를 선도하는 안전 중시 문화를 공고히 하고
                        <br/>
                        직원들의 안전 의식을 고취하기 위해 2015년 9월 출범한 캠페인입니다.
                    </p>
                    <p className="txtinfo02">
                        맥도날드는 2016년 서울지방경찰청과 함께 라이더 교육, 교통안전 문화 확산을 위한 홍보 등 교통 안전 인식 제고를 위한 다양한 활동을 전개해오고 있습니다.
                        <br/>
                        뿐만 아니라 보행자와 운전자 모두를 고려한 안전 시설을 선제적으로 도입하고 안전한 드라이브스루 이용 문화를 위해 노력하고 있습니다.
                        <br/>
                        더불어, 2019년에는 드라이브스루를 기반으로 지역 내 차량 운전자와 보행자인 시민들이 일상에서 교통안전에 대해 인지하고
                        <br/>
                        안전한 교통 문화를 함께 만들어 나가기 위한 시민참여 활동을 펼쳤습니다.
                    </p>
                </div>
                {/* 하단 내용 불러오기 */}
                <div className="guard">
                    {guard.map(View => (
                        <div key={View.id}>                        
                            <img src={View.image} alt={`Image ${View.id}`} />
                            <h2>{View.title}</h2>
                            <p>{View.desc}</p>
                        </div>         
                        ))}               
                </div>
            </div>
        </div>
        
        </>
    )
}

export default safetyguard;