import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
import './StoreAdd.scss';

const StoreAdd = () => {
  const navigate = useNavigate();

  const [newStore, setNewStore] = useState({
    store_name: '',
    phone: '',
    address: '',
    start_time: '',
    end_time: '',
    yn_24h: false,
    yn_mcmorning: false,
    yn_mcdrive: false,
    yn_mcdelivery: false,
    yn_parking: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStore((prevStore) => ({
      ...prevStore,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAdd = () => {
    // 추가 로직 구현
    axios
      .post(`${API_URL}/store`, newStore)
      .then((response) => {
        alert('매장이 추가되었습니다.');
        navigate(-1); // 현재 페이지에서 뒤로 가기
      })
      .catch((error) => {
        console.error('매장 추가 실패:', error);
        alert('매장 추가에 실패했습니다.');
      });
  };

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
        <input
          type="text"
          id="address"
          name="address"
          value={newStore.address}
          onChange={handleInputChange}
        />
        <label htmlFor="start_time">시작:</label>
        <input
          type="text"
          id="start_time"
          name="start_time"
          value={newStore.start_time}
          onChange={handleInputChange}
        />
        <label htmlFor="end_time">종료:</label>
        <input
          type="text"
          id="end_time"
          name="end_time"
          value={newStore.end_time}
          onChange={handleInputChange}
        />
        <label className="box" htmlFor="yn_mcmorning">맥모닝:</label>
        <div>
          <label className='radio'>
            <input
              type="radio"
              id="morning_true"
              value="true"
              name='morning'
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
              name='morning'
              // checked={editedMmorning === 0}
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
              name='drive'
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
              name='drive'
              // checked={editedMmorning === 0}
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
              name='delivery'
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
              name='delivery'
              // checked={editedMmorning === 0}
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
              name='park'
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
              name='park'
              // checked={editedMmorning === 0}
              onChange={handleInputChange}
            />
            False
          </label>
        </div>
  
        <button type="button" onClick={handleAdd}>
          추가
        </button>
      </div>
    </div>
  );
};

export default StoreAdd;