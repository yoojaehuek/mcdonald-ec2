import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { API_URL } from '../../../config/contansts';

const AEffort = () => {
  const [axiosResult, setAxiosResult] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

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

  return (
    <>
      <h1 style={{ marginLeft: '16vw', marginBottom: '1vw', marginTop: '1vw' }}>Effort</h1>
      <TableContainer component={Paper} style={{ width: '80%', marginLeft: '16vw' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'rgb(255, 188, 13)' }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">AdminId</TableCell>
              <TableCell align="center">타이틀</TableCell>
              <TableCell align="center">타이틀설명</TableCell>
              <TableCell align="center">이미지</TableCell>
              <TableCell align="center">서브타이틀</TableCell>
              <TableCell align="center">서브타이틀설명</TableCell>
              <TableCell style={{ width: "10%" }} align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? axiosResult.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : axiosResult
            ).map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.admin_id}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.title_description}</TableCell>
                <TableCell align="center">
                  <img src={API_URL + item.img_url} alt={`Image-${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
                </TableCell>
                <TableCell align="center">{item.sub_title}</TableCell>
                <TableCell align="center">{item.sub_title_description}</TableCell>
                <TableCell align="center">
                  <button style={{ marginRight: "5px", padding: "5px 10px", backgroundColor: "rgb(255, 188, 13)", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>수정</button>
                  <button style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>삭제</button>
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

export default AEffort;
