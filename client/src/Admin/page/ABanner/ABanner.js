// ABanner.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Upload} from 'antd'; 
import { API_URL } from '../../../config/contansts';
import { Button, Modal, TextField, Typography, MenuItem } from '@mui/material';
import "./ABanner.scss";

const ABanner = () => {
  const [visualBackgroundData, setVisualBackgroundData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // 페이지당 아이템 수
  const [activeButton, setActiveButton] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const uniqueIds = Array.from({ length: 19 }, (_, index) => index + 1); // 1부터 19까지의 배열 생성

  const [editedData, setEditedData] = useState({
    sub_category_id: '',
    type: '',
    title: '',
    content: '',
    background_img_url: '',
    link: '',
  });

  // useEffect(() => {
  //   const fetchVisualBackgroundData = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/banner`);
  //       setVisualBackgroundData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching Visual Background data:', error);
  //     }
  //   };
  //   fetchVisualBackgroundData();
  //   setActiveButton(1);
  // }, []);

  useEffect(() => {
    const fetchVisualBackgroundData = async () => {
      try {
        const response = await axios.get(`${API_URL}/banner`);
        setVisualBackgroundData(response.data);
        // 초기에 1번이 클릭된 상태로 설정
        setActiveButton(1);
        // 초기에 1번 아이템을 selected로 설정
        setSelectedItem(response.data[0]);
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
      sub_category_id: item.sub_category_id,
      type: item.type,
      title: item.title,
      content: item.content,
      background_img_url:imageUrl,
      link: item.link,
    });
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openNewItemModal = () => {
    setIsNewItemModalOpen(true);
    setEditedData({
      sub_category_id: '',
      type: '',
      title: '',
      content: '',
      background_img_url: '',
      link: '',
    });
  };

  const handleEditDataChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = async () => {
    const userConfirmed = window.confirm('수정하시겠습니까?');
    
    // 사용자가 확인을 선택한 경우에만 수정 작업을 수행합니다.
    if (userConfirmed) {
      try {
        if (imageUrl) {
          editedData['background_img_url'] = imageUrl;
        }
        console.log("editedData: ", editedData);
        await axios.patch(`${API_URL}/banner/${selectedItem.id}`, editedData);
        closeEditModal();
        const response = await axios.get(`${API_URL}/banner`);
        setVisualBackgroundData(response.data);
        alert("수정되었습니다.");
        // 페이지를 다시 로드합니다.
        window.location.reload();
      } catch (error) {
        console.error('Error editing Visual Background data:', error);
      }
    }
  };

  const handleDelete = async (id) => {

    const userConfirmed = window.confirm('삭제하시겠습니까?');

    if(userConfirmed){
      try {
        await axios.delete(`${API_URL}/banner/${id}`);
        const response = await axios.get(`${API_URL}/banner`);
        setVisualBackgroundData(response.data);
        alert("삭제되었습니다.");
        // 페이지를 다시 로드합니다.
        window.location.reload();
      } catch (error) {
        console.error('Error deleting Visual Background data:', error);
      }
    }
  };

  const closeNewItemModal = () => {
    setIsNewItemModalOpen(false);
    // 모달 닫을 때 입력값 초기화
    setEditedData({
      sub_category_id: '',
      type: '',
      title: '',
      content: '',
      background_img_url: '',
      link: '',
    });
  };

  const handleAddNewItem = async () => {
    const newbanner = {
      sub_category_id: editedData.sub_category_id,
      type: editedData.type,
      title: editedData.title,
      content: editedData.content,
      background_img_url: imageUrl,
      link: editedData.link,
    };

    try {
      const response = await axios.post(`${API_URL}/banner`, newbanner);
      setVisualBackgroundData([...visualBackgroundData, response.data]);
      alert("추가되었습니다.");
      closeNewItemModal();
    } catch (error) {
      console.error('Error adding Visual Background data:', error);
      alert("추가에 실패했습니다.");
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
            {item.title}
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
          <div className='add-new-item-button'>
            <button onClick={openNewItemModal}>추가</button>
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className='selected-item-details'>
          <h2>{selectedItem.title}</h2>
          <p>
            이미지:
            <img src={API_URL + selectedItem.background_img_url} alt={`Background ${selectedItem.id}`} />
          </p>
          <p>고유번호: {selectedItem.sub_category_id}</p>
          <p>타입: {selectedItem.type}</p>
          <p>제목: {selectedItem.title}</p>
          <p>내용: {selectedItem.content}</p>
          <p>경로 지정: {selectedItem.link}</p>
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
              id="sub_category_id"
              name="sub_category_id"
              label="고유번호"
              variant="outlined"
              disabled
              fullWidth
              value={editedData.sub_category_id}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="type"
              name="type"
              label="타입"
              variant="outlined"
              fullWidth
              value={editedData.type}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="title"
              name="title"
              label="제목"
              variant="outlined"
              fullWidth
              value={editedData.title}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="content"
              name="content"
              label="내용"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={editedData.content}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <Upload
                name="image"
                action={`${API_URL}/image`}
                listType="picture"
                showUploadList={false}
                onChange={onChangeImage}
                style={{marginBottom:'30px'}}
              >
                {imageUrl ? (
                  <img src={API_URL + imageUrl} style={{with:'100px', height:"50px"}}></img>
                  ) : (
                  <div id="upload-img-placeholder">
                    <i className="fa-regular fa-file-image"></i>
                    <br />
                    <span>클릭하거나 드래그하여 업로드하세요.</span>
                  </div>
                )}
            </Upload>
            <TextField
              id="link"
              name="link"
              label="경로지정"
              variant="outlined"
              fullWidth
              value={editedData.link}
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
      <Modal open={isNewItemModalOpen} onClose={closeNewItemModal}>
        <div className="edit-modal">
          <form>
            <Typography variant="h4" gutterBottom>
              추가
            </Typography>
            <TextField
              id="sub_category_id"
              name="sub_category_id"
              label="고유번호"
              variant="outlined"
              fullWidth
              select
              value={editedData.sub_category_id}
              onChange={handleEditDataChange}
              style={{ marginBottom: '30px' }}
            >
              {uniqueIds.map((id) => (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="type"
              name="type"
              label="타입"
              variant="outlined"
              fullWidth
              value={editedData.type}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="title"
              name="title"
              label="제목"
              variant="outlined"
              fullWidth
              value={editedData.title}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <TextField
              id="content"
              name="content"
              label="내용"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={editedData.content}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <Upload
                name="image"
                action={`${API_URL}/image`}
                listType="picture"
                showUploadList={false}
                onChange={onChangeImage}
                style={{marginBottom:'30px'}}
              >
                {imageUrl ? (
                  <img src={API_URL + imageUrl} style={{with:'100px', height:"50px"}}></img>
                  ) : (
                  <div id="upload-img-placeholder">
                    <i className="fa-regular fa-file-image"></i>
                    <br />
                    <span>클릭하거나 드래그하여 업로드하세요.</span>
                  </div>
                )}
            </Upload>
            <TextField
              id="link"
              name="link"
              label="경로지정"
              variant="outlined"
              fullWidth
              value={editedData.link}
              onChange={handleEditDataChange}
              style={{marginBottom:'30px'}}
            />
            <Button variant="contained" color="primary" onClick={handleAddNewItem}>
              추가
            </Button>
            <Button variant="contained" color="secondary" onClick={closeNewItemModal}>
              닫기
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};


export default ABanner;
