import axios from 'axios';
import React, { useEffect } from 'react';
import { API_URL } from '../../config/contansts';


const AProduct = () => {
  useEffect(() => {
    axios.get(`${API_URL}/product`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <>
      <h1>product</h1>
    </>
  );
};

export default AProduct;
