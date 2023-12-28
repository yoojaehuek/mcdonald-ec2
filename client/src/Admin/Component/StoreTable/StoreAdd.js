import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
import PopupDom from '../../../components/AddressPopup/PopupDom';
import PopupPostCode from '../../../components/AddressPopup/PopupPostCode';
import './StoreAdd.scss';

const { kakao } = window;

const StoreAdd = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);// 우편번호
  const [newStore, setNewStore] = useState({
    store_name: '',
    phone: '',
    address: '',
    start_time: '',
    end_time: '',
    "latitude": '', //위도 좌표
    "longitude": '', //경도좌표
    yn_mcmorning: false,
    yn_mcdrive: false,
    yn_mcdelivery: false,
    yn_parking: false,
  });
  
  var geocoder = new kakao.maps.services.Geocoder();

  var callback = function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
          console.log("좌표값: ", result[0].road_address);
          const x = parseFloat(result[0].address.x);
          const y = parseFloat(result[0].address.y);
          // console.log(x);
          setNewStore((prevStore) => ({
            ...prevStore,
            "longitude": x,
            "latitude": y
          }));
      }
      console.log("newStore: ", newStore);
  };
  
  /** 우편번호 창  */
	// 팝업창 상태 관리
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	// 팝업창 열기
	const openPostCode = () => { 
    setIsPopupOpen(true);
  }
	// 팝업창 닫기
	const closePostCode = () => {	setIsPopupOpen(false)	}
	// 선택된 주소를 업데이트하는 콜백 함수
	const handleSelectedAddress = (address) => { 
    setSelectedAddress(address); 
    setNewStore((prevStore) => ({
      ...prevStore,
      "address": address
    }));
    geocoder.addressSearch(address, callback);
  };
	/** 우편검색 결과가 인풋창에 업데이트 되지않아서 이함수로 업데이트 시켜줌 */
	const handleAddressChange = (e) => { setSelectedAddress(e.target.value); };
	/** 우편번호 창  */

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStore((prevStore) => ({
      ...prevStore,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAdd = () => {
    console.log(newStore);
    // 추가 로직 구현
    axios
      .post(`${API_URL}/api/store`, newStore)
      .then((response) => {
        alert('매장이 추가되었습니다.');
        navigate(-1); // 현재 페이지에서 뒤로 가기
      })
      .catch((error) => {
        console.error('매장 추가 실패:', error);
        alert('매장 추가에 실패했습니다.');
      });
  };

  const handleClose = () => {
    // setIsModalOpen(false);
    navigate(-1);
  }




  return (
    <div className='storeadd'>
      <h2>새 매장 추가</h2>
      <div className="container">
        {/* 추가 폼 작성 */}
        <label htmlFor="store_name">매장명:</label>
        <input
          type="text"
          id="store_name"
          name="store_name"
          value={newStore.store_name}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">매장번호:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={newStore.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="address">주소:</label>
        {/* <input
          type="text"
          id="address"
          name="address"
          value={newStore.address}
          onChange={handleInputChange}
        /> */}
        <span >
          <input type="text" 
            name="address" 
            className="mcdel-input1" 
            id="mcdel-input1" 
            placeholder="주소를 선택해주세요." 
            value={selectedAddress} 
            onChange={handleInputChange} 
            disabled
          />
          <button type="button" className="mcdel-button2" onClick={openPostCode}>주소찾기</button>
        </span>
        <label htmlFor="start_time">시작 시간:</label>
        <input
          type="text"
          id="start_time"
          name="start_time"
          value={newStore.start_time}
          onChange={handleInputChange}
          placeholder='00:00'
        />
        <label htmlFor="end_time">종료 시간:</label>
        <input
          type="text"
          id="end_time"
          name="end_time"
          value={newStore.end_time}
          onChange={handleInputChange}
          placeholder='24:00'
        />

        <h1 className='store_option'>매장 옵션</h1><div></div>
        <label className="box1" htmlFor="yn_mcmorning" style={{marginTop: "20px"}}>맥모닝:</label>
        <div className='radiobox'>
          <label className='radio'>
            <input
              type="radio"
              id="morning_true"
              value="true"
              name='yn_mcmorning'
              // checked={editedMmorning === 1}
              onChange={handleInputChange}
            />
            True
          </label>
          <label className='radio'>
            <input
              type="radio"
              id="morning_false"
              value="false"
              name='yn_mcmorning'
              // checked={editedMmorning === 0}
              onChange={handleInputChange}
            />
            False
          </label>
        </div>
        <label className="box1" htmlFor="yn_mcdrive">맥드라이브:</label>
        <div>
          <label className='radio'>
            <input
              type="radio"
              id="drive_true"
              value="true"
              name='yn_mcdrive'
              // checked={editedMmorning === 1}
              onChange={handleInputChange}
            />
            True
          </label>
          <label className='radio'>
            <input
              type="radio"
              id="drive_false"
              value="false"
              name='yn_mcdrive'
              // checked={editedMmorning === 0}
              onChange={handleInputChange}
            />
            False
          </label>
        </div>
        <label className="box1" htmlFor="yn_mcdelivery">맥딜리버리:</label>
        <div>
          <label className='radio'>
            <input
              type="radio"
              id="delivery_true"
              value="true"
              name='yn_mcdelivery'
              // checked={editedMmorning === 1}
              onChange={handleInputChange}
            />
            True
          </label>
          <label className='radio'>
            <input
              type="radio"
              id="delivery_false"
              value="false"
              name='yn_mcdelivery'
              // checked={editedMmorning === 0}
              onChange={handleInputChange}
            />
            False
          </label>
        </div>
        <label className="box1" htmlFor="yn_parking">주차장:</label>
        <div>
          <label className='radio'>
            <input
              type="radio"
              id="parking_true"
              value="true"
              name='yn_parking'
              // checked={editedMmorning === 1}
              onChange={handleInputChange}
            />
            True
          </label>
          <label className='radio'>
            <input
              type="radio"
              id="parking_false"
              value="false"
              name='yn_parking'
              // checked={editedMmorning === 0}
              onChange={handleInputChange}
            />
            False
          </label>
        </div>
        
      </div>
      <div className="jh_btn">
        <button className="jh_button btn1" type="button" onClick={handleAdd}>추가</button>
        <button className="jh_button btn2" type="button" onClick={handleClose}>취소</button>
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

export default StoreAdd;