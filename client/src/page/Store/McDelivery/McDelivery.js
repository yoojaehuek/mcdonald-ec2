
import React from "react";
import './McDelivery.scss';
// import { NavLink } from "react-router-dom";


const temp = [
  {mcdh2:"우리집에 맥딜리버리 배달이 되나요?" }
]


const McDelivery = () => {

  return (<div class="mcdrive-main">
    <div div class="mcdrive-mcd1" >
      {
        temp.map(tmp =>
          <div id="mcdrive-text">
            <h2>{tmp.mcdh2}</h2>
          </div>
        )
      }
      <div>
        <fieldset class="mcdel-fieldset1">
          <div class="mcdel-top">
            <span >
              <input type="text" class="mcdel-input1" id="mcdel-input1" placeholder="주소를 선택해주세요."></input>
              <button type="button" class="mcdel-button1">주소찾기</button>
            </span>
          </div>
          <div class="mcdel-maininput">
            <input type="text" class="mcdel-input2" id="mcdel-input2" placeholder="상세주소를 입력하세요"></input>
            <input type="text" class="mcdel-input3" id="dong"></input>
            <span class="mcdel-span1">동</span>
            <input type="text" class="mcdel-input3" id="ho"></input>
            <span class="mcdel-span1">호</span>
          </div>
          <p class="mcdel-p">* 아파트의 경우 동, 호수를 입력하셔야 정확한 검색이 가능합니다.</p>
          <div>
            <button type="button" class="mcdel-button1">검색하기</button>
          </div>
        </fieldset>
      </div>
      <div class="mcdel-fieldset2">
        <p role="text" class="mcdel-p1" id="mcdel-p1"></p>
        <strong>검색 결과가 나타납니다.</strong>
        
      </div>
   
      
      </div>
    </div>
  );
};

export default McDelivery;