import './Promotion_HappyMeal.scss'
import Card from '../../../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';

// const items = [
//   {table: "promotion", prodNum: 1, prodImg: "/upload/whatsNew/promotion/1700550501889.jpg", prodContent: "신선한 토마토와 매콤한 소스의 만남!"},
//   {table: "promotion", prodNum: 2, prodImg: "/upload/whatsNew/promotion/1701069859118.jpg", prodContent: "미트칠리 버거와 연말을 더 특별하게"},
//   {table: "promotion", prodNum: 3, prodImg: "/upload/whatsNew/promotion/1696925069360.jpg", prodContent: "갓성비 간식 맛집, 맥도날드 해피 스낵!"},
//   {table: "promotion", prodNum: 4, prodImg: "/upload/whatsNew/promotion/1696768788564.jpg", prodContent: "맥도날드 M오더"},
//   {table: "promotion", prodNum: 5, prodImg: "/upload/whatsNew/promotion/1680500594149.jpg", prodContent: "상콤달콤!\n NEW 자두 천도복숭아 칠러 출시!"},
//   {table: "promotion", prodNum: 6, prodImg: "/upload/whatsNew/promotion/1679374416689.jpg", prodContent: "첫 적립 시 2000 포인트 제공!\n 새로워진 마이 맥도날드 리워드!"},
// ]

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