import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../config/contansts';
import Ftable from '../../Component/FaqTable/FaqTable';


const AFaq = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/faq`)
    .then(res => {
      console.log(res.data);
      setItems(res.data)
    })
    .catch(err => {
      console.error(err);
    })
  },[]);
  return (
    <>
      <h1>Your React Table</h1>
      <Ftable data={items}></Ftable>
    </>
  );
};

export default AFaq;
