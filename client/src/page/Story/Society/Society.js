import VisualBackGround from '../../../components/VisualBackGround/VisualBackGround';
import './Society.scss'
import { NavLink } from 'react-router-dom';


const Social = [
    {id: 1,
    image: "/images/Story/Society/img_social01.jpg",
    title: '스케일 포 굿',
    desc: '스케일 포 굿 캠페인은 맥도날드가 책임있는 글로벌 기업으로\n전세계 사회, 환경문제에 기여하고자 시작한 캠페인입니다.',
    link: '/Scaleforgood'
    },
    {id: 2,
    image: "/images/Story/Society/img_social02.jpg",
    title: '지역사회 공헌',
    desc: '맥도날드가 속한 지역사회에서 받은 사랑을 되돌려주고,\n지역사회의 발전과 행복에 기여하고자 노력하고 있습니다.',
    link: '/Kidssoccer'
    }
    
]


const Society = () => {
    return(
        <>
        
        <div className="SocietyContainer">
            <div className="inner">
                <h2 className="title">McDonald's Sustainability</h2>
                <div className="social">
                    {Social.map(View => (
                        <div key={View.id}>
                        <NavLink to={View.link} target="_blank" rel="noopener noreferrer">
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