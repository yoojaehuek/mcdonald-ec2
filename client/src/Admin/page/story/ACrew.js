import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Input,
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../config/contansts";

const ACrew = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editedData, setEditedData] = useState({
    id: "",
    admin_id: "",
    store_id: "",
    title: "",
    name: "",
    img_url: "",
    position: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/crew`)
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

  const handleCreate = () => {
    const { id, ...dataWithoutId } = editedData;
    const formData = new FormData();
    formData.append("image", selectedImage);

    axios
      .post(`${API_URL}/image`, formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        const newData = { ...dataWithoutId, img_url: imageUrl };
        axios.post(`${API_URL}/crew`, newData)
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
          axios.patch(`${API_URL}/crew/${selectedItem.id}`, updatedData)
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
      <h1>Crew</h1>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1vw", float: 'right' }}
        onClick={() => {
          setSelectedItem(null);
          setEditedData({
            id: "",
            admin_id: "",
            store_id: "",
            title: "",
            name: "",
            img_url: "",
            position: "",
            description: "",
          });
          setSelectedImage(null);
          setOpenModal(true);
        }}
      >
        추가하기
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell style={{ width: "0.5%" }} align="center">
                ID
              </TableCell>
              <TableCell style={{ width: "0.5%" }} align="center">
                AdminID
              </TableCell>
              <TableCell style={{ width: "0.5%" }} align="center">
                StoreID
              </TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                타이틀
              </TableCell>
              <TableCell style={{ width: "4%" }} align="center">
                이름
              </TableCell>
              <TableCell style={{ width: "3%" }} align="center">
                이미지
              </TableCell>
              <TableCell style={{ width: "2%" }} align="center">
                직무
              </TableCell>
              <TableCell style={{ width: "5%" }} align="center">
                설명
              </TableCell>
              <TableCell style={{ width: "5%" }} align="center">
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {axiosResult && axiosResult.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.admin_id}</TableCell>
                <TableCell align="center">{item.store_id}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  {item.img_url && item.img_url.startsWith("http") ? (
                    <img
                      src={item.img_url}
                      alt="Crew"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    <img
                      src={API_URL + item.img_url}
                      alt="Crew"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </TableCell>
                <TableCell align="center">{item.position}</TableCell>
                <TableCell
                  style={{
                    maxWidth: "200px",
                    height: "100px",
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
                    onClick={() => handleEditClick(item)}
                    style={{
                      marginRight: "5px",
                      padding: "5px 10px",
                      backgroundColor: "rgb(255, 188, 13)",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      const userConfirmed = window.confirm("정말 삭제하시겠습니까?");
                      if (userConfirmed) {
                        axios
                          .delete(`${API_URL}/crew/${item.id}`)
                          .then((response) => {
                            console.log("Delete:", response.data);
                            setAxiosResult((prevResult) =>
                              prevResult.filter((entry) => entry.id !== item.id)
                            );
                          })
                          .catch((error) => {
                            console.error("error:", error);
                          });
                      }
                    }}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    삭제
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
            value={editedData.admin_id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="StoreID"
            name="store_id"
            value={editedData.store_id}
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
            label="이름"
            name="name"
            value={editedData.name}
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
            label="직무"
            name="position"
            value={editedData.position}
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
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>취소</Button>
          <Button onClick={selectedItem ? handleUpdate : handleCreate} color="primary">
            {selectedItem ? "수정" : "등록"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ACrew;

//213