import './BrandHistory.scss';
import BrandCont01 from '../../../components/BrandCont/BrandCont1/BrandCont1';
// import BrandCont02 from '../../../components/BrandCont/BrandCont2/BrandCont2';


const tmps = [
  {prodNum: 1, top_img: "/upload/brandintro/img_brand02_01.jpg", tit_h2: "맥도날드 기업철학의 뿌리,\n창업주 레이 크록(Ray Kroc)의 이야기", 
  txtInfo: "1954년, 맥도날드 형제가 만든 최고의 햄버거를 만나다\n맥도날드 역사는 1954년 레이 크록(Ray Kroc)이 캘리포니아에 있는 한 햄버거 가게를 방문하면서부터 시작되었습니다.\n밀크 쉐이크 기계 판매원으로 근무하던 크록은 맥도날드 형제가 운영하던 햄버거 가게에서 주문을 받았고 그들에게 감탄했습니다.\n메뉴는 간단하고 저렴하지만 햄버거의 품질과 맛은 최고였습니다."},
]

const BrandHistory = () => {
  return (
    <div class='BrandHistory'>
      <div class="contents">
        <div class="inner">
          <ul class="inner_btn">
            <li>
              <a href="/brandintro" role="button" class="on">
                맥도날드 소개
              </a>
            </li>
            <li>
              <a href="/brandhistory" role="button">
                맥도날드 철학 및 역사
              </a>
            </li>
          </ul>
          <div class="brandCont01">
            {tmps.map(tmp=>
              <BrandCont01 key={tmp.prodNum} props={tmp}/>
            )}
          </div>
          <div class="brandCont02">
            <div class="mainCont">
              {/* {tmps2.map(tmp2=>
                <BrandCont02 key={tmps2.prodNum} props={tmp2}/>
              )} */}
            </div>
          </div>
        </div>
        <div class="history"></div>
      </div>
    </div>
  )
}


export default BrandHistory;