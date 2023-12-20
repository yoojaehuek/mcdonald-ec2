import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';


const ANews = () => {
  const { pathname } = useLocation(); //url주소 가져오기
  const subcategory_id = pathname.split('/')[3]; //가져온 url주소에서 마지막만 추출

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/whats-new/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setItems(res.data)
    })
    .catch(err => {
      console.error(err);
    })
  }, [subcategory_id]);
  return (
    <>
    {items.map((item, index) => (
      <h1 key={index}>{item.id}</h1>
    ))}
    </>
  );
};

export default ANews;
