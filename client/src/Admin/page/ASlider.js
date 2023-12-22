import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import "./scss/ASlider.scss";

const ASlider = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedId, setEditedId] = useState('');
  const [editedType, setEditedType] = useState('image'); // 기본값 설정
  const [editedContent, setEditedContent] = useState('');
  const [editedTime, setEditedTime] = useState('');

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
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    // 수정 로직 구현
    if (selectedItem) {
      const updatedItem = {
        type: editedType,
        content_url: editedContent,
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

  return (
    <div className='admin-slider-container'>
      <h1>Slider</h1>
      <div className='admin-slider'>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>유형</th>
              <th>콘텐츠</th>
              <th>시간(1000=1초)</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {axiosResult.map((item, index) => (
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
                  <button onClick={() => handleDelete(item.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='add-slider-button'>
        <button onClick={() => openModal({})}>슬라이더 추가</button>
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
              <textarea
                id="editedContent"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              ></textarea>
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
    </div>
  );
};

export default ASlider;
