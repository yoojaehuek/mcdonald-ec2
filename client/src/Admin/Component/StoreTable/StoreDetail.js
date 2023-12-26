import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
import './StoreDetail.scss';
import {Upload} from "antd";

const StoreDetail = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const item = useLocation().state;
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedId, setEditedId] = useState('');
  const [editedStore, setEditedStore] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedSTime, setEditedSTime] = useState('');
  const [editedETime, setEditedETime] = useState('');
  const [editedTime, setEditedTime] = useState('');
  const [editedMmorning, setEditedMmorning] = useState('');
  const [editedMdrive, setEditedMdrive] = useState('');
  const [editedMdelivery, setEditedMdelivery] = useState('');
  const [editedParking, setEditedParking] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  console.log("매장정보: ", item);
  useEffect(() => {
    // let timeTrue = document.getElementById("time_true");
    // let timeFalse = document.getElementById("time_false");
    // if(item.yn_24h === true) timeTrue.checked = true;
    // else timeFalse.checked = true;
    // -----------------------------------------------------------
    let morningTrue = document.getElementById("morning_true");
    let morningFalse = document.getElementById("morning_false");
    if(item.yn_mcmorning === true) morningTrue.checked = true;
    else morningFalse.checked = true;
    // -----------------------------------------------------------
    let driveTrue = document.getElementById("drive_true");
    let driveFalse = document.getElementById("drive_false");
    if(item.yn_mcdrive === true) driveTrue.checked = true;
    else driveFalse.checked = true;
    // -----------------------------------------------------------
    let deliveryTrue = document.getElementById("delivery_true");
    let deliveryFalse = document.getElementById("delivery_false");
    if(item.yn_mcdelivery === true) deliveryTrue.checked = true;
    else deliveryFalse.checked = true;
    // -----------------------------------------------------------
    let parkingTrue = document.getElementById("parking_true");
    let parkingFalse = document.getElementById("parking_false");
    if(item.yn_parking === true) parkingTrue.checked = true;
    else parkingFalse.checked = true;
    // -----------------------------------------------------------
    fetchSliderData();
    setSelectedItem(item);
    setEditedId(item.id);
    setEditedStore(item.store_name);
    setEditedPhone(item.phone);
    setEditedAddress(item.address);
  }, []);

  const fetchSliderData = () => {
    axios.get(`${API_URL}/item`)
      .then(res => {
        console.log("dddddggg",res.data);
        setAxiosResult(res.data);//업데이트 
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleRadioChange = (value) => {
    console.log('라디오 변경:', value);
    setEditedTime(value);
  };
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
        store_name: editedStore,
        phone: editedPhone,
        address: editedAddress,
        start_time: editedSTime,
        end_time: editedETime,
        yn_24h: editedTime,
        yn_mcmorning: editedMmorning,
        yn_mcdrive: editedMdrive,
        yn_mcdelivery: editedMdelivery,
        yn_parking: editedParking,
      };
      console.log("수정: ",updatedItem);
      const userConfirmed = window.confirm('수정하시겠습니까?');

      if (userConfirmed) {//selectedItem.id 는 item.id 암
        console.log("업데이트아이템: ", updatedItem);
        axios.patch(`${API_URL}/store/${selectedItem.id}`, updatedItem)
          .then(() => {
            alert("수정되었습니다.");
            fetchSliderData(); // 데이터 갱신
            // handleClose();
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

  // const closeNewSlideModal = () => {
  //   setIsNewSlideModalOpen(false);
  //   // 모달 닫을 때 입력값 초기화
  //   setNewSlideType('image');
  //   setNewSlideContent('');
  //   setNewSlideTime('');
  // };
  // const handleDelete = (id) => {
  //   // 삭제 로직 구현
  //   axios.delete(`${API_URL}/slider/${id}`)
  //     .then(res => {
  //       alert("삭제되었습니다.");
  //       fetchSliderData(); // 데이터 갱신
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       alert("삭제에 실패했습니다.");
  //     });
  // };
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = axiosResult.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);




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
            value={editedId}
            disabled // 수정 불가능하게
          />
          <label className="box" htmlFor="store_name">매장명:</label>
          <textarea
            id="store_name"
            value={editedStore}
            onChange={(e) => setEditedStore(e.target.value)}
          ></textarea>
          <label className="box" htmlFor="phone">매장번호:</label>
          <textarea
            id="phone"
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          ></textarea>
          <label className="box" htmlFor="address">주소:</label>
          <textarea
            id="address"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
          ></textarea>
          {/* <label className="box" htmlFor="yn_24h">24시간:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="time_true"
                value="true"
                name='time'
                onChange={() => setEditedTime(true)}
              />
              True
            </label>
            <label className='radio'>
              <input
                type="radio"
                id="time_false"
                value="false"
                name='time'
                onChange={() => setEditedTime(false)}
              />
              False
            </label>
          </div> */}
          <label className="box" htmlFor="yn_mcmorning">맥모닝:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="morning_true"
                value="true"
                name='morning'
                onChange={() => setEditedMmorning(true)}
              />
              True
            </label>
            <label className='radio'>
              <input
                type="radio"
                id="morning_false"
                value="false"
                name='morning'
                onChange={() => setEditedMmorning(false)}
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
                name='drive'
                onChange={() => setEditedMdrive(true)}
              />
              True
            </label>
            <label className='radio'>
              <input
                type="radio"
                id="drive_false"
                value="false"
                name='drive'
                onChange={() => setEditedMdrive(false)}
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
                name='delivery'
                onChange={() => setEditedMdelivery(true)}
              />
              True
            </label>
            <label className='radio'>
              <input
                type="radio"
                id="delivery_false"
                value="false"
                name='delivery'
                onChange={() => setEditedMdelivery(false)}
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
                name='park'
                onChange={() => setEditedParking(true)}
              />
              True
            </label>
            <label className='radio'>
              <input
                type="radio"
                id="parking_false"
                value="false"
                name='park'
                onChange={() => setEditedParking(false)}
              />
              False
            </label>
          </div>
          
          

          <button className="button_detail" type="button" onClick={handleEdit}>저장</button>
          <button className="button_detail" type="button" onClick={() => handleClose(item.id)}>취소</button>
        </div>
      </form>
    </div>
  )
}

export default StoreDetail;