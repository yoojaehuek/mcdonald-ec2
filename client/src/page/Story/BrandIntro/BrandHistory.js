import './BrandHistory.scss';
import BrandCont01 from '../../../components/BrandCont/BrandCont1/BrandCont1';
import BrandCont03 from '../../../components/BrandCont/BrandCont3/BrandCont3';
import BrandCont03_1 from '../../../components/BrandCont/BrandCont3/BrandCont3_1';
import BrandCont04 from '../../../components/BrandCont/BrandCont4/BrandCont4';


const tmps = [
  {prodNum: 1, top_img: "/upload/brandintro/img_brand02_01.jpg", 
  tit_h2: "맥도날드 기업철학의 뿌리,\n창업주 레이 크록(Ray Kroc)의 이야기", 
  txtInfo: "1954년, 맥도날드 형제가 만든 최고의 햄버거를 만나다\n맥도날드 역사는 1954년 레이 크록(Ray Kroc)이 캘리포니아에 있는 한 햄버거 가게를 방문하면서부터 시작되었습니다.\n밀크 쉐이크 기계 판매원으로 근무하던 크록은 맥도날드 형제가 운영하던 햄버거 가게에서 주문을 받았고 그들에게 감탄했습니다.\n메뉴는 간단하고 저렴하지만 햄버거의 품질과 맛은 최고였습니다."},
]
const tmps3 = [
  {prodNum: 1, cont_img: "/upload/brandintro/img_brand02_02.jpg", 
  main_tit: "1955년, 일리노이주에 첫 매장 오픈에서 5년 후,\n200개의 매장 오픈까지", 
  main_txt: "크록은 맥도날드 형제에게 미국 전역에 걸쳐 맥도날드 매장을 개장하는 비전을 제시하며\n프랜차이즈 사업을 제안했습니다. 1955년에 크록은 일리노이주의 데스플레인스\n(Des Plaines)에 맥도날드의 첫 정식 프랜차이즈 매장을 오픈했습니다.\n이 후 큰 성공을 거두어 불과 5년 만에 점포 수는 200개가 되었습니다.", 
  sub_tit: "맥도날드의 기업철학의 뿌리, 레이 크록", 
  sub_txt: "1984년 1월, 81세의 나이로 사망하기 직전까지 크록은 맥도날드를 위해 헌신 했습니다.\n그는 새 가맹점이 문을 열 때마다 영업 첫날의 판매 보고서를 받아 철저히 검토했으며,\n맥도날드의 당시 신임 경영진이 어떻게 회사를 이끌어 가는지 늘 관심을 갖고\n지켜보았습니다. 레이 크록의 진정한 공로는 수평적이고 모두의 성장을 꾀하는 새로운\n사업구조와 그 시스템을 창조한 것입니다. 그는 타고난 리더로서 탁월한 능력을 발휘하여,\n프랜차이즈 업체와 공급업체, 그리고 직원 모두의 성장을 꾀하는 새로운 사업 구조를\n창조했으며, 선진적인 기업 문화 정착에 기여한 것으로 평가 받고 있습니다."},
]
const tmps3_1 = [
  {prodNum: 1, cont_img: "/upload/brandintro/img_brand02_03.jpg", 
  main_tit: "‘세 다리 의자(The Three-Legged Stool)’ 철학",
  main_txt: "크록은 언제 어디에서나 변함없이 좋은 품질의 음식을 제공하고 완벽한 서비스를 \n동일하게 제공한다는 경영철학을 추구했습니다. 이를 위해 크록은 프랜차이즈 파트너와 \n공급 업체와의 수평적인 관계를 통해 동반 성장이 이루어져야 한다는 신념으로 이들에게 \n‘맥도날드를 위해 일하는 것’이 아닌, ‘맥도날드와 함께 본인들을 위해 일하는 것’이라는 \n비전을 전달했습니다. 크록은 ‘사업은 혼자 하는것이 아니라(by yourself), 본인을 위해 \n하는 것(for yourself)이다’라는 유명한 슬로건을 남긴 바 있습니다. \n크록의 신념은 프랜차이즈 파트너, 공급업체가 의자의 세 다리와 같은 역할을 해야만 \n맥도날드가 튼튼하게 바로설 수 있다는 의미의 ‘세 다리 의자(The Three-Legged Stool)’ \n철학을 바탕으로 하고 있습니다. 이것이 맥도날드가 오늘날의 프랜차이즈 표본이 되고, \n60년 가까이 전세계에서 최대 규모의 프랜차이즈 업체로 성장하게 된 비결입니다.",}
]
const tmps4 = [
  {prodNum: 1, cont_img: "/upload/brandintro/img_brand02_04.jpg", 
  main_tit: "Quality 품질",
  main_txt: "품질은 최고의 재료, 엄격한 조리 방법 그리고 안전이 검증된 준비 방법, 뛰어난 맛을 지닌 제품을 말합니다. 맥도날드의 목표는 고객에게 최적의 가격으로 뛰어난 품질의 제품을 제공하는 것입니다. 우리는 맥도날드의 엄격한 품질 기준에 따른 고품질의 음식을 제공합니다. 맥도날드는 품질을 최우선시하여 품질 관리 시스템을 구축하였습니다."},
  {prodNum: 2, cont_img: "/upload/brandintro/img_brand02_05.jpg", 
  main_tit: "Service 서비스",
  main_txt: "빠르고 친절한 서비스는 맥도날드의 성공에 기반이 되어 왔습니다. 맥도날드는 항상 고객의 입장에서 생각합니다. 주문이 들어옴과 동시에 주문한 음식을 만들기 시작해 고객들에게 더욱 신선하고 따뜻한 제품을 제공할 수 있도록 하는 주방 시스템인 ‘메이드 포 유(Made For You)’를 통해 더욱 빠르고 편리한 서비스를 제공하고 있습니다. 맥도날드의 서비스는 음식을 제공하는데 그치는 것이 아니라 고객의 행복과 즐거움이 되도록 노력하는 것입니다."},
  {prodNum: 3, cont_img: "/upload/brandintro/img_brand02_06.jpg", 
  main_tit: "Cleanliness 청결",
  main_txt: "청결은 맥도날드가 1955년 첫 시작부터 지켜온 중요한 철학입니다. 매장의 주방, 로비부터 화장실, 주차장에 이르기까지 깨끗하고 상쾌한 공간과 시설을 제공합니다. 매장에서는 매 30분마다 크루들이 손을 씻도록 하고 있으며, 시간별로 철저히 위생 상태를 체크하는 것은 물론, 조리시 장갑 등 위생 용품을 \n식재료에 따라 다르게 사용하는 등 세심한 부분까지 철저하고 체계적인 시스템을 \n갖추고 있습니다."},
  {prodNum: 4, cont_img: "/upload/brandintro/img_brand02_07.jpg", 
  main_tit: "Value 가치",
  main_txt: "맥도날드의 가치는 고품질의 음식, 친절한 직원의 응대, 깨끗한 환경 그리고 빠르고 정확한 서비스 등 고객이 맥도날드에서 접하게 되는 모든 경험을 말합니다. 맥도날드는 최상의 서비스를 제공하여 고객들이 맥도날드를 방문할 때마다 즐거운 경험을 할 수 있도록 고객의 만족이 100%가 될 때까지 지속적으로 노력합니다. 맥도날드는 음식 이상의 가치를 고객에게 전달하고자 합니다."},
]

