import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../config/contansts';


const ACrew = () => {
  const [axiosResult, setAxiosResult] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/crew`)
    .then(res => {
      console.log(res);
      setAxiosResult(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <>
      {axiosResult.map((item, index) => (
        <div key={index}>
          <p>ID: {item.id}</p>
          <p>AdminID: {item.admin_id}</p>
          <p>StoreID: {item.store_id}</p>
          <p>타이틀: {item.title}</p>
          <p>이름: {item.name}</p>
          <p>이미지: {item.img_url}</p>
          <p>직무: {item.position}</p>
          <p>설명: {item.description}</p>
        </div>
      ))}
    </>
  );
};

export default ACrew;