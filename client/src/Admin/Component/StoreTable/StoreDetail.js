import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
import PopupDom from '../../../components/AddressPopup/PopupDom';
import PopupPostCode from '../../../components/AddressPopup/PopupPostCode';
import './StoreDetail.scss';

const { kakao } = window;

const StoreDetail = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const item = useLocation().state;
  // console.log("item: ", typeof(item.yn_mcdelivery));
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);// 우편번호  
  const [newStore, setNewStore] = useState({
    store_name: '',
    phone: '',
    address: '',
    start_time: '',
    end_time: '',
    "latitude": '', //위도 좌표
    "longitude": '', //경도좌표
    yn_mcmorning: '',
    yn_mcdrive: '',
    yn_mcdelivery: '',
    yn_parking: '',
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

  console.log("매장정보: ", item);
  useEffect(() => {
    // let timeTrue = document.getElementById("time_true");
    // let timeFalse = document.getElementById("time_false");
    // if(item.yn_24h === true) timeTrue.checked = true;
    // else timeFalse.checked = true;
    // -----------------------------------------------------------
    let morningTrue = document.getElementById("morning_true");
    let morningFalse = document.getElementById("morning_false");
    if(item.yn_mcmorning === 1) morningTrue.checked = true;
    else morningFalse.checked = true;
    // -----------------------------------------------------------
    let driveTrue = document.getElementById("drive_true");
    let driveFalse = document.getElementById("drive_false");
    if(item.yn_mcdrive === 1) driveTrue.checked = true;
    else driveFalse.checked = true;
    // -----------------------------------------------------------
    let deliveryTrue = document.getElementById("delivery_true");
    let deliveryFalse = document.getElementById("delivery_false");
    if(item.yn_mcdelivery === 1) deliveryTrue.checked = true;
    else deliveryFalse.checked = true;
    // -----------------------------------------------------------
    let parkingTrue = document.getElementById("parking_true");
    let parkingFalse = document.getElementById("parking_false");
    if(item.yn_parking === 1) parkingTrue.checked = true;
    else parkingFalse.checked = true;
    // -----------------------------------------------------------
    
    setNewStore((prevStore) => ({
      ...prevStore,
      store_name: item.store_name,
      phone: item.phone,
      address: item.address,
      start_time: item.start_time,
      end_time: item.end_time,
      "latitude": item.latitude, //위도 좌표
      "longitude": item.longitude, //경도좌표
      yn_mcmorning: item.yn_mcmorning,
      yn_mcdrive: item.yn_mcdrive,
      yn_mcdelivery: item.yn_mcdelivery,
      yn_parking: item.yn_parking,
    }));

    setSelectedItem(item);
    setSelectedAddress(item.address);
    // fetchSliderData();
  }, [item]);

  // const fetchSliderData = () => {
  //   axios.get(`${API_URL}/item`)
  //     .then(res => {
  //       console.log("dddddggg",res.data);
  //       // setAxiosResult(res.data);//업데이트 
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  const handleClose = () => {
    setSelectedItem(null);
    // setIsModalOpen(false);
    navigate(-1);
  }
  const handleEdit = () => {
    // navigate(-1);
    // 수정 로직 구현
    if (selectedItem) {
      const updatedItem = {
        store_name: newStore.store_name,
        phone: newStore.phone,
        address: newStore.address,
        start_time: newStore.start_time,
        end_time: newStore.end_time,
        "latitude": newStore.latitude, //위도 좌표
        "longitude": newStore.longitude, //경도좌표
        yn_mcmorning: newStore.yn_mcmorning,
        yn_mcdrive: newStore.yn_mcdrive,
        yn_mcdelivery: newStore.yn_mcdelivery,
        yn_parking: newStore.yn_parking,
      };
      console.log("수정: ",updatedItem);
      const userConfirmed = window.confirm('수정하시겠습니까?');

      if (userConfirmed) {//selectedItem.id 는 item.id 암
        console.log("업데이트아이템: ", updatedItem);
        axios.patch(`${API_URL}/store/${selectedItem.id}`, updatedItem)
          .then(() => {
            alert("수정되었습니다.");
            // fetchSliderData(); // 데이터 갱신
            handleClose();
          })
          .catch(err => {
            console.error(err);
            alert("수정에 실패했습니다.");
          });
      } else {
        return;
      }
    }
  }

  return(
    <div className="storedetail">
      <form>
        <h2>매장 정보 수정</h2>
        <div className="container">
          <label className="box" htmlFor="editedId">ID:</label>
          {/* <h1>{item.yn_24h}</h1> */}
          <input
            type="text"
            id="editedId"
            value={item.id}
            disabled // 수정 불가능하게
          />
          <label className="box" htmlFor="store_name">매장명:</label>
          <textarea
            id="store_name"
            name="store_name"
            value={newStore.store_name}
            onChange={handleInputChange}
          ></textarea>
          <label className="box" htmlFor="phone">매장번호:</label>
          <textarea
            id="phone"
            name="phone"
            value={newStore.phone}
            onChange={handleInputChange}
          ></textarea>
          <label className="box" htmlFor="address">주소:</label>
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
          <label className="box" htmlFor="start_time">시작 시간:</label>
          <textarea
            id="start_time"
            name="start_time"
            value={newStore.start_time}
            onChange={handleInputChange}
          ></textarea>
          <label className="box" htmlFor="end_time">종료 시간:</label>
          <textarea
            id="end_time"
            name="end_time"
            value={newStore.end_time}
            onChange={handleInputChange}
          ></textarea>
          <label className="box" htmlFor="yn_mcmorning">맥모닝:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="morning_true"
                value="true"
                name='yn_mcmorning'
                // checked={newStore.yn_mcmorning === 1}
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
                // checked={newStore.yn_mcmorning === 0}
                onChange={handleInputChange}
              />
              False
            </label>
          </div>
          
          <label className="box" htmlFor="yn_mcdrive">맥드라이브:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="drive_true"
                value="true"
                name='yn_mcdrive'
                // checked={newStore.yn_mcdrive === 1}
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
                // checked={newStore.yn_mcdrive === 0}
                onChange={handleInputChange}              
              />
              False
            </label>
          </div>
          
          <label className="box" htmlFor="yn_mcdelivery">맥딜리버리:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="delivery_true"
                value="true"
                name='yn_mcdelivery'
                // checked={newStore.yn_mcdelivery === 1}
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
                // checked={newStore.yn_mcdelivery === 0}
                onChange={handleInputChange}
              />
              False
            </label>
          </div>
          
          <label className="box" htmlFor="yn_parking">주차장:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="parking_true"
                value="true"
                name='yn_parking'
                // checked={newStore.yn_parking === 1}
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
                // checked={newStore.yn_parking === 0}
                onChange={handleInputChange}
              />
              False
            </label>
          </div>
          
          

          <button className="button_detail" type="button" onClick={handleEdit}>저장</button>
          <button className="button_detail" type="button" onClick={handleClose}>취소</button>
        </div>
      </form>

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
  )
}

export default StoreDetail;