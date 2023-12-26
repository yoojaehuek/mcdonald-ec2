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

const Material = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedData, setEditedData] = useState({
    id: "",
    admin_id: "",
    title: "",
    description: "",
    additional_info: "",
    img_url: "",
    background_img_url: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/material`)
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
      description: "",
      additional_info: "",
      img_url: "",
      background_img_url: "",
    });
    setSelectedImage(null);
    setSelectedBackgroundImage(null);
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

        if (selectedBackgroundImage) {
          const backgroundFormData = new FormData();
          backgroundFormData.append("image", selectedBackgroundImage);

          axios
            .post(`${API_URL}/image`, backgroundFormData)
            .then((backgroundResponse) => {
              const backgroundImageUrl = backgroundResponse.data.imageUrl;
              newData.background_img_url = backgroundImageUrl;

              axios
                .post(`${API_URL}/material`, newData)
                .then((response) => {
                  console.log("Create:", response.data);
                  setAxiosResult((prevResult) => [
                    ...prevResult,
                    response.data,
                  ]);
                  setOpenModal(false);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            })
            .catch((error) => {
              console.error("Error backgroundimage:", error);
            });
        } else {
          axios
            .post(`${API_URL}/material`, newData)
            .then((response) => {
              console.log("Create:", response.data);
              setAxiosResult((prevResult) => [...prevResult, response.data]);
              setOpenModal(false);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
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

          if (selectedBackgroundImage) {
            const backgroundFormData = new FormData();
            backgroundFormData.append("image", selectedBackgroundImage);

            axios
              .post(`${API_URL}/image`, backgroundFormData)
              .then((backgroundResponse) => {
                const backgroundImageUrl = backgroundResponse.data.imageUrl;
                updatedData.background_img_url = backgroundImageUrl;

                axios
                  .patch(`${API_URL}/material/${selectedItem.id}`, updatedData)
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
                console.error("Error backgroundimage:", error);
              });
          } else {
            axios
              .patch(`${API_URL}/material/${selectedItem.id}`, updatedData)
              .then((response) => {
                console.log("Update:", response.data);
                setAxiosResult((prevResult) => {
                  const updatedResult = prevResult.map((item) =>
                    item.id === selectedItem.id ? updatedData : item
                  );
                  return updatedResult;
                });
                setOpenModal(false);
              })
              .catch((error) => {
                console.error("error:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error image:", error);
        });
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleBackgroundImageChange = (e) => {
    setSelectedBackgroundImage(e.target.files[0]);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("혼또 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/material/${id}`)
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

  return (
    <>
      <h1>Material</h1>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1vw", float: "right" }}
        onClick={() => {
          setSelectedItem(null);
          setOpenModal(true);
        }}
      >
        추가하기
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">AdminID</TableCell>
              <TableCell align="center">타이틀</TableCell>
              <TableCell align="center">설명</TableCell>
              <TableCell align="center">세부정보</TableCell>
              <TableCell align="center">이미지</TableCell>
              <TableCell align="center">백그라운드이미지</TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {axiosResult
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
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
                    {item.description}
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
                    {item.additional_info}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={API_URL + item.img_url}
                      alt={`Image-${index}`}
                      style={{ maxWidth: "50%", height: "auto" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={API_URL + item.background_img_url}
                      alt={`Background Image-${index}`}
                      style={{ maxWidth: "50%", height: "auto" }}
                    />
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
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={axiosResult.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>{selectedItem ? "수정" : "추가"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Admin ID"
            fullWidth
            value={editedData.admin_id}
            onChange={(e) =>
              setEditedData({ ...editedData, admin_id: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="타이틀"
            fullWidth
            value={editedData.title}
            onChange={(e) =>
              setEditedData({ ...editedData, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="설명"
            fullWidth
            value={editedData.description}
            onChange={(e) =>
              setEditedData({ ...editedData, description: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="세부정보"
            fullWidth
            value={editedData.additional_info}
            onChange={(e) =>
              setEditedData({ ...editedData, additional_info: e.target.value })
            }
          />
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          <Input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>취소</Button>
          <Button onClick={selectedItem ? handleUpdate : handleCreate}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Material;
