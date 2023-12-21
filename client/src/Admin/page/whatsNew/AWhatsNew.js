import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
import Table from '../../Component/Table/Table';


const AWhatsNew = () => {
  const { pathname } = useLocation();
  const subcategory_id = pathname.split('/')[3];

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/whats-new/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setItems(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [subcategory_id]);
  return (
    <>
      <h1>Your React Table</h1>
      <Table data={items}></Table>
    </>
  );
};

export default AWhatsNew;
