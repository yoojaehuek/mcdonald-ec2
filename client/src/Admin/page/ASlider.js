import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import "./scss/ASlider.scss";
import {Upload} from "antd";

const ASlider = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedId, setEditedId] = useState('');
  const [editedType, setEditedType] = useState('image');
  const [editedContent, setEditedContent] = useState('');
  const [editedTime, setEditedTime] = useState('');
  const [isNewSlideModalOpen, setIsNewSlideModalOpen] = useState(false);
  const [newSlideType, setNewSlideType] = useState('image');
  const [newSlideContent, setNewSlideContent] = useState('');
  const [newSlideTime, setNewSlideTime] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchSliderData();
  }, []);

  const fetchSliderData = () => {
    axios.get(`${API_URL}/slider`)
      .then(res => {
        console.log(res.data);
        setAxiosResult(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setEditedId(item.id);
    setEditedType(item.type);
    setEditedContent(item.content_url);
    setEditedTime(item.duration);
    setIsModalOpen(true);
    setImageUrl("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const openNewSlideModal = () => {
    setIsNewSlideModalOpen(true);
    setImageUrl("");
  };

  const closeNewSlideModal = () => {
    setIsNewSlideModalOpen(false);
    // 모달 닫을 때 입력값 초기화
    setNewSlideType('image');
    setNewSlideContent('');
    setNewSlideTime('');
  };

  const handleEdit = () => {
    // 수정 로직 구현
    if (selectedItem) {
      const updatedItem = {
        type: editedType,
        content_url: `${imageUrl}`,
        duration: editedTime,
      };
      console.log(updatedItem);
      const userConfirmed = window.confirm('수정하시겠습니까?');

      if (userConfirmed) {
        axios.patch(`${API_URL}/slider/${selectedItem.id}`, updatedItem)
          .then(() => {
            alert("수정되었습니다.");
            fetchSliderData(); // 데이터 갱신
            closeModal();
          })
          .catch(err => {
            console.error(err);
            alert("수정에 실패했습니다.");
          });
      } else {
        return;
      }
    }
  };

  const handleAddSlide = () => {
    // 슬라이드 추가 로직 구현
    const newSlide = {
      type: newSlideType,
      content_url: `${imageUrl}`,
      duration: newSlideTime,
    };

    axios.post(`${API_URL}/slider`, newSlide)
      .then(() => {
        alert("슬라이드가 추가되었습니다.");
        fetchSliderData(); // 데이터 갱신
        closeNewSlideModal();
      })
      .catch(err => {
        console.error(err);
        alert("슬라이드 추가에 실패했습니다.");
      });
  };

  const handleDelete = (id) => {
    // 삭제 로직 구현
    axios.delete(`${API_URL}/slider/${id}`)
      .then(res => {
        alert("삭제되었습니다.");
        fetchSliderData(); // 데이터 갱신
      })
      .catch(err => {
        console.error(err);
        alert("삭제에 실패했습니다.");
      });
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = axiosResult.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div className='admin-slider-container'>
      <h1>Slider</h1> 
      <div className='add-slider-button'>
        <button onClick={openNewSlideModal}>슬라이더 추가</button>
      </div>
      <div className='admin-slider'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>유형</th>
              <th>콘텐츠</th>
              <th>시간(1000=1초)</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                {Object.keys(axiosResult[0]).map((column, colIndex) => (
                  <td key={colIndex}>
                    {colIndex === 2 ? (
                      item.type === "video" ? (
                        <video autoPlay muted controls>
                          <source src={API_URL + item[column]}></source>
                        </video>
                      ) : (
                        <img src={API_URL + item[column]} alt={`Slide ${item.id}`} />
                      )
                    ) : (
                      item[column]
                    )}
                  </td>
                ))}
                <td>
                  <button onClick={() => openModal(item)}>수정</button>
                  <button style={{backgroundColor:"#f44336"}}onClick={() => handleDelete(item.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 페이징 */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(axiosResult.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal">
          <form>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>수정</h2>
              <label htmlFor="editedId">ID:</label>
              <input
                type="text"
                id="editedId"
                value={editedId}
                disabled // 수정 불가능하게
              />
              <label htmlFor="editedType">유형:</label>
              <select
                id="editedType"
                value={editedType}
                onChange={(e) => setEditedType(e.target.value)}
              >
                <option value="image">이미지</option>
                <option value="video">비디오</option>
              </select>
              <label className='content' htmlFor="editedContent">콘텐츠:</label>
              {/* <textarea
                id="editedContent"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              ></textarea> */}
              <Upload
                name="image"
                action={`${API_URL}/image`}
                listType="picture"
                showUploadList={false}
                onChange={onChangeImage}
              >
                {imageUrl ? (
                  <p>업로드된 이미지: {imageUrl}</p>
                  ) : (
                  <div id="upload-img-placeholder">
                    <i className="fa-regular fa-file-image"></i>
                    <br />
                    <span>클릭하거나 드래그하여 업로드하세요.</span>
                  </div>
                )}
              </Upload>
              <label htmlFor="editedTime">시간(1000=1초):</label>
              <input
                type="text"
                id="editedTime"
                value={editedTime}
                onChange={(e) => setEditedTime(e.target.value)}
              />
              <button type="button" onClick={handleEdit}>저장</button>
              <button type="button" onClick={closeModal}>닫기</button>
            </div>
          </form>
        </div>
      )}

      {isNewSlideModalOpen && (
        <div className="modal">
          <form>
            <div className="modal-content">
              <span className="close" onClick={closeNewSlideModal}>&times;</span>
              <h2>슬라이드 추가</h2>
              <label htmlFor="newSlideType">유형:</label>
              <select
                id="newSlideType"
                value={newSlideType}
                onChange={(e) => setNewSlideType(e.target.value)}
              >
                <option value="image">이미지</option>
                <option value="video">비디오</option>
              </select>
              <label className='content' htmlFor="newSlideContent">콘텐츠:</label>
              {/* <textarea
                id="newSlideContent"
                value={newSlideContent}
                onChange={(e) => setNewSlideContent(e.target.value)}
              ></textarea> */}
              <Upload
                name="image"
                action={`${API_URL}/image`}
                listType="picture"
                showUploadList={false}
                onChange={onChangeImage}
              >
                {imageUrl ? (
                  <p>업로드된 이미지: {imageUrl}</p>
                  ) : (
                  <div id="upload-img-placeholder">
                    <i className="fa-regular fa-file-image"></i>
                    <br />
                    <span>클릭하거나 드래그하여 업로드하세요.</span>
                  </div>
                )}
              </Upload>
              <label htmlFor="newSlideTime">시간(1000=1초):</label>
              <input
                type="text"
                id="newSlideTime"
                value={newSlideTime}
                onChange={(e) => setNewSlideTime(e.target.value)}
              />
              <button type="button" onClick={handleAddSlide}>추가</button>
              <button type="button" onClick={closeNewSlideModal}>취소</button>
            </div>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default ASlider;
