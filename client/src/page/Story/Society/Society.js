/* 작성자 : 백승준
 최종수정 : 2023-12-27
 내용 : 사회적 책임과 지원 
*/


import './Society.scss'
import { NavLink } from 'react-router-dom';

// http://localhost:3000/story/society

// 각 상세페이지를 소개하는 탭에 들어갈 image, 소제목, 설명과 각 페이지로 이동하기 위한 링크 설정
const Social = [
    {id: 1,
    image: "/images/Story/Society/img_social01.jpg",
    title: '스케일 포 굿',
    desc: '스케일 포 굿 캠페인은 맥도날드가 책임있는 글로벌 기업으로\n전세계 사회, 환경문제에 기여하고자 시작한 캠페인입니다.',
    link: '/story/scaleforgood'
    },
    {id: 2,
    image: "/images/Story/Society/img_social02.jpg",
    title: '지역사회 공헌',
    desc: '맥도날드가 속한 지역사회에서 받은 사랑을 되돌려주고,\n지역사회의 발전과 행복에 기여하고자 노력하고 있습니다.',
    link: '/story/kidssoccer'
    }
]


const Society = () => {
    return(
        <>
        
        <div className="SocietyContainer">
            <div className="inner">
                {/* 대제목 */}
                <h2 className="title">McDonald's Sustainability</h2>
                {/* 내용 */}
                <div className="social">
                    {Social.map(View => (
                        <div key={View.id}>
                        <NavLink to={View.link}>
                            <img src={View.image} alt={`Image ${View.id}`} />
                            <h2>{View.title}</h2>
                            <p>{View.desc}</p>
                        </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Society;