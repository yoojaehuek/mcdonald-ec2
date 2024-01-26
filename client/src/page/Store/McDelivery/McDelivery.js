/*
박승균
McDelivery.js html 틀제작, McDelivery.css 제작


*/
import React, { useState } from "react";
/** 우편번호 창   */
import PopupDom from '../../../components/AddressPopup/PopupDom';
import PopupPostCode from '../../../components/AddressPopup/PopupPostCode';
/** 우편번호 창  */
import './McDelivery.scss';
import axios from "axios";
import { API_URL } from "../../../config/contansts";



const temp = [
  { mcdh2: "우리집에 맥딜리버리 배달이 되나요?", dong: "동", ho: "호", mcdelp: "* 아파트의 경우 동, 호수를 입력하셔야 정확한 검색이 가능합니다.", mcdelstrong: "검색 결과가 나타납니다." },
  { mcdelli1: "매장 별 무료 배달 주문 금액 및 소액주문비는 다르게 운영될 수 있으며, 주문 시 결제 페이지에서 미리 확인 하실 수 있습니다.", mcdelli2: "맥딜리버리 가격은 매장과 상이합니다.", mcdelli3: "배달 가능 구역 내에서도 기상조건이나 기타 매장의 사정에 따라 배달 서비스 이용이 어려울 수 있습니다.", mcdelli4: "주문이 밀리는 시간대에는 배달이 다소 지연될 수 있습니다. 고객님의 너그러운 이해 부탁 드립니다.", mcdelli5: "메뉴 주문 시 제공 되는 케찹류나 기타 물품의 경우 기본 제공 수량 기준으로 배달하여 드립니다.", mcdelli6: "맥딜리버리의 운영 시간은 매장과 상이할 수 있습니다." },
  {mcdela:"맥딜리버리 온라인 주문하기",mcdelimg1:"안드로이드 맥딜리버리 앱 다운",mcdelimg2:"아이폰 맥딜리버리 앱 다운"}
]


const McDelivery = () => {
  const [mcDelivery_yn, setMcDelivery_yn] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);// 우편번호
  
  /** 우편번호 창  */
	// 팝업창 상태 관리
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	// 팝업창 열기
	const openPostCode = () => { setIsPopupOpen(true) }
	// 팝업창 닫기
	const closePostCode = () => {	setIsPopupOpen(false)	}
	// 선택된 주소를 업데이트하는 콜백 함수
	const handleSelectedAddress = (address) => { setSelectedAddress(address); };
	/** 우편검색 결과가 인풋창에 업데이트 되지않아서 이함수로 업데이트 시켜줌 */
	const handleAddressChange = (e) => { setSelectedAddress(e.target.value); };
	/** 우편번호 창  */

  const handleSearch = () => {
    if(selectedAddress == null){
      alert('주소를 입력해 주세요');
      return;
    };

    axios.get(`${API_URL}/api/store/mcdelivery?address=${selectedAddress}`)
    .then(res => {
      console.log(res.data);
      setMcDelivery_yn(res.data)
    }).catch(err => {
      console.error(err);
    })
  }

  const McDelivery_yn = () => {
    let content = (
      <div className="mcdel-fieldset2">
        <p role="text" className="mcdel-p1" id="mcdel-p1"></p>
        {temp.map(tmp =>
          <strong>{tmp.mcdelstrong}</strong>
        )}
      </div>
    ); 

      if (mcDelivery_yn == true) {
      content = (
        <div className="mcdel-fieldset3 ">
          <p role="text" className="resultok" id="ok">
            <p className="mcdel-p2"></p>
            <strong>맥딜리버리<br/>배달이<br/>가능합니다</strong>
            <br></br>
            <span>전화 또는 온라인으로<br/>주문할 수 있습니다.</span>
          </p>
        </div>
      );
        } else if (mcDelivery_yn == false) {
      content = (
        <div className="mcdel-fieldset4 ">
          <p role="text" className="resultfail" id="fail">
            <p className="mcdel-p3"></p>
            <strong>맥딜리버리<br />배달이<br />불가능합니다</strong>
            <br></br>
            <span>빠른 시일 내에 고객님이 계신 곳에<br/>서비스가 가능하도록 노력하겠습니다.</span>
          </p>
        </div>
      );
    }
    return(
      <>
        {content}
      </>
    )
  }

  return (
  
    <div className="mcdrive-main">
      <div div className="mcdrive-mcd1" >
        {temp.map(tmp =>
          <div id="mcdrive-text">
            <h2>{tmp.mcdh2}</h2>
          </div>
        )}
        <div className="mcdel-main">
          <div>
            <fieldset className="mcdel-fieldset1">
              <div className="mcdel-top">
                <span >
                  <input type="text" className="mcdel-input1" id="mcdel-input1" placeholder="주소를 선택해주세요." value={selectedAddress}></input>
                  <button type="button" className="mcdel-button1" onClick={openPostCode}>주소찾기</button>
                </span>
              </div>
              <div className="mcdel-maininput">
                <input type="text" className="mcdel-input2" id="mcdel-input2" placeholder="상세주소를 입력하세요"></input>
                  <input type="text" className="mcdel-input3" id="dong"></input>
                  {temp.map(tmp =>
                    <span className="mcdel-span1">{tmp.dong}</span>
                  )}
                  <input type="text" className="mcdel-input3" id="ho"></input>
                  {temp.map(tmp =>
                    <span className="mcdel-span1">{tmp.ho}</span>
                  )}
              </div>
              {temp.map(tmp =>
                <p className="mcdel-p">{tmp.mcdelp}</p>
              )}
              <div>
                <button type="button" className="mcdel-button1" onClick={handleSearch}>검색하기</button>
              </div>
            </fieldset>
          </div>
          {/* <div className="mcdel-fieldset2">
            <p role="text" className="mcdel-p1" id="mcdel-p1"></p>
            {temp.map(tmp =>
              <strong>{tmp.mcdelstrong}</strong>
            )}
          </div> */}
          <McDelivery_yn />
        </div>
        {temp.map(tmp =>
          <div className="mcdel-middle">
            <ul>
              <li>{tmp.mcdelli1}</li>
              <li>{tmp.mcdelli2}</li>
              <li>{tmp.mcdelli3}</li>
              <li>{tmp.mcdelli4}</li>
              <li>{tmp.mcdelli5}</li>
              <li>{tmp.mcdelli6}</li>
            </ul>
          </div>
        )}
        <div className="mcdel-bottom">
          <div>
            {temp.map(tmp =>
              <a href="#" className="mcdel-a">{tmp.mcdela}</a>
            )}
          </div>
          <div>
            <a href="#">
              <img src="../images/mcdelivery/img_app_android.png"></img>
              <br></br>
              {temp.map(tmp =>
                <strong>{tmp.mcdelimg1}</strong>
              )}
            </a>   
          </div>
          <div>
            <a href="#">
              <img src="../images/mcdelivery/img_app_ios.png"></img>
              <br></br>
              {temp.map(tmp =>
                <strong>{tmp.mcdelimg2}</strong>
              )}
            </a>
          </div>
        </div>
      </div>
      {/* 우편번호 창 팝업 생성 기준 div */}
      <div id='popupDom'>
        {isPopupOpen && (
          <PopupDom>
            {/* onSelectAddress prop을 전달 */}
            <PopupPostCode onSelectAddress={handleSelectedAddress} onClose={closePostCode} />
          </PopupDom>
        )}
      </div>
    </div>
  );
};

export default McDelivery;