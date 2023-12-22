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
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../config/contansts";

const ACrew = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    id: "",
    admin_id: "",
    store_id: "",
    title: "",
    name: "",
    img_url: "",
    position: "",
    description: "",
  });

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
    setUpdatedData(item);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleUpdate = () => {
    if (selectedItem) {
      axios
        .patch(`${API_URL}/crew/${selectedItem.id}`, updatedData)
        .then((response) => {
          console.log("Update :", response.data);
          setAxiosResult((prevResult) => {
            const updatedResult = prevResult.map((item) => (item.id === selectedItem.id ? updatedData : item));
            return updatedResult;
          });
          setOpenModal(false);
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
  };
  

  const handleDelete = (id) => {
    const userConfirmed = window.confirm("정말 삭제하시겠습니까?");
    if (userConfirmed) {
      axios
        .delete(`${API_URL}/crew/${id}`)
        .then((response) => {
          console.log("Delete:", response.data);
          setAxiosResult((prevResult) => prevResult.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 style={{ marginLeft: "16vw", marginBottom: "1vw", marginTop: "1vw" }}>Crew</h1>
      <TableContainer component={Paper} style={{ width: "80%", marginLeft: "16vw" }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell style={{ width: "1%" }} align="center">
                ID
              </TableCell>
              <TableCell style={{ width: "1%" }} align="center">
                AdminID
              </TableCell>
              <TableCell style={{ width: "1%" }} align="center">
                StoreID
              </TableCell>
              <TableCell style={{ width: "6%" }} align="center">
                타이틀
              </TableCell>
              <TableCell style={{ width: "2%" }} align="center">
                이름
              </TableCell>
              <TableCell style={{ width: "5%" }} align="center">
                이미지
              </TableCell>
              <TableCell style={{ width: "2%" }} align="center">
                직무
              </TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                설명
              </TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {axiosResult.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.admin_id}</TableCell>
                <TableCell align="center">{item.store_id}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  {item.img_url.startsWith("http") ? (
                    <img src={item.img_url} alt="Crew" style={{ width: "100px", height: "100px" }} />
                  ) : (
                    <img src={API_URL + item.img_url} alt="Crew" style={{ width: "100px", height: "100px" }} />
                  )}
                </TableCell>
                <TableCell align="center">{item.position}</TableCell>
                <TableCell
                  style={{ maxWidth: "200px", height: "100px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
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
                    onClick={() => handleDelete(item.id)}
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
        <DialogTitle>수정</DialogTitle>
        <DialogContent>
          <TextField label="ID" name="id" value={updatedData.id} onChange={handleInputChange} fullWidth margin="normal" disabled />
          <TextField
            label="AdminID"
            name="admin_id"
            value={updatedData.admin_id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="StoreID"
            name="store_id"
            value={updatedData.store_id}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="타이틀"
            name="title"
            value={updatedData.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField label="이름" name="name" value={updatedData.name} onChange={handleInputChange} fullWidth margin="normal" />
          <TextField
            label="이미지 URL"
            name="img_url"
            value={updatedData.img_url}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="직무"
            name="position"
            value={updatedData.position}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="설명"
            name="description"
            value={updatedData.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
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


export default ACrew;
