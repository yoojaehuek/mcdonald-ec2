import React, { useState } from 'react';
import './StoreTable.scss';
import { NavLink } from 'react-router-dom';
// import Pagination from "react-js-pagination";

const StoreTable = ({ data }) => {
  const [inputVal, setInputVal] = useState(null);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  // const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const columns = ['id', 'store_name', 'phone', 'address']; // 원하는 열의 이름을 추가

  const handleSave = (item) => {
    console.log(item);
    // const tmp = {};
    // const editedData = data.reduce((acc, column, colIndex) => {
    //   if (column.id == rowId) {
    //     const inputData = document.querySelectorAll(`#id-${rowId} td input`);
    //     inputData.forEach(inputElement => {
    //       const key = inputElement.name;
    //       const value = inputElement.value;
    //       tmp[key] = value;
    //     });
    //   }
    //   return tmp;
    // }, {});
    // console.log("editedData: ", editedData);
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
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} id={`id-${item.id}`} className={ `rowIndex-${rowIndex}`}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {item[column]}
                  {/* <input type="text" name={column} id={`id-${item.id}`} className={`colIndex-${colIndex}`} defaultValue={item[column]} /> */}
                </td>
              ))}
              <td>
                <NavLink to={`edit`} state={item}>수정</NavLink>
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