import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
import './AOption.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from '@mui/material';

const AOption = () => {
  const [items, setItems] = useState([]);

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

  const handleEdit = (id) => {
    // 수정 로직 구현
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id) => {
    // 삭제 로직 구현
    console.log(`Delete item with ID ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>상품이름</TableCell>
            <TableCell>가격</TableCell>
            <TableCell>관리</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleEdit(item.id)}>
                  수정
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(item.id)}>
                  삭제
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AOption;
