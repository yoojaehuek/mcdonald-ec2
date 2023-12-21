import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
import Ftable from '../../Component/FaqTable/FaqTable';


const AFaq = () => {
  const { pathname } = useLocation(); //url주소 가져오기
  // const subcategory_id = pathname.split('/')[3]; //가져온 url주소에서 마지막만 추출

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
