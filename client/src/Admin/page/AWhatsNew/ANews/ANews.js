import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../../config/contansts';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from '@mui/material';
import ANewsModal from './ANewsModal.js';

const ANews = () => {
  const { pathname } = useLocation(); //url주소 가져오기
  const subcategory_id = pathname.split('/')[3]; //가져온 url주소에서 마지막만 추출
  const [axiosResult, setAxiosResult] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedData, setEditedData] = useState({
    id: '',
    sub_category_id: '',
    title: '',
    thumbnail_img_url: '',
    content_img_url: '',
    seq: '',
    read_count: '',
    created_at: '',
  });

  useEffect(() => {
    axios.get(`${API_URL}/api/whats-new/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setAxiosResult(res.data)
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
      sub_category_id: '',
      title: '',
      thumbnail_img_url: '',
      content_img_url: '',
      seq: '',
      read_count: '',
      created_at: '',
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${API_URL}/api/whats-new/${id}`)
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


  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = axiosResult.slice(startIndex, endIndex);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "1vw", float: 'right', backgroundColor: 'rgb(255, 188, 13)' }}
        onClick={() => {
          setSelectedItem(null);
          setEditedData({
            id: '',
            sub_category_id: subcategory_id,
            title: '',
            thumbnail_img_url: '',
            content_img_url: '',
            seq: '',
            read_count: '',
            created_at: '',
          });
          // setSelectedImage(null);
          setOpenModal(true);
        }}
      >
        추가하기
      </Button>
      <TableContainer component={Paper} style={{ width: "100%", clear: "both" }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "rgb(255, 188, 13)" }}>
              <TableCell style={{ width: "0.1%" }} align="center">
                ID
              </TableCell>
              <TableCell style={{ width: "0.1%" }} align="center">
                Sub_ID
              </TableCell>
              <TableCell style={{ width: "1%" }} align="center">
                타이틀
              </TableCell>
              <TableCell style={{ width: "1%" }} align="center">
                내용 이미지
              </TableCell>
              <TableCell style={{ width: "5%" }} align="center">
                순서
              </TableCell>
              <TableCell style={{ width: "6%" }} align="center">
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
            {displayedData.map((item, index) => (
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
                    onClick={() => {handleDelete(item.id)}}
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
          rowsPerPageOptions={[3, 6, 9, { label: 'All', value: -1 }]}
          component="div"
          count={axiosResult.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <ANewsModal props={{openModal, setOpenModal, handleModalClose, selectedItem, handleInputChange, editedData, setAxiosResult, }} />
    </>
  );
};

export default ANews;
