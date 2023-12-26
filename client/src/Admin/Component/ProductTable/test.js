import React, { useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const item = useLocation().state;
  const navigate = useNavigate();
  const [editedType, setEditedType] = useState('');
  const setEditedContent = useState('');
  console.log("상품 디테일 item: ",item);

  return(
    <div className="prod-detail">
      <form>
        <h2>메뉴 정보 수정</h2>
        <div className="container">
          <label className="box" htmlFor="editedId">ID:</label>
          <h1>{item.yn_24h}</h1>
          <input
            type="text"
            id="editedId"
            value={item.id}
            disabled // 수정 불가능하게
          />
          <label className="box" htmlFor="prod_name">매장명:</label>
          <textarea
            id="prod_name"
            value={item.prod_name}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <label className="box" htmlFor="phone">매장번호:</label>
          <textarea
            id="phone"
            value={item.prod_name}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <label className="box" htmlFor="address">주소:</label>
          <textarea
            id="address"
            value={item.address}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <label className="box" htmlFor="yn_24h">24시간:</label>
          <div>
            <label className='radio'>
              <input
                type="radio"
                id="true"
                value="true"
                name='name'
              />
              True
            </label>
            <label className='radio'>
              <input
                type="radio"
                id="false"
                value="false"
                name='name'
              />
              False
            </label>
          </div>
          <label className="box" htmlFor="yn_mcmorning">맥모닝:</label>
          <select
            id="ToF"
            value={item.yn_mcmorning}
            onChange={(e) => setEditedType(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label className="box" htmlFor="yn_mcdrive">맥드라이브:</label>
          <select
            id="ToF"
            value={item.yn_mcdrive}
            onChange={(e) => setEditedType(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label className="box" htmlFor="yn_mcdelivery">맥딜리버리:</label>
          <select
            id="ToF"
            value={item.yn_mcdelivery}
            onChange={(e) => setEditedType(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label className="box" htmlFor="yn_parking">주차장:</label>
          <select
            id="ToF"
            value={item.yn_parking}
            onChange={(e) => setEditedType(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          
          <button className="button_detail" type="button">저장</button>
          <button className="button_detail" type="button">취소</button>
        </div>
      </form>
    </div>
  )
}

export default ProductDetail;