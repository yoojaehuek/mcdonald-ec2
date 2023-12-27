import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
import StoreTable from '../../Component/StoreTable/StoreTable';


const AStore = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/store`)
    .then(res => {
      console.log(res.data);
      setItems(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  return (
    <>
      <h1>store</h1>
      <StoreTable data={{items, setItems}}></StoreTable>
    </>
  );
};

export default AStore;
