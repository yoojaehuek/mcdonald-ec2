import './happyburger.scss'
import { NavLink } from 'react-router-dom';

// http://localhost:3000/story/happyburger

// 하단 내용 id, image, 소제목, 설명 등록
const burger = [
    {
        id: 1,
        image: "/images/Story/hb2.jpg",
        title: '강원 산불 피해 이재민 및 소방관 물품 지원',
        desc: '2019년 4월, 강원지역에서 일어난 산불로 피해를 입은 이재민과 피해 복구에 나선\n강원지역 4개 소방서 소방관들에게 버거 및 음료 2,000세트를 제공했습니다.\n뿐만 아니라, 맥도날드는 2018년 5월 소방청과 행복의 버거 캠페인 협약을 체결하며\n5,000세트에 달하는 행복의 버거를 순직 소방관의 유가족 및 공상 소방관과 그\n가족들에게 무상으로 제공해오고 있습니다.'
    },
    {
        id: 2,
        image: "/images/Story/hb3.jpg",
        title: '부산 영진종합사회복지관에 행복의 버거 증정',
        desc: '맥도날드는 5월 8일 어버이날을 맞아 영진종합사회복지관에 어르신들을 위한\n행복의 버거 200세트를 제공했습니다. 맥도날드는 지난 8년간 지역 내 봉사활동에\n앞장서온 부산 지역 직원들의 선행에 동참하는 의미로 이날 행사를 준비했습니다.'
    },
    {
        id: 3,
        image: "/images/Story/hb4.jpg",
        title: '논산 육군훈련소에 행복의 버거 세트 제공',
        desc: '맥도날드는 2018년 12월 28일 한판 속에서 국방의 의무를 다하는 육군 훈련병들에게\n빅맥 1,000개와 애플파이 12,000개를 무상 제공했습니다. 이처럼 맥도날드는 지난 7년간\n지역아동센터 어린이, 어린이 병원 환우, 장애 학생과 학부모, 환경 미화원, 육군 훈련생,\n순직 소방관 유가족 등 다양한 이웃들을 위해 20만개가 넘는 햄버거를 전달하며 나눔의\n의미를 실천하고 있습니다.'
    }
]

const happyburger = () => {
    return(
        <>
        <div className="hbcontainer">
            <div className="inner">
                {/* 각 상세 페이지로 이동하기 위한 버튼 */}
            <ul className="inner_btn">
                    <li>
                        <NavLink to="/story/kidssoccer" role="button">
                            로날드 맥도날드 어린이 축구교실
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/happyburger" role="button" className="on">
                            행복의 버거 캠페인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/story/safetyguard" role="button">
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
                    <img src="/images/Story/hb1.jpg"></img>
                    <h2>
                        '행복의 버거' 캠페인은 무엇인가요?
                    </h2>
                    <p>
                        '행복의 버거'는 나눔과 사랑의 손길이 필요한
                        <br/>
                        우리 주변 이웃들에게 햄버거를 전달하는 캠페인입니다.
                    </p>
                </div>
                {/* 하단 내용 불러오기 */}
                <div className="burger">
                    {burger.map(View => (
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

export default happyburger;