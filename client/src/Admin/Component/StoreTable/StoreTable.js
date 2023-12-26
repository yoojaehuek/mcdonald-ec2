import React, { useState } from 'react';
import './StoreTable.scss';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
// import Pagination from "react-js-pagination";

const StoreTable = ({ data }) => {
  const [inputVal, setInputVal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // 현재 페이지용 인덱스 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = data.items.slice(indexOfFirstItem, indexOfLastItem);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data.items || data.items.length === 0) {
    return <p>No data available.</p>;
  }

  // const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const columns = ['id', 'store_name', 'phone', 'address']; // 원하는 열의 이름을 추가

  const handleSave = (item) => {
    console.log(item);
    
  };

  const handleDelete = (item) => {
    let yn_delete = window.confirm("정말 삭제하시겠습니까?");

    if (yn_delete) {
      axios.delete(`${API_URL}/store/${item.id}`)
      .then(res => {
        console.log("응답 데이터: ", res.data);
        alert("삭제되었습니다.");
        data.setItems((prevResult) =>
          prevResult.filter((entry) => entry.id !== item.id)
        );

      }).catch((err) =>{
        console.error(err);
      });
    } else {
      return;
    }

    
  }

  

  // 페이지 변경을 처리하는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <button onClick={handleSave}>추가</button>
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
          {currentItems.map((item, rowIndex) => (
            <tr key={rowIndex} id={`id-${item.id}`} className={ `rowIndex-${rowIndex}`}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {item[column]}
                  {/* <input type="text" name={column} id={`id-${item.id}`} className={`colIndex-${colIndex}`} defaultValue={item[column]} /> */}
                </td>
              ))}
              <td>
                <NavLink to={`edit`} state={item} 
                style={{
                  marginRight: "5px",
                  padding: "5px 10px",
                  backgroundColor: "rgb(255, 188, 13)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  }}>수정</NavLink>
              </td>
              <td>
                <button onClick={() => handleDelete(item)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "rgb(244, 67, 54)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                >삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이징 */}
      <div className="pagination">
        <Pagination
          current={currentPage}
          total={data.items.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default StoreTable;