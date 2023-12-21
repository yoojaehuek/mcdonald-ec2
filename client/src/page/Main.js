import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import Slider from "../components/Main/Slider";
import Card from "../components/Card/Card";
import Buttonmain from "../components/Main/Button";
import { animateScroll as scroll } from 'react-scroll';
import "./Main.scss";
import axios from 'axios';
import { API_URL } from '../config/contansts';

// const tmps = [
//   {table: "promotion", prodNum: 1, prodImg: "/upload/whatsNew/promotion/1700550501889.jpg", prodContent: "신선한 토마토와 매콤한 소스의 만남!"},
//   {table: "promotion", prodNum: 2, prodImg: "/upload/whatsNew/promotion/1701069859118.jpg", prodContent: "미트칠리 버거와 연말을 더 특별하게"},
//   {table: "promotion", prodNum: 3, prodImg: "/upload/whatsNew/promotion/1696925069360.jpg", prodContent: "갓성비 간식 맛집, 맥도날드 해피 스낵!"},
//   {table: "promotion", prodNum: 4, prodImg: "/upload/whatsNew/promotion/1696768788564.jpg", prodContent: "맥도날드 M오더"},
//   {table: "promotion", prodNum: 5, prodImg: "/upload/whatsNew/promotion/1680500594149.jpg", prodContent: "상콤달콤!\n NEW 자두 천도복숭아 칠러 출시!"},
//   {table: "promotion", prodNum: 6, prodImg: "/upload/whatsNew/promotion/1679374416689.jpg", prodContent: "첫 적립 시 2000 포인트 제공!\n 새로워진 마이 맥도날드 리워드!"},
//   {table: "promotion", prodNum: 7, prodImg: "/upload/whatsNew/main/1.jpg", prodContent: "빠삭하게 빠져드는 맛!, \n 맥 크리스피!"},
//   {table: "promotion", prodNum: 8, prodImg: "/upload/whatsNew/main/2.jpg", prodContent: "갓 구워내 따뜻하고 신선한 \n 베이컨 토마토 에그머핀!"},
//   {table: "promotion", prodNum: 9, prodImg: "/upload/whatsNew/main/3.jpg", prodContent: "맥도날드와 함께 성장할 \n 크루와 매니저를 찾습니다"},
//   {table: "promotion", prodNum: 10, prodImg: "/upload/whatsNew/main/4.jpg", prodContent: "우리가 엄격해질수록 \n 버거는 더 맛있어지니까!"},
//   {table: "promotion", prodNum: 11,prodImg:"/upload/whatsNew/main/5.jpg", prodContent: "0.1초에 1잔!\n 매일 마시는 커피를 더 맛있게"},
//   {table: "promotion", prodNum: 12,prodImg:"/upload/whatsNew/main/6.jpg", prodContent: "전문 코치들의 체계적이고 전문적인\n 교육을 통해 지역사회 행복에 기여합니다"},
//   {table: "promotion", prodNum: 13,prodImg:"/upload/whatsNew/main/7.png", prodContent: "귀하의 토지,건물에 맥도날드를 유치\n 하세요!"},

// ]

const Main = () => {
  const imagesPerPage = 6; // 페이지 당 보여질 이미지 개수
  const [visibleImages, setVisibleImages] = useState(imagesPerPage);
  const [tmps,setTmps] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/whats-new`)
    .then(res=>{
      console.log("whats-new: ",res.data);
      setTmps(res.data); 
    }).catch(err=>{
      console.error(err);
    })
  },[])

  const handleShowMore = () => {
    // + 버튼을 누를 때마다 페이지 당 보여질 이미지 개수를 늘립니다.
    setVisibleImages((prev) => prev + imagesPerPage);
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop(); // react-scroll의 함수를 사용해 맨 위로 스크롤
  };

  return (
    <div id='container'>
      <div className='content'>
        <div className='main-event'>
          <Slider />
        </div>
        <div className='mcmain'>
          <div className='mcinner'>
            <h2 className='titmaain'>McDonald's LIVE</h2>
            <ul className='whatsnew'>
              <li>
                {tmps.slice(0, visibleImages).map((tmp) => (
                  <Card key={tmp.prodNum} props={tmp} />
                ))}
              </li>
            </ul>
            {visibleImages < tmps.length && (
              <button className="show-more-button" onClick={handleShowMore}>
                <span>+</span>
              </button>
            )}
            <>
              <Buttonmain />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;