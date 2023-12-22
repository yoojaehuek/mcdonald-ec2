// AVisualbackground.js
import { Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import "./scss/AVisualbackground.scss";

const AVisualbackground = () => {
  const [visualBackgroundData, setVisualBackgroundData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // 페이지당 아이템 수
  const [activeButton, setActiveButton] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedData, setEditedData] = useState({
    h_title: '',
    h_content: '',
    h_background_img_url: '',
    h_link: '',
  });

  useEffect(() => {
    const fetchVisualBackgroundData = async () => {
      try {
        const response = await axios.get(`${API_URL}/visualbackground`);
        setVisualBackgroundData(response.data);
      } catch (error) {
        console.error('Error fetching Visual Background data:', error);
      }
    };

    fetchVisualBackgroundData();
  }, []);

  // 페이지네이션을 위한 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = visualBackgroundData.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveButton(pageNumber);
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditedData({
      h_title: item.h_title,
      h_content: item.h_content,
      h_background_img_url: item.h_background_img_url,
      h_link: item.h_link,
    });
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    // setSelectedItem(null); // 이 부분을 주석 처리 또는 삭제합니다.
    setEditedData({
      h_title: '',
      h_content: '',
      h_background_img_url: '',
      h_link: '',
    });
  };

  const handleEditDataChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      await axios.patch(`${API_URL}/visualbackground/${selectedItem.id}`, editedData);
      closeEditModal();
      const response = await axios.get(`${API_URL}/visualbackground`);
      setVisualBackgroundData(response.data);
    } catch (error) {
      console.error('Error editing Visual Background data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/visualbackground/${id}`);
      const response = await axios.get(`${API_URL}/visualbackground`);
      setVisualBackgroundData(response.data);
    } catch (error) {
      console.error('Error deleting Visual Background data:', error);
    }
  };

  return (
    <div className='visual'>
      <div className='button-container'>
        {currentItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              openEditModal(item);
              setActiveButton(index + 1);
            }}
            className={activeButton === index + 1 ? 'active' : ''}
          >
            {item.h_title}
          </button>
        ))}
        <div className='pagination2'>
          {Array.from({ length: Math.ceil(visualBackgroundData.length / itemsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={activeButton === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className='selected-item-details'>
          <h2>{selectedItem.h_title}</h2>
          <p>
            이미지:
            <img src={API_URL + selectedItem.h_background_img_url} alt={`Background ${selectedItem.id}`} />
          </p>
          <p>제목: {selectedItem.h_title}</p>
          <p>내용: {selectedItem.h_content}</p>
          <p>경로 지정: {selectedItem.h_link}</p>
          <div className='action-buttons'>
            <button onClick={() => setIsEditModalOpen(true)}>수정</button>
            <button onClick={() => handleDelete(selectedItem.id)}>삭제</button>
          </div>
        </div>
      )}

      {/* 수정 모달 */}
      <Modal open={isEditModalOpen} onClose={closeEditModal}>
        <div className="edit-modal">
          <form>
            <Typography variant="h4" gutterBottom>
              수정
            </Typography>
            <TextField
              id="h_title"
              name="h_title"
              label="제목"
              variant="outlined"
              fullWidth
              value={editedData.h_title}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="h_content"
              name="h_content"
              label="내용"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={editedData.h_content}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="h_background_img_url"
              name="h_background_img_url"
              label="이미지"
              variant="outlined"
              fullWidth
              value={editedData.h_background_img_url}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="h_link"
              name="h_link"
              label="경로지정"
              variant="outlined"
              fullWidth
              value={editedData.h_link}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <Button variant="contained" color="primary" onClick={handleEditSubmit}>
              저장
            </Button>
            <Button variant="contained" color="secondary" onClick={closeEditModal}>
              닫기
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};


export default AVisualbackground;
