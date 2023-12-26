import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
// import Table from '../../Component/Table/Table';
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
} from '@mui/material';


const AWhatsNew = () => {
  const { pathname } = useLocation();
  const subcategory_id = pathname.split('/')[3];

  const [axiosResult, setAxiosResult] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedData, setEditedData] = useState({
    id: '',
    admin_id: '',
    title: '',
    title_description: '',
    img_url: '',
    sub_title: '',
    sub_title_description: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/whats-new/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setAxiosResult(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [subcategory_id]);

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
      id: '',
      admin_id: '',
      title: '',
      title_description: '',
      img_url: '',
      sub_title: '',
      sub_title_description: '',
    });
    setSelectedImage(null);
  };

  const handleCreate = () => {
    const { id, ...dataWithoutId } = editedData;
    const formData = new FormData();
    formData.append('image', selectedImage);

    axios
      .post(`${API_URL}/image`, formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        const newData = { ...dataWithoutId, img_url: imageUrl };

        axios
          .post(`${API_URL}/effort`, newData)
          .then((response) => {
            console.log('Create:', response.data);
            setAxiosResult((prevResult) => [...prevResult, response.data]);
            setOpenModal(false);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch((error) => {
        console.error('Error image:', error);
      });
  };

  const handleUpdate = () => {
    if (selectedItem) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      axios
        .post(`${API_URL}/image`, formData)
        .then((response) => {
          const imageUrl = response.data.imageUrl;
          const updatedData = { ...editedData, img_url: imageUrl };

          axios
            .patch(`${API_URL}/effort/${selectedItem.id}`, updatedData)
            .then((response) => {
              console.log('Update:', response.data);
              setAxiosResult((prevResult) => {
                const updatedResult = prevResult.map((item) =>
                  item.id === selectedItem.id ? updatedData : item
                );
                return updatedResult;
              });
              setOpenModal(false);
            })
            .catch((error) => {
              console.error('error:', error);
            });
        })
        .catch((error) => {
          console.error('Error image:', error);
        });
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("혼또 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/effort/${id}`)
        .then((response) => {
          console.log('Delete:', response.data);
          setAxiosResult((prevResult) => prevResult.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.error('Error:', error);
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
      {/* <h1>Your React Table</h1> */}
      {/* <Table data={items}></Table> */}
      <TableContainer component={Paper} style={{ width: "80%", marginLeft: "16vw" }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell style={{ width: "1%" }} align="center">
                ID
              </TableCell>
              <TableCell style={{ width: "1%" }} align="center">
                Sub_ID
              </TableCell>
              <TableCell style={{ width: "1%" }} align="center">
                타이틀
              </TableCell>
              <TableCell style={{ width: "6%" }} align="center">
                섬네일 이미지
              </TableCell>
              <TableCell style={{ width: "2%" }} align="center">
                내용 이미지
              </TableCell>
              <TableCell style={{ width: "5%" }} align="center">
                순서
              </TableCell>
              <TableCell style={{ width: "2%" }} align="center">
                조회수
              </TableCell>
              <TableCell style={{ width: "10%" }} align="center">
                작성일
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
                <TableCell align="center">{item.sub_category_id}</TableCell>
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
                  {item.title}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={API_URL + item.thumbnail_img_url}
                    alt="Crew"
                    style={{ width: "100px", height: "100px" }}
                  />
                </TableCell>
                <TableCell align="center">
                  <img
                    src={API_URL + item.content_img_url}
                    alt="Crew"
                    style={{ width: "100px", height: "100px" }}
                  />
                </TableCell>
                <TableCell align="center">{item.seq}</TableCell>
                <TableCell align="center">{item.read_count}</TableCell>
                <TableCell align="center">{item.created_at}</TableCell>
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
        <TablePagination
          rowsPerPageOptions={[4, 8, 12, { label: 'All', value: -1 }]}
          component="div"
          count={axiosResult.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default AWhatsNew;
