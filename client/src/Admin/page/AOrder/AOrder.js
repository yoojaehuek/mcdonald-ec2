import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../config/contansts";

const AOrder = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editedData, setEditedData] = useState({
    id: "",
    user_id: "",
    store_id: "",
    status: "",
    total_price: "",
    cancel_yn: "",
    format_date: "",
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/order/all`)
      .then((res) => {
        console.log(res);
        setAxiosResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditedData(item);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleUpdate = () => {
    console.log("Updated Data:", editedData);
    if (selectedItem) {
      const updatedData = { ...editedData, status: editedData.status, cancel_yn: editedData.cancel_yn };
    axios
      .patch(`${API_URL}/order/${selectedItem.id}`, updatedData)
        .then((response) => {
          console.log("Update:", response.data);
          setAxiosResult((prevResult) => {
            const updatedResult = prevResult.map((item) =>
              item.id === selectedItem.id ? editedData : item
            );
            return updatedResult;
          });
          setOpenModal(false);
          alert("수정되었습니다.");
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
  };

  const handleDeleteOrder = (id) => {
    const userConfirmed = window.confirm("정말 삭제하시겠습니까?");
    if (userConfirmed) {
      axios
        .delete(`${API_URL}/order/${id}`)
        .then((response) => {
          console.log("Delete:", response.data);
          setAxiosResult((prevResult) =>
            prevResult.filter((item) => item.id !== id)
          );
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 style={{ marginBottom: "1vw" }}>Order</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">UserID</TableCell>
              <TableCell align="center">StoreID</TableCell>
              <TableCell align="center">상태</TableCell>
              <TableCell align="center">금액</TableCell>
              <TableCell align="center">유/무</TableCell>
              <TableCell align="center">주문날짜</TableCell>
              <TableCell align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {axiosResult.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.user_id}</TableCell>
                <TableCell align="center">{item.store_id}</TableCell>
                <TableCell align="center">{item.status}</TableCell>
                <TableCell align="center">
                  {item.total_price.toLocaleString()}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {item.cancel_yn === 1 ? "true" : "false"}
                </TableCell>
                <TableCell align="center">{item.format_date}</TableCell>
                <TableCell align="center">
                  <Button
                    style={{
                      marginRight: "5px",
                      padding: "5px 10px",
                      backgroundColor: "rgb(255, 188, 13)",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEditClick(item)}
                  >
                    수정
                  </Button>
                  <Button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteOrder(item.id)}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>수정</DialogTitle>
        <DialogContent>
          <TextField
            label="ID"
            name="id"
            value={editedData.id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
          <TextField
            label="UserID"
            name="user_id"
            value={editedData.user_id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
          <TextField
            label="StoreID"
            name="store_id"
            value={editedData.store_id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
          <Select
            label="상태"
            name="status"
            value={editedData.status}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="주문대기">주문대기</MenuItem>
            <MenuItem value="조리중">조리중</MenuItem>
            <MenuItem value="배달중">배달중</MenuItem>
            <MenuItem value="배달완료">배달완료</MenuItem>
          </Select>
          <TextField
            label="금액"
            name="total_price"
            value={editedData.total_price.toLocaleString()}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
          <Select
            label="유/무"
            name="cancel_yn"
            value={editedData.cancel_yn}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="true">true</MenuItem>
            <MenuItem value="false">false</MenuItem>
          </Select>
          <TextField
            label="주문날짜"
            name="format_date"
            value={editedData.format_date}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>취소</Button>
          <Button onClick={handleUpdate} color="primary">
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AOrder;
