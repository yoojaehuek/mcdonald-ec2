
import React from "react";
import './McDelivery.scss';
// import { NavLink } from "react-router-dom";


const temp = [
  { mcdh2: "우리집에 맥딜리버리 배달이 되나요?", dong: "동", ho: "호", mcdelp: "* 아파트의 경우 동, 호수를 입력하셔야 정확한 검색이 가능합니다.", mcdelstrong: "검색 결과가 나타납니다." },
  { mcdelli1: "매장 별 무료 배달 주문 금액 및 소액주문비는 다르게 운영될 수 있으며, 주문 시 결제 페이지에서 미리 확인 하실 수 있습니다.", mcdelli2: "맥딜리버리 가격은 매장과 상이합니다.", mcdelli3: "배달 가능 구역 내에서도 기상조건이나 기타 매장의 사정에 따라 배달 서비스 이용이 어려울 수 있습니다.", mcdelli4: "주문이 밀리는 시간대에는 배달이 다소 지연될 수 있습니다. 고객님의 너그러운 이해 부탁 드립니다.", mcdelli5: "메뉴 주문 시 제공 되는 케찹류나 기타 물품의 경우 기본 제공 수량 기준으로 배달하여 드립니다.", mcdelli6: "맥딜리버리의 운영 시간은 매장과 상이할 수 있습니다." },
  {mcdela:"맥딜리버리 온라인",mcdelimg1:"안드로이드 맥딜리버리 앱 다운",mcdelimg2:"아이폰 맥딜리버리 앱 다운"}
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
      <div class="mcdel-main">
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
              {
                temp.map(tmp =>
            <span class="mcdel-span1">{tmp.dong}</span>
                   )
                   }
              <input type="text" class="mcdel-input3" id="ho"></input>
              {
                temp.map(tmp =>
                  <span class="mcdel-span1">{tmp.ho}</span>
                  )
                  }
            </div>
            {
              temp.map(tmp =>
          <p class="mcdel-p">{tmp.mcdelp}</p>
                )
                }
          <div>
            <button type="button" class="mcdel-button1">검색하기</button>
          </div>
        </fieldset>
      </div>
      <div class="mcdel-fieldset2">
          <p role="text" class="mcdel-p1" id="mcdel-p1"></p>
          {
            temp.map(tmp =>
              <strong>{tmp.mcdelstrong}</strong>
              )
              }
        </div>
      </div>
      {
        temp.map(tmp =>
      <div class="mcdel-middle">
      <ul>
        <li>{tmp.mcdelli1}</li>
        <li>{tmp.mcdelli2}</li>
        <li>{tmp.mcdelli3}</li>
        <li>{tmp.mcdelli4}</li>
        <li>{tmp.mcdelli5}</li>
        <li>{tmp.mcdelli6}</li>
      </ul>
      </div>
          )
            }
      <div class="mcdel-bottom">
        <div>
          {
            temp.map(tmp =>
          <a href="#" class="mcdel-a">{tmp.mcdela}</a>
          )
          }
        </div>
        <div>
          
            <a href="#">
              <img src="/image/mcdelivery/img_app_android.png" width="250px"></img>
            <br></br>
            {
              temp.map(tmp =>
                <strong>{tmp.mcdelimg1}</strong>
                )
                }
          </a>
          
          </div>
        <div>
          
            <a href="#">
              <img src="/image/mcdelivery/img_app_ios.png" width="250px"></img>
            <br></br>
            {
              temp.map(tmp =>
                <strong>{tmp.mcdelimg2}</strong>
                 )
                 }
              </a>
             
          </div>
      </div>
      </div>
    </div>
  );
};

export default McDelivery;