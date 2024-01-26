import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../../../config/contansts";
import { Pagination } from "antd";
import axios from "axios";
import "./ProductTable.scss";

const StoreTable = ({ data, setData }) => {
  const CId = useParams();  // 주소에서 카테고리id를 가져옴
  const [currentPage, setCurrentPage] = useState(1); // 페이징 현제페이지
  const itemsPerPage = 3; // 페이징 한번에 보여줄 tr의 개수
  const columns = [ // 원하는 열의 이름을 추가
    "id",
    "thumbnail_img_url",
    "k_name",
    "price",
    "description",
    "created_at",
  ]; 

  const handleDelete = (id) => {
    // 삭제 로직 구현
    axios
      .delete(`${API_URL}/api/product/${id}`)
      .then((res) => {
        setData((prevProducts) =>
          prevProducts.filter((prod) => prod.id !== id)
          //삭제한 것 의외의 것만 담음
        );
        alert("삭제되었습니다.");
      })
      .catch((err) => {
        console.error(err);
        alert("삭제에 실패했습니다.");
      });
  };
  // 현재 페이지용 인덱스 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  if (!currentItems || currentItems.length === 0) {
    return <p>상품이 없습니다.</p>;
  }
  // 페이지 변경을 처리하는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div id="adminProd">
        <div id="adminProd_header">
          <h1>product</h1>
          <NavLink to={"upload"} id="uploadBtn" state={CId}>
            <span>추가하기</span>
          </NavLink>
        </div>
        <table className="ProdTable">
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
            {currentItems.map((prod, rowIndex) => (
              <tr
                key={rowIndex}
                id={`id-${prod.id}`}
                className={`rowIndex-${rowIndex}`}
              >
                {columns.map((column, colIndex) => (
                  <>
                    {colIndex === 1 ? (
                      <td id="img_box">
                        <img
                          id="burger_img"
                          src={API_URL + prod[column]}
                          alt={`thumbnail-${prod.id}`}
                        />
                      </td>
                    ) : (
                      <td key={colIndex}>
                      {colIndex === 3 ? prod[column].toLocaleString()+"원": prod[column]}
                    </td>
                    )}
                  </>
                ))}
                <td>
                  <NavLink id="editLink" to={`edit`} state={prod}> {/* 클릭한 행의 상품정보를 state로 보냄 */}
                    수정
                  </NavLink>
                </td>
                <td>
                  <button
                    id="tableDeletebtn"
                    onClick={() => handleDelete(prod.id)}//클릭한 행의 상품의id를 보냄
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 페이징 */}
        <div className="pagination">
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default StoreTable;