const BrandHistory = () => {
  return (
    <div className='BrandHistory'>
      <div className="contents">
        <div className="inner">
          <ul className="inner_btn">
            <li>
              <a href="/brandintro" role="button">
                맥도날드 소개
              </a>
            </li>
            <li>
              <a href="/brandhistory" role="button" className="on">
                맥도날드 철학 및 역사
              </a>
            </li>
          </ul>
          <div className="brandCont001">
            {tmps.map(tmp=>
              <BrandCont01 key={tmp.prodNum} props={tmp}/>
            )}
          </div>
          <div className="brandCont005">
            <div className="mainCont">
              {tmps3.map(tmp3=>
                <BrandCont03 key={tmps3.prodNum} props={tmp3}/>
              )}
              {tmps3_1.map(tmp3_1=>
                <BrandCont03_1 key={tmps3_1.prodNum} props={tmp3_1}/>
              )}
            </div>
          </div>
          <div className="brandCont004">
            <div className="brandQscv">
              <h2 className="titDep2">
                <span>맥도날드의 네가지 약속</span>
                <br/>
                <span>품질, 서비스, 청결, 가치</span>
              </h2>
              <div className="philosophy">
                <blockquote>
                  만약 내가 QSCV를 언급할 때마다
                  <br/>
                  벽돌을 한 개씩 쌓아 다리를 만들었다면,
                  <br/>
                  대서양도 가로지를 수 있었을 것입니다.
                  <em>레이 크록</em>
                </blockquote>
                <p>
                레이 크록은 맥도날드가 햄버거 비즈니스를 어느 누구보다
                <br/>
                진지하게 받아들이고 있다고 항상 이야기하는 완벽주의자였습니다.
                <br/>
                그는 맥도날드를 처음 시작할 때부터 고객에게 깨끗한 레스토랑에서
                <br/>
                친절한 서비스와 함께 저렴한 가격의 품질 높은 식사를 제공할 것이라고
                <br/>
                약속하였습니다. 레이 크록은 이러한 맥도날드의 기업 정신을 QSC&V
                <br/>
                (Quality, Service, Cleanliness and Value)라고 불렀고,
                <br/>
                이는 지금까지도 맥도날드의 핵심 가치로 남아 있습니다.
                </p>
              </div>
              <p className="qscvInfo">
                <em className="color1">*QSC&V : Quality, Service, Cleanliness and Value</em>를 뜻한다.
                <br/>
                고객에게 최고 품질의 청결한 음식과 친절한 서비스를 제공하고자 하는 맥도날드의 기업 정신.
              </p>
            </div>
            <div className="sociallist">
              {tmps4.map(tmp4=>
                <BrandCont04 key={tmps4.prodNum} props={tmp4}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BrandHistory;