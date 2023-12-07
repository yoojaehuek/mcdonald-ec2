import './Society.scss'
import VisualBackGround from '../../../components/VisualBackGround/VisualBackGround';


const Social = [
    {id: 1,
    image: "/images/Story/Society/img_social01.jpg",
    title: '스케일 포 굿',
    desc: '스케일 포 굿 캠페인은 맥도날드가 책임있는 글로벌 기업으로 \n전세계 사회, 환경문제에 기여하고자 시작한 캠페인입니다.'
    },
    {id: 2,
    image: "/images/Story/Society/img_social02.jpg",
    title: '지역사회 공헌',
    desc: '맥도날드가 속한 지역사회에서 받은 사랑을 되돌려주고, \n지역사회의 발전과 행복에 기여하고자 노력하고 있습니다.'
    }
    
]


const Society = () => {
    return(
        <>
        <VisualBackGround props={{title: "사회적 책임과 지원", bgImg: "/image/visualBackGround/bg_visual_story02.jpg", path: [{url: "/", name: "HOME"}, {url: "/Story", name: "Story"}, {url: "/Society", name: "맥도날드 사회적 책임"}]}}></VisualBackGround>
        <div className="SocietyContainer">
            <div className="inner">
                <h2 className="title">McDonald's Sustainability</h2>
                <div className="social">
                    {Social.map(View => (
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

export default Society;