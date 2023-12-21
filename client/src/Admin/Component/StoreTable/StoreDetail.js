import React, { useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StoreDetail = () => {
  const item = useLocation().state;
  const navigate = useNavigate();
  const [editedType, setEditedType] = useState('false'); // 기본값 설정
  console.log(item);
  
  const handleClose = () => {
    navigate(-1);
  }
  const handleEdit = () => {
    // navigate(-1);
  }

  return(
    <div className="">
      <form>
        <div className="">
          {/* <span className="close" onClick={closeModal}>&times;</span> */}
          <span className="" onClick={handleClose}>&times;</span>
          <h2>매장 정보 수정</h2>
          <label htmlFor="editedId">ID:</label>
          <input
            type="text"
            id="editedId"
            value={item.id}
            disabled // 수정 불가능하게
          />
          
          <label htmlFor="editedType">유형:</label>
          <select
            id="ToF"
            value={editedType}
            onChange={(e) => setEditedType(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>

          <button type="button" onClick={handleEdit}>저장</button>
          <button type="button" onClick={handleClose}>취소</button>
        </div>
      </form>
    </div>
  )
}

export default StoreDetail;