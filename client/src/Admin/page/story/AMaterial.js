import axios from 'axios';
import React, { useEffect } from 'react';
import { API_URL } from '../../../config/contansts';


const AMaterial = () => {
  useEffect(() => {
    axios.get(`${API_URL}/faq`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <>
      <h1>Material</h1>
    </>
  );
};

export default AMaterial;
