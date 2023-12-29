import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/contansts";
import { Upload } from "antd";
import axios from "axios";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const item = useLocation().state;
  const navigate = useNavigate();
  console.log("상품 디테일 item: ", item);

  // 상품정보들을 상태변수에 담음
  const [Kname, setKname] = useState(item.k_name);
  const [Ename, setEname] = useState(item.e_name);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [origin, setOrigin] = useState(item.cuntry_of_origin);
  const [llergen, setLlergen] = useState(item.llergen_information);
  const [categoryId, setCategoryId] = useState(item.sub_category_id);
  const [startTime, setStartTime] = useState(item.sale_start_time);
  const [endTime, setEndTime] = useState(item.sale_end_time);
  const [adminId, setAdminId] = useState(item.admin_id);
  const [productCategory, setProductCategory] = useState(item.product_category);
  const [seq, setSeq] = useState(item.seq);
  const [imageUrl, setImageUrl] = useState(item.thumbnail_img_url);

  const handleEdit = () => {
    // 수정 로직 구현
    const updatedItem = {
      // 수정한것들을 updatedItem 에 담음
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
    };
    console.log(updatedItem);
    const userConfirmed = window.confirm("수정하시겠습니까?"); //확인 하면 true
    if (userConfirmed) {// 확인 눌렀으면 실행
      axios
        .patch(`${API_URL}/product/${item.id}`, updatedItem)
        .then(() => {
          alert("수정되었습니다.");
          handleGoBack();
        })
        .catch((err) => {
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

  const inputFields = [ // 라벨이름(key값), 보여질값, 값변경시 실행함수, id  
    { label: '이름', state: Kname, setState: setKname, id: 'editName' },
    { label: '영어이름', state: Ename, setState: setEname, id: 'editEName' },
    { label: '가격', state: price.toLocaleString(), setState: setPrice, id: 'editPrice' },
    { label: '설명', state: description, setState: setDescription, id: 'editDescription' },
    { label: '원산지', state: origin, setState: setOrigin, id: 'editOrigin' },
    { label: '알레르기정보', state: llergen, setState: setLlergen, id: 'editLlergen' },
    { label: '카테고리 id', state: categoryId, setState: setCategoryId, id: 'editCategoryId' },
  ];
  const renderInputFields = () => { // 
    return inputFields.map((field) => (
      <li key={field.label}>
        <label>{field.label}</label>
        {field.label === '설명' ? (
          <textarea
            type="text"
            id={field.id}
            value={field.state}
            onChange={(e) => field.setState(e.target.value)}
          />
        ) : (
          <input
            type="text"
            id={field.id}
            value={field.state}
            onChange={(e) => field.setState(e.target.value)}
          />
        )}
      </li>
    ));
  };
  return (
    <form className="prod-detail">
      <h1>메뉴 정보 수정</h1>
      <div id="prod-information">
        <div id="img">{/* 이미지 업로드 */}
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <div id="upload-img-placeholder">
                <img src={API_URL + imageUrl} alt="" /> {/* 업로드한 이미지를 보여줌 */}
                <span> 클릭하거나 드래그하여 이미지를 업로드하세요.</span>
              </div>
            ) : (
              <div id="upload-img-placeholder">
                <h3>클릭하거나 드래그하여 이미지를 업로드하세요.</h3>
              </div>
            )}
          </Upload>
        </div>
        <ul> {renderInputFields()} </ul> {/* 상품 정보 */}
      </div>
      <li id="button">
        <button
          id="save-button"
          className="button_detail"
          type="button"
          onClick={handleEdit}
        >
          저장
        </button>
        <button
          id="cancel-button"
          className="button_detail"
          type="button"
          onClick={handleGoBack}
        >
          취소
        </button>
      </li>
    </form>
  );
};

export default ProductDetail;
