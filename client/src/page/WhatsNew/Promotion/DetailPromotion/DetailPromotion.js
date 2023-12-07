import { useParams, NavLink, useLocation } from 'react-router-dom';
import { API_URL } from '../../../../config/contansts';
import { useEffect, useState } from 'react';
import BtnArea from '../../../../components/BtnArea/BtnArea';
import './DetailPromotion.scss';

const tmps = [
  {table: "promotion", id: 1, title: "신선한 토마토와 매콤한 소스의 만남!", date: "2023-11-30", read_count: "1200", content: "/upload/whatsNew/promotion/1679374416681.jpg"},
  {table: "promotion", id: 2, title: "미트칠리 버거와 연말을 더 특별하게", date: "2023-11-30", read_count: "1200", content: "/upload/whatsNew/promotion/1701410863762.jpg"},
  {table: "promotion", id: 3, title: "갓성비 간식 맛집, 맥도날드 해피 스낵!", date: "2023-11-30", read_count: "1200", content: "/upload/whatsNew/promotion/1697093210662.jpg"},
  {table: "promotion", id: 4, title: "맥도날드 M오더", date: "2023-11-30", read_count: "1200", content: "/upload/whatsNew/promotion/1698130994298.jpg"},
  {table: "promotion", id: 5, title: "상콤달콤!\nNEW 자두 천도복숭아 칠러 출시!", date: "2023-11-30", read_count: "1200", content: "/upload/whatsNew/promotion/1680713561787.jpg"},
  {table: "promotion", id: 6, title: "첫 적립 시 2000 포인트 제공!\n새로워진 마이 맥도날드 리워드!", date: "2023-11-30", read_count: "1200", content: "/upload/whatsNew/promotion/1680855222777.jpg"},
  {table: "happymeal", id: 1, title: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!", date: "2023-12-25", read_count: "101010", content: "/upload/whatsNew/happyMeal/1698285826592.jpg"},
]

const DetailPromotion = () => {
  const { pathname } = useLocation();
  
  const [targetObject, setTargetObject] = useState({});
  
  useEffect(()=> {
    const splitUrl = pathname?.split('/') ?? null;
    console.log("DetailPromotion/locationHook: ",splitUrl);

    setTargetObject(tmps.find(item => item.id == splitUrl[3] && item.table == splitUrl[1]));
  }, [pathname]);


  return(
    <div className='inner'>
      <div className='detail_Promotion_Top'>
        <h2 className='detail_Promotion_Title'>{targetObject.title}</h2>
        <div>
          <b>{targetObject.date}</b>
          <b>{targetObject.read_count}</b>
        </div>
      </div>
      <div className='detail_Promotion_Content'>
        <img src={API_URL+targetObject.content} alt="content 이미지" />
      </div>
      <BtnArea></BtnArea>
    </div>
  )
}

export default DetailPromotion; 