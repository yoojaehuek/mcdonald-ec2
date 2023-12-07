import Tab from '../../../../components/Tab/Tab';


const Scale = [
  {
    id: 1,
    image: "../../../../public/images/Story/Society/img_scaleforgood.jpg",
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
          <div className="Scaleforgood">
          {Scale.map(View => (
            <div key={View.id}>            
              <img src={View.image} alt={`Image ${View.id}`} />
              <h2>{View.title}</h2>
              <p>{View.desc}</p>            
            </div>
          ))}
          </div>
          <div className="globalMC">
            <Tab></Tab>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Scaleforgood;