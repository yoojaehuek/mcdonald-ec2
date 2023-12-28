import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../config/contansts";
import { getCookie } from "../../../utils/cookie";

const AFaq = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedData, setEditedData] = useState({
    id: "",
    admin_id: getCookie("login"),
    category: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${API_URL}/faq`)
      .then((res) => {
        console.log(res.data);
        setAxiosResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditedData(item);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setEditedData({
      id: "",
      admin_id: "",
      category: "",
      title: "",
      description: "",
    });
  };

  const handleCreate = () => {
    const { id, ...dataWithoutId } = editedData;
    console.log(editedData);
    axios
      .post(`${API_URL}/faq`, dataWithoutId)
      .then((response) => {
        console.log("Create:", response.data);
        setAxiosResult((prevResult) => [...prevResult, response.data]);
        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUpdate = () => {
    if (selectedItem) {
      axios
        .patch(`${API_URL}/faq/${selectedItem.id}`, editedData)
        .then((response) => {
          console.log("Update:", response.data);
          setAxiosResult((prevResult) => {
            const updatedResult = prevResult.map((item) =>
              item.id === selectedItem.id ? editedData : item
            );
            return updatedResult;
          });
          setOpenModal(false);
          alert('수정되었습니다.');
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/faq/${id}`)
        .then((response) => {
          console.log("Delete:", response.data);
          setAxiosResult((prevResult) =>
            prevResult.filter((item) => item.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error:", error);
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
      <h1>FAQ</h1>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1vw", float: "right" }}
        onClick={() => {
          setSelectedItem(null);
          setOpenModal(true);
          setEditedData({
            id: "",
            admin_id: getCookie("login"),
            category: "",
            title: "",
            description: "",
          });
        }}
      >
        추가하기
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">관리자ID</TableCell>
              <TableCell align="center">카테고리</TableCell>
              <TableCell align="center">타이틀</TableCell>
              <TableCell align="center">설명</TableCell>
              <TableCell align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
              ? axiosResult
                  .filter((item) => item.id !== 1)
                  .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
              : axiosResult
            ).map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.admin_id}</TableCell>
                <TableCell align="center">{item.category}</TableCell>
                <TableCell
                  style={{
                    maxWidth: "200px",
                    height: "20px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                  align="center"
                >
                  {item.title}
                </TableCell>
                <TableCell
                  style={{
                    maxWidth: "200px",
                    height: "20px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                  align="center"
                >
                  {item.description}
                </TableCell>
                <TableCell align="center">
                  <button
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
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(item.id)}
                  >
                    삭제
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20, { label: "All", value: -1 }]}
          component="div"
          count={axiosResult.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>{selectedItem ? "수정" : "추가하기"}</DialogTitle>
        <DialogContent>
          {selectedItem && (
            <TextField
              label="ID"
              name="id"
              value={editedData.id}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              disabled
            />
          )}
          <TextField
            label="관리자ID"
            name="admin_id"
            value={getCookie("login")}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            disabled
          />
          <TextField
            label="카테고리"
            name="category"
            value={editedData.category}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="타이틀"
            name="title"
            value={editedData.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="설명"
            name="description"
            value={editedData.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>취소</Button>
          <Button
            onClick={selectedItem ? handleUpdate : handleCreate}
            color="primary"
          >
            {selectedItem ? "수정" : "등록"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AFaq;
