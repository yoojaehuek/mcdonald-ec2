import './BrandIntro.scss';
import {NavLink, useParams} from 'react-router-dom';


function BrandIntro () {

  let innerContents = {}

  let {id} = useParams();
  switch(id) {
    case "1":
      innerContents={
        top_img: "/images/BrandIntro/img_brand_cont01.jpg",
        tit_h2: "세계 1위의 푸드서비스 기업, 맥도날드",
        txtInfo: "전세계 120개국 3만 7천여 개의 매장에서 매일 6,900만명의 고객들에게 제품과 서비스를 제공하고 있는 맥도날드는 전세계인들이 사랑하는\n퀵 서비스 레스토랑(QSR, Quick Service Restaurant)이자 세계 1위의 푸드서비스 기업으로, 고객에게 더 나은 경험을 제공함으로써\n'고객이 가장 좋아하는 장소이자 음식을 즐기는 최고의 방법(Our Customer’s Favorite Place and Way to Eat)'이 되기 위해 노력하고 있습니다."
      }
      break;
    case "2":
      innerContents={
        top_img: "/images/BrandIntro/img_brand02.jpg",
        tit_h2: "맥도날드 기업철학의 뿌리,\n창업주 레이 크록(Ray Kroc)의 이야기",
        txtInfo: "<b>1954년, 맥도날드 형제가 만든 최고의 햄버거를 만나다</b>\n맥도날드 역사는 1954년 레이 크록(Ray Kroc)이 캘리포니아에 있는 한 햄버거 가게를 방문하면서부터 시작되었습니다.\n밀크 쉐이크 기계 판매원으로 근무하던 크록은 맥도날드 형제가 운영하던 햄버거 가게에서 주문을 받았고 그들에게 감탄했습니다.\n메뉴는 간단하고 저렴하지만 햄버거의 품질과 맛은 최고였습니다.",
      }
      break;
  }


  return (
    <div class = "BrandIntro">
      <div class="contents">
        <div class="contents_header" style={{
          backgroundImage: `url(${'/images/BrandIntro/headerImg.jpg'})`}}>
            <h1>브랜드 소개</h1>
            <p>"1955년 작은 레스토랑에서부터 지금에 이르기까지 고객이 가장 좋아하는 장소이자,"<br/> 음식을 즐기는 최고의 방법이 되기 위해 맥도날드는 오늘도 노력합니다. </p>
            <ul class="header_btn">
              <li><a href="#">Home</a></li>
              <li><a href="#">Story</a></li>
              <li><a href="#">브랜드 소개</a></li>
            </ul>
        </div>
        <div class="contents">
          <div class="inner">
            <ul class="inner_btn">
              <li>
                <a href="" role="button" class="on">
                  <span class="hide">선택됨</span>
                  "맥도날드 소개"
                </a>
              </li>
              <li><a href="" role="button">맥도날드 철학 및 역사</a></li>
            </ul>
            <div class="brandCont01">
              <div class="cont_img">
                <img src={innerContents.top_img}/>
                <h2 class="titDep2">{innerContents.tit_h2}</h2>
                <p class="txtInfo">{innerContents.txtInfo}</p>
              </div>
            </div>
            <div class="brandCont02">
              <h3 class="titDep3">한국 맥도날드의 첫 걸음</h3>
            </div>
          </div>
          <div class="history"></div>
        </div>
      </div>



    </div>
  )
}




export default BrandIntro;