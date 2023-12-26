import React, { useEffect, useState} from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { API_URL } from "../../../config/contansts";
import './ProductDetail.scss';
import axios from 'axios';

const ProductDetail = () => {
  const item = useLocation().state;
  const navigate = useNavigate();
  const [editedType, setEditedType] = useState('');
  const setEditedContent = useState('');
  console.log("상품 디테일 item: ",item);

  const [Kname, setKname] = useState(item.k_name);
  const [Ename, setEname] = useState(item.e_name);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [origin, setOrigin] = useState(item.cuntry_of_origin);
  const [llergen, setLlergen] = useState(item.llergen_information);
  const [categoryId, setCategoryId] = useState(item.sub_category_id);
  const [startTime, setStartTime] = useState(item.sale_start_time);
  const [endTime, setEndTime] = useState(item.sale_end_time);
  const [img, setImg] = useState(item.thumbnail_img_url);
  const [adminId, setAdminId] = useState(item.admin_id);
  const [productCategory,setProductCategory] = useState(item.product_category);
  const [seq, setSeq] = useState(item.seq);

  const handleEdit = () => {
    // 수정 로직 구현
    const updatedItem = { // 수정한거 담음
      sub_category_id: categoryId,
      admin_id: adminId,
      product_category: productCategory,
      k_name: Kname,
      e_name: Ename,
      thumbnail_img_url: img,
      seq: seq,
      description: description,
      sale_start_time: startTime,
      sale_end_time: endTime,
      llergen_information: llergen,
      cuntry_of_origin: origin,
      price: price,
    };
    console.log(updatedItem);
    const userConfirmed = window.confirm('수정하시겠습니까?'); //확인 하면 true
    
    if (userConfirmed) {
      axios.patch(`${API_URL}/product/${item.id}`, updatedItem)
        .then(() => {
          alert("수정되었습니다.");
        })
        .catch(err => {
          console.error(err);
          alert("수정에 실패했습니다.");
        });
    } else {
      return;
    }
  };
  
  const handleGoBack = () => {
    navigate(-1); // -1은 뒤로 가기를 의미합니다.
  };

  return(
    <form className="prod-detail">
      <h1>메뉴 정보 수정</h1>
      <div id='prod-information'>
        <div id='img'> 
          <img src={API_URL+img} alt="" />
        </div>

        <ul>
          <li>
            <label>id</label>
            <input
              type="text"
              id="editId"
              value={item.id}
              disabled // 수정 불가능하게
            />
          </li>
          <li>
            <label>이름</label>
            <input
              type="text"
              id="editName"
              value={Kname}
              onChange={(e) =>  setKname(e.target.value)}
            />
          </li>
          <li>
            <label>영어이름</label>
            <input
              type="text"
              id="editEName"
              value={Ename}
              onChange={(e) => setEname(e.target.value)}
            />
          </li>
          <li>
            <label>가격</label>
            <input
              type="text"
              id="editPrice"
              value={price.toLocaleString()}
              onChange={(e) => setPrice(e.target.value)}
            />
          </li>
          <li>
            <label>설명</label>
            <textarea
              type="text"
              id="editDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
          <li>
            <label>원산지</label>
            <input
              type="text"
              id="editOrigin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </li>
          <li>
            <label>알레르기정보</label>
            <input
              type="text"
              id="editLlergen"
              value={llergen}
              onChange={(e) => setLlergen(e.target.value)}
            />
          </li>
          <li>
            <label>카테고리 id</label>
            <input
              type="text"
              id="editCategoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
          </li>
          <li id='sale-time'>
            <label>판매시간</label>
            <input
              type="text"
              id="editStartTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            /><span>~</span>
            <input
              type="text"
              id="editEndTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </li>
          <li>
            <label> 이미지주소 </label>
            <input
              type="text"
              id="editImg"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <li id='button'>
        <button id='cancel-button' onClick={handleGoBack} className="button_detail" type="button">취소</button>
        <button id='save-button' onClick={handleEdit} className="button_detail" type="button">저장</button>
      </li>
    </form>
  )
}

export default ProductDetail;