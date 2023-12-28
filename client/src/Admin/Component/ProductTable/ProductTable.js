import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../../../config/contansts";
import { Pagination } from "antd";
import "./ProductTable.scss";
import axios from "axios";

const StoreTable = ({ data, setData }) => {
  const CId = useParams();
  console.log("cid: ", CId.subcategory_id);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  if (!data || data.length === 0) {
    return <p>상품이 없습니다.</p>;
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
    axios
      .delete(`${API_URL}/product/${id}`)
      .then((res) => {
        setData((prevProducts) =>
          prevProducts.filter((prod) => prod.id !== id)
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
                  < >
                    {colIndex === 1 ? (
                      <td>
                        <img
                          id="burger_img"
                          src={API_URL + prod[column]}
                          alt={`thumbnail-${prod.id}`}
                        />
                      </td>
                    ) : (
                      <td key={colIndex}>{prod[column]}</td>
                    )}
                  </>
                ))}
                <td>
                  <NavLink id="editLink" to={`edit`} state={prod}>
                    수정
                  </NavLink>
                </td>
                <td>
                  <button
                    id="tableDeletebtn"
                    onClick={() => handleDelete(prod.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 페이징 */}
      <div className="pagination">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default StoreTable;
