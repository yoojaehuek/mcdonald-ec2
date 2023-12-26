import React from "react";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../../config/contansts";
import "./ProductTable.scss";
import axios from 'axios';
const StoreTable = ({ data , setData}) => {
  if (!data || data.length === 0) {
    return <p>상품이 없습니다.</p>
  }
  const columns = [
    "id",
    "thumbnail_img_url",
    "k_name",
    "price",
    "description",
    "created_at",
  ]; // 원하는 열의 이름을 추가

  const handleDelete = (id) => {
    // 삭제 로직 구현
    axios.delete(`${API_URL}/product/${id}`)
      .then(res => {
        setData(prevProducts => prevProducts.filter(prod => prod.id !== id));
        alert("삭제되었습니다.");
      })
      .catch(err => {
        console.error(err);
        alert("삭제에 실패했습니다.");
      });
  };

  return (
    <div>
      <table className="StoreTable">
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
            <tr
              key={rowIndex}
              id={`id-${prod.id}`}
              className={`rowIndex-${rowIndex}`}
            >
              {columns.map((column, colIndex) => (
              <>
                {colIndex === 1 ? (
                  <img src={API_URL + prod[column]}/> 
                ):(
                  <td key={colIndex}>{prod[column]}</td>
                )}
              </>
              ))}
              <td>
                <NavLink to={`edit`} state={prod}>
                  수정
                </NavLink>
              </td>
              <td>
                <button onClick={() => handleDelete(prod.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default StoreTable;
