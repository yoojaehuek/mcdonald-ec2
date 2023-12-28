import React, { useEffect, useState} from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { API_URL } from "../../../config/contansts";
import { Upload } from 'antd';
import './ProductUpload.scss';
import axios from 'axios';
import { getCookie } from '../../../cookie';

const ProductUpload = () => {
  const [Kname, setKname] = useState('');
  const [Ename, setEname] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState('');
  const [llergen, setLlergen] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [adminId, setAdminId] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [seq, setSeq] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const item = useLocation().state;
  useEffect(() => {
    setCategoryId(item.subcategory_id);
    setAdminId(getCookie('login'));
  }, []); 
  const handleGoBack = () => {
    navigate(-1); // -1은 뒤로 가기를 의미합니다.
  };
  const handleAdd = () => {
    // 슬라이드 추가 로직 구현
    if(
      categoryId !=='' &&
      adminId !=='' &&
      productCategory !=='' &&
      Kname !=='' &&
      Ename !=='' &&
      imageUrl !=='' &&
      seq !=='' &&
      description !=='' &&
      startTime !=='' &&
      endTime !=='' &&
      llergen !=='' &&
      origin !=='' &&
      price !=='' &&
      productCategory !=='' 
    ){
      const newProd = { //추가할거 담음
        sub_category_id: categoryId,
        admin_id: adminId,
        product_category: productCategory,
        k_name: Kname,
        e_name: Ename,
        thumbnail_img_url: imageUrl,
        seq: seq,
        description: description,
        sale_start_time: startTime,
        sale_end_time: endTime,
        llergen_information: llergen,
        cuntry_of_origin: origin,
        price: price,
        product_category: productCategory,
      };
      console.log('new: ',newProd);
      axios.post(`${API_URL}/product`, newProd)
        .then(() => {
          alert("메뉴가 추가되었습니다.");
          handleGoBack();
        })
        .catch(err => {
          console.error(err);
          alert("메뉴 추가에 실패했습니다.");
        });
    }else {
      alert('전부입력해주세요');
    }
  };
  const onChangeImage = (info) => {
    // 파일이 업로드 중일 때
    console.log("new", info.file);
    if (info.file.status === "uploading") {
      console.log("업로드중");
      return;
    }
    // 파일이 업로드 완료 되었을 때
    if (info.file.status === "done") {
      console.log("성공");
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      // 받은 이미지경로를 imageUrl에 넣어줌
      setImageUrl(imageUrl);
    }
  };
  return(
    <form className="prod-upload">
      <h1>메뉴 추가</h1>
      <div id='prod-information'>
        <div id='img'> 
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <div id="upload-img-placeholder">
                <img src={API_URL + imageUrl} alt="" />
                <span> 클릭하거나 드래그하여 이미지를 업로드하세요.</span>
              </div>
              ) : (
              <div id="upload-img-placeholder">
                <h3>클릭하거나 드래그하여 이미지를 업로드하세요.</h3>
              </div>
            )}
          </Upload>
        </div>
        <ul>
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
              onChange={(e) => {
                const formattedValue = e.target.value.replace(/,/g, ''); 
                // , 제거
                setPrice(Number(formattedValue));
              }}
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
              disabled // 수정 불가능하게
            />
          </li>
          <li>
            <label>단품 세트 여부</label>
            <input
              type="text"
              id="editProductCategory"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              placeholder='단품이면 0 세트이면 1을 입력해주세요'
              />
          </li>
          <li>
            <label>seq 보여줄순서</label>
            <input
              type="number"
              id="editSeq"
              value={seq}
              onChange={(e) => setSeq(e.target.value)}
              />
          </li>
          <li id='sale-time'>
            <label>판매시간</label>
            <input
              type="text"
              id="editStartTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              placeholder='예) 09:30'
              /><span>~</span>
            <input
              type="text"
              id="editEndTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              placeholder='예) 22:00'
              />
          </li>
        </ul>
      </div>
      <li id='button'>
        <button id='save-button' onClick={handleAdd} className="button_detail" type="button">추가</button>
        <button id='cancel-button' onClick={handleGoBack} className="button_detail" type="button">취소</button>
      </li>
    </form>
  )
}

export default ProductUpload;