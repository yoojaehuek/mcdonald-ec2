import './Promotion_HappyMeal.scss'
import Card from '../../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';


const Promotion_HappyMeal = () => {
  const { pathname } = useLocation();
  const subcategory_id = pathname.split('/')[2];

  const [items, setItems] = useState([]);

  // console.log("Promotion/subcategory_id: ", subcategory_id);
  useEffect(()=>{
    axios.get(`${API_URL}/whats-new/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setItems(res.data);
    }).catch(err => {
      console.error(err);
      alert('요청하신 페이지가 없습니다.');
    })
  },[subcategory_id])

  return(
    <>
      <div className="promotion-happymeal-contArea">
        <div className="inner">
          <div id='cardList'>
            {items.map((item, index)=> 
              <Card key={index} props={item}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotion_HappyMeal; 