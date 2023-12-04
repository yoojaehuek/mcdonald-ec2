import './HappyMeal.scss'
// import styled from 'styled-components'
import VisualBackGround from '../../../components/VisualBackGround/VisualBackGround';
import Card from '../../../components/Card/Card';

const tmps = [
  {prodNum: 1, prodImg: "/upload/promotion/1700550501889.jpg", prodContent: "신선한 토마토와 매콤한 소스의 만남!"},
  {prodNum: 2, prodImg: "/upload/promotion/1701069859118.jpg", prodContent: "미트칠리 버거와 연말을 더 특별하게"},
  {prodNum: 3, prodImg: "/upload/promotion/1696925069360.jpg", prodContent: "갓성비 간식 맛집, 맥도날드 해피 스낵!"},
  {prodNum: 4, prodImg: "/upload/promotion/1696768788564.jpg", prodContent: "맥도날드 M오더"},
  {prodNum: 5, prodImg: "/upload/promotion/1680500594149.jpg", prodContent: "상콤달콤!\n NEW 자두 천도복숭아 칠러 출시!"},
  {prodNum: 6, prodImg: "/upload/promotion/1679374416689.jpg", prodContent: "첫 적립 시 2000 포인트 제공!\n 새로워진 마이 맥도날드 리워드!"},
]

const HappyMeal = () => {
  return(
    <>
      <VisualBackGround props={{title: "맥도날드 프로모션", bgImg: "/image/visualBackGround/bg_visual_whats02.jpg", path: [{url: "/", name: "HOME"}, {url: "/promotion", name: "What's New"}, {url: "/promotion", name: "맥도날드 프로모션"}]}}></VisualBackGround>
      <div className="contArea">
        <div className="inner">
          <div id='cardList'>
            {tmps.map(tmp=> 
              <Card key={tmp.prodNum} props={tmp} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HappyMeal; 