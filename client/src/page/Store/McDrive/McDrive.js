import React from "react";
import './McDrive.scss';
import YouTube from "react-youtube";

const temp = [
  {mcdh2:"맥드라이브는 어떻게 이용하나요?", mcdp:"운전 중에도 24시간 간편하고 빠르게!\n차 안에서 주문하고, 차 안에서 바로 받아 맛있는 맥도날드를 즐겨보세요." , mcda:"맥드라이브 매장 검색하기"}
]


const McDrive = () => {

  return (<div class="mcdrive-main">
    <div div class="mcdrive-mcd1" >
      {
        temp.map(tmp =>
          <div id="mcdrive-text">
            <h2>{tmp.mcdh2}</h2>
            <p>{tmp.mcdp}</p>
          </div>
        )
      }
    <YouTube
  videoId = "BiMkqfVNmnk" //동영상 주소
  opts={{
  width: "1156px",
  height: "650px",
  playerVars: {
  //  autoplay: 1, //자동 재생 여부 
   modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
   loop: 1, //반복 재생
   playlist: "BiMkqfVNmnk", //반복 재생으로 재생할 플레이 리스트
  },
 }}
  onReady={(e) => {
  e.target.mute(); //소리 끔
        }} />
      {
        temp.map(tmp =>
            <a href="#" class="mcdrive-a">{tmp.mcda}</a>
        )
      }
      </div>
    </div>
  );
};

export default McDrive;