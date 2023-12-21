import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/contansts';


const AVisualbackground = () => {

  const [axiosResult, setAxiosResult] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/visualbackground`)
    .then(res => {
      console.log(res.data);
      setAxiosResult(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <>
      {axiosResult.map(() => (
        <div>
        </div>
      ))}
    </>
  );
};

export default AVisualbackground;
