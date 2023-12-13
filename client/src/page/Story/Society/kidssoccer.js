import './kidssoccer.scss'
import { NavLink } from 'react-router-dom';

const soccer = [
    {
        id: 1,
        image: "./images/Story/Society/img_sc2.jpg",
        title: '아빠와 함께하는 축구교실',
        desc: '아빠와 함께 하는 축구교실은 맥도날드의 대표 사회공헌 활동인 로날드 맥도날드\n어린이 축구교실의 일환으로, 여가시간을 좀 더 자녀들과 보내고자 하는 아빠들이\n체계적이고 효과적인 축구 수업을 받고, 추후 직접 아이들의 선생님 역할을 하도록\n돕고 있습니다. FC서울의 유소년 코치가 직접 지도하는 전문적인 커리큘럼과 아빠와\n자녀가 함께 운동을 즐기며 추억을 쌓을 수 있는 프로그램 구성으로 매년 가족 단위,\n참가자들로부터 높은 호응을 얻고 있습니다.'
    },
    {
        id: 2,
        image: "/images/Story/Society/img_sc3.jpg",
        title: '학교방문 축구교실',
        desc: '맥도날드의 찾아가는 학교방문 축구교실은 현재 부산 지역에서 부산아이파크\n축구단과의 혐약을 통해 부산 지역 어린이들을 대상으로 진행하는 무료 축구교실\n프로그램입니다. 대한축구협회 라이선스를 가진 부산아이파크 유소년 코치들이\n부산지역 내 초등학교를 방문하여 체계적이고 전문적인 축구 기본기 교육을 가르치고\n있으며, 2019년 축구교실 참여 어린이에게는 수료증과 함께 부산아이파크 홈 경기 1회\n무료 관람권 및 동반 부모님 대상 티켓 50% 할인 혜택이 주어집니다.'
    },
    {
        id: 3,
        image: "/images/Story/Society/img_sc4.jpg",
        title: '다문화 가정 어린이 축구교실',
        desc: '맥도날드는 다문화가정 어린이들의 건강한 성장 발달과 사회통합을 위해 서울지역\n다문화가정지원센터 및 FC 서울과 함께 다문화가정 어린이 축구교실을 운영하고\n있습니다. 다문화 가정 어린이들과 일반 가정 어린이들이 한데 어우러져 프로그램에\n참여함으로써 다문화 가정 어린이들의 체력과 사회성을 기르는데 도움을 주고\n있습니다.'
    },
    {
        id: 4,
        image: "/images/Story/Society/img_sc5.jpg",
        title: '특수학교 축구교실',
        desc: '맥도날드는 지난 2016년부터 평소 체육 활동이 어려운 특수학교 학생들을 대상으로\n3년째 축구교실 프로그램을 진행하고 있습니다. 2018년 12월에는 부산맹학교를\n찾아가 전문 코치들과 함께 시각 장애 학생들을 위한 춤형 축구교육을 제공하고 행복의\n버거 100세트를 전달하기도 했습니다. 2019년부터는 특수학교 대상 축구교실을 연\n2회로 확대함으로써 스포츠 사각지대에 놓인 학생들에게 운동의 즐거움을 알려주고\n소중한 추억을 선사하고자 합니다.'
    }
]

const Kidssoccer = () => {
    return(
        <>
        <div className="sccontainer">
            <div className="inner">
                <ul className="inner_btn">
                    <li>
                        <NavLink to="/kidssoccer" role="button" className="on">
                            로날드 맥도날드 어린이 축구교실
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/happyburger" role="button">
                            행복의 버거 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/safetyguard" role="button">
                            맥도날드 안전지킴 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mcdonaldhouse" role="button">
                            재단법인 로날드맥도날드하우스
                        </NavLink>
                    </li>
                </ul>
                <div className="top">
                    <img src="/"></img>
                    <h2>
                        '로날드 맥도날드
                        <br/>
                        어린이 축구교실'은 무엇인가요?
                    </h2>
                    <p className="txtinfo01">
                        로날드 맥도날드 어린이 축구교실은 축구를 통해 우리 어린이들에게 마음껏 뛰어 놀며<br/>
                        성장할 수 있는 환경을 만들어 주고자 시작한 캠페인입니다.
                    </p>
                    <p className="txtinfo02">
                        2006년 처음 시작된 축구교실은 참가한 어린이와 가족들의 뜨거운 반응을 얻고 있습니다.
                        <br/>
                        로날드 맥도날드 어린이 축구교실의 참가비는 무료이며, 참가 어린이 모두에게 유니폼이 제공됨은 물론, 영양교육 비디오와 수료증 등이 제공됩니다.
                    </p>
                </div>
                <div className="soccer">
                    {soccer.map(View => (
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

export default Kidssoccer;