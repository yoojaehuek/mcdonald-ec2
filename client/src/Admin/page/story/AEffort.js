import axios from "axios";
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
  Input,
} from "@mui/material";
import { API_URL } from "../../../config/contansts";
import { getCookie } from "../../../utils/cookie";

const AEffort = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedData, setEditedData] = useState({
    id: "",
    admin_id: getCookie("login"),
    title: "",
    title_description: "",
    img_url: "",
    sub_title: "",
    sub_title_description: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/effort`)
      .then((res) => {
        console.log(res);
        setAxiosResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
      title: "",
      title_description: "",
      img_url: "",
      sub_title: "",
      sub_title_description: "",
    });
    setSelectedImage(null);
  };

  const handleCreate = () => {
    const { id, ...dataWithoutId } = editedData;
    const formData = new FormData();
    formData.append("image", selectedImage);
    axios
      .post(`${API_URL}/image`, formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        const newData = { ...dataWithoutId, img_url: imageUrl };
        axios
          .post(`${API_URL}/effort`, newData)
          .then((response) => {
            console.log("Create:", response.data);
            setAxiosResult((prevResult) => [...prevResult, response.data]);
            setOpenModal(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error image:", error);
      });
  };

  const handleUpdate = () => {
    if (selectedItem) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      axios
        .post(`${API_URL}/image`, formData)
        .then((response) => {
          const imageUrl = response.data.imageUrl;
          const updatedData = { ...editedData, img_url: imageUrl };
          axios
            .patch(`${API_URL}/effort/${selectedItem.id}`, updatedData)
            .then((response) => {
              console.log("Update:", response.data);
              setAxiosResult((prevResult) => {
                const updatedResult = prevResult.map((item) =>
                  item.id === selectedItem.id ? updatedData : item
                );
                return updatedResult;
              });
              setOpenModal(false);
              alert('수정되었습니다.');
            })
            .catch((error) => {
              console.error("error:", error);
            });
        })
        .catch((error) => {
          console.error("Error image:", error);
        });
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("혼또 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/effort/${id}`)
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

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <>
      <h1>Effort</h1>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1vw", float: 'right', backgroundColor: 'rgb(255, 188, 13)' }}
        onClick={() => {
          setSelectedItem(null);
          setOpenModal(true);
          setEditedData({
            id: "",
            admin_id: getCookie("login"),
            title: "",
            title_description: "",
            img_url: "",
            sub_title: "",
            sub_title_description: "",
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
              <TableCell align="center">AdminId</TableCell>
              <TableCell align="center">타이틀</TableCell>
              <TableCell align="center">타이틀설명</TableCell>
              <TableCell align="center">이미지</TableCell>
              <TableCell align="center">서브타이틀</TableCell>
              <TableCell align="center">서브타이틀설명</TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? axiosResult.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : axiosResult
            ).map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.admin_id}</TableCell>
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
                  {item.title_description}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={API_URL + item.img_url}
                    alt={`Image-${index}`}
                    style={{ maxWidth: "30%", height: "auto" }}
                  />
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
                  {item.sub_title}
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
                  {item.sub_title_description}
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
          rowsPerPageOptions={[4, 8, 12, { label: "All", value: -1 }]}
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
            label="AdminID"
            name="admin_id"
            value={getCookie("login")}
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
            label="타이틀설명"
            name="title_description"
            value={editedData.title_description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ marginTop: "1rem" }}
          />
          <TextField
            label="서브타이틀"
            name="sub_title"
            value={editedData.sub_title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="서브타이틀설명"
            name="sub_title_description"
            value={editedData.sub_title_description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={selectedItem ? handleUpdate : handleCreate}
            color="primary"
          >
            {selectedItem ? "수정" : "등록"}
          </Button>
          <Button onClick={handleModalClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AEffort;
