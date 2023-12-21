import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import './OO.scss';


const AOption = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/option`)
    .then(res => {
      console.log(res.data);
      setItems(res.data)
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <>
      <h1>option</h1>
      {items.map((item, index) => (
        <p>{item.name}</p>
      ))}
      <table className="option1-table">
        <colgroup>
                <col span="1" class="col1" />
                <col span="3" class="col2" />
                <col span="1" class="col3" />
                <col span="3" class="col4" />
                <col span="3" class="col5" />
          </colgroup>
        <tr>
            <th scope="col">번호</th>
            <th scope="col">이미지</th>
            <th scope="col" colspan="2">상품명</th>
            <th scope="col">내용</th>
            <th scope="col">최신등록일/최근수정일</th>
            <th scope="col">진열</th>
            <th scope="col">가격</th>
            <th scope="col">관리</th>
        </tr>

        <tr>
          <td>1</td>
            <td>1</td>
            <td>테이블-1</td>
            <td>홍길동</td>
            <td>10</td>
          <td>2</td>
          <td>30</td>
          <td>20원</td>
          <td>
            <button>수정</button>
            <button>삭제</button>
          </td>
        </tr>

        <tr>
          <td>1</td>
            <td>2</td>
            <td>테이블-2</td>
            <td>둘리</td>
            <td>20</td>
          <td>20</td>
          <td>30</td>
          <td>20원</td>
          <td>
            <button>수정</button>
            <button>삭제</button>
          </td>
            
            
        </tr>
        <tr>
          <td>1</td>
            <td>3</td>
            <td>테이블-3</td>
            <td>도우너</td>
            <td>30</td>
          <td>30</td>
          <td>20</td>
          <td>30원</td>
          <td>
            <button>수정</button>
            <button>삭제</button>
          </td>
        </tr>
</table>
    </>
  );
};

export default AOption;
