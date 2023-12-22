import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ProductTable.scss';
import { API_URL } from '../../../config/contansts';

const StoreTable = ({ data }) => {
  const [inputVal, setInputVal] = useState(null);

  if (!data || data.length === 0) {
    return <p>상품이 없습니다.</p>;
  }

  const columns = [
    'id', 'sub_category_id', 'k_name', 'price', 'description','created_at', 'thumbnail_img_url'
  ]; // 원하는 열의 이름을 추가

  const handleSave = (item) => {
    console.log(item);
  };

  return (
    <div>
      <table className='StoreTable'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prod, rowIndex) => (
            <tr key={rowIndex} id={`id-${prod.id}`} className={ `rowIndex-${rowIndex}`}>
              {/* <img src={API_URL+prod.thumbnail_img_url} alt="" /> */}
              {/* {columns.map((column, colIndex) => (
                <>
                  <td key={colIndex}>
                    {prod[column]}
                  </td>
                </>
              ))} */}
              <td>
                <NavLink to={`edit`} state={prod}>수정</NavLink>
              </td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreTable;