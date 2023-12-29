import React, { useEffect, useState } from 'react';
import Slider from "../components/Main/Slider";
import Card from "../components/Card/Card";
import Buttonmain from "../components/Main/Button";
import { animateScroll as scroll } from 'react-scroll';
import "./Main.scss";
import axios from 'axios';
import { API_URL } from '../config/contansts';


const Main = () => {
  const imagesPerPage = 6; // 페이지 당 보여질 이미지 개수
  const [visibleImages, setVisibleImages] = useState(imagesPerPage);
  const [tmps,setTmps] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/api/whats-new`)
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