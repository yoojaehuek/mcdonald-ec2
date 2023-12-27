import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Modal,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import "./AOption.scss";

const AOption = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    name: '',
    price: '',
  });

  // 추가 모달과 관련된 state 추가
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
  });

  useEffect(() => {
    axios.get(`${API_URL}/option`)
      .then(res => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditedData({
      name: item.name,
      price: item.price,
    });
    setIsEditModalOpen(true);
  };

  const handleEditDataChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = async () => {
    const userConfirmed = window.confirm('수정하시겠습니까?');
    
    if (userConfirmed) {
      try {
        await axios.patch(`${API_URL}/option/${selectedItem.id}`, editedData);
        closeEditModal();
        const response = await axios.get(`${API_URL}/option`);
        setItems(response.data);
        alert("수정되었습니다.");
      } catch (error) {
        console.error('Error editing data:', error);
      }
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = async (id) => {
    const userConfirmed = window.confirm('삭제하시겠습니까?');

    if (userConfirmed) {
      try {
        await axios.delete(`${API_URL}/option/${id}`);
        const response = await axios.get(`${API_URL}/option`);
        setItems(response.data);
        alert("삭제되었습니다.");
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  // 추가 모달 열기
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  // 추가 모달 닫기
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  // 새로운 아이템의 이름 및 가격 변경 핸들러
  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevData) => ({ ...prevData, [name]: value }));
  };

  // 추가 모달에서의 데이터 전송 및 새로운 아이템 추가
  const handleAddSubmit = async () => {
    const userConfirmed = window.confirm('추가하시겠습니까?');
    
    if (userConfirmed) {
      try {
        await axios.post(`${API_URL}/option`, newItem);
        closeAddModal();
        const response = await axios.get(`${API_URL}/option`);
        setItems(response.data);
        alert("추가되었습니다.");
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
  };

  return (
    <>
      <h1>옵션</h1>
      {/* 추가하기 버튼 */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1vw", float: 'right' }}
        onClick={openAddModal} // 추가 모달 열기
      >
        추가하기
      </Button>
      {/* 추가 모달 */}
      <Dialog open={isAddModalOpen} onClose={closeAddModal} fullWidth maxWidth="sm">
        <DialogTitle>추가하기</DialogTitle>
        <DialogContent>
          <form>
            <Typography variant="h4" gutterBottom>
              추가하기
            </Typography>
            <TextField
              id="newName"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={newItem.name}
              onChange={handleNewItemChange}
              style={{ marginBottom: '20px' }}
            />
            <TextField
              id="newPrice"
              name="price"
              label="Price"
              variant="outlined"
              fullWidth
              value={newItem.price}
              onChange={handleNewItemChange}
              style={{ marginBottom: '30px' }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleAddSubmit} style={{backgroundColor:'rgb(255, 188, 13)'}}>
            추가
          </Button>
          <Button variant="contained" color="secondary" onClick={closeAddModal} style={{backgroundColor:'#f44336'}}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>

      {/* 테이블 */}
      <TableContainer component={Paper} style={{ marginTop: '50px'}}>
        <Table>
          <TableHead style={{backgroundColor: "rgb(255, 188, 13)"}}>
            <TableRow>
              <TableCell style={{fontSize:'20px', fontWeight:'600'}}>ID</TableCell>
              <TableCell style={{fontSize:'20px', fontWeight:'600'}}>상품 이름</TableCell>
              <TableCell style={{fontSize:'20px', fontWeight:'600'}}>가격</TableCell>
              <TableCell style={{fontSize:'20px', fontWeight:'600', textAlign:'center'}}>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell style={{fontSize:'15px', fontWeight:'500'}}>{item.id}</TableCell>
                <TableCell style={{fontSize:'15px', fontWeight:'500'}}>{item.name}</TableCell>
                <TableCell style={{fontSize:'15px', fontWeight:'500'}}>{item.price}</TableCell>
                <TableCell style={{textAlign:'center'}}>
                  <Button variant="contained" color="primary" onClick={() => handleEdit(item)} style={{backgroundColor: "rgb(255, 188, 13)",color:'white'}}>
                    수정
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px", backgroundColor: "#f44336",color:'white'}}>
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 수정 모달 */}
      <Modal open={isEditModalOpen} onClose={closeEditModal}>
        <div className="edit-modal2">
          <form>
            <Typography variant="h4" gutterBottom>
              수정하기
            </Typography>
            <TextField
              id="editName"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={editedData.name}
              onChange={handleEditDataChange}
              style={{ marginBottom: '20px' }}
            />
            <TextField
              id="editPrice"
              name="price"
              label="Price"
              variant="outlined"
              fullWidth
              value={editedData.price}
              onChange={handleEditDataChange}
              style={{ marginBottom: '30px' }}
            />
            <Button variant="contained" color="primary" onClick={handleEditSubmit}>
              저장
            </Button>
            <Button variant="contained" color="secondary" onClick={closeEditModal} style={{marginLeft: '10px' }}>
              닫기
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AOption;
