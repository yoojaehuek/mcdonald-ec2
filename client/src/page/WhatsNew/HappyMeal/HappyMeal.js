import './HappyMeal.scss'
import Card from '../../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';

// const items = [
//   {table: "happymeal", prodNum: 1, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
//   {table: "happymeal", prodNum: 2, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
//   {table: "happymeal", prodNum: 3, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
// ]

const HappyMeal = () => {
  const { pathname } = useLocation();
  const subcategory_id = pathname.split('/')[2];

  const [items, setItems] = useState([]);

  console.log("Promotion/subcategory_id: ", subcategory_id);
  useEffect(()=>{
    axios.get(`${API_URL}/whats-new/subcategory/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setItems(res.data);
    }).catch(err => {
      console.error(err);
    })
  })
  return(
    <>
      <div className="contArea">
        <div className="inner">
          <div id='cardList'>
            {items.map((item, index)=> 
              <Card key={index} props={item} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HappyMeal; 