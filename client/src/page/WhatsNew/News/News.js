import './News.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, NavLink } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';

// const items = [
//   {table: "happymeal", prodNum: 1, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
//   {table: "happymeal", prodNum: 2, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
//   {table: "happymeal", prodNum: 3, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
// ]

const News = () => {
  const { pathname } = useLocation();
  const subcategory_id = pathname.split('/')[2];

  const [items, setItems] = useState([]);

  console.log("Promotion/subcategory_id: ", subcategory_id);
  useEffect(()=>{
    axios.get(`${API_URL}/api/whats-new/${subcategory_id}`)
    .then(res => {
      console.log(res.data);
      setItems(res.data);
    }).catch(err => {
      console.error(err);
    })
  },[])
  return(
    <>
      <div className="news-contArea">
        <div className="inner">
          <div id='news-length'>
            <strong>총 <span className='color-red'>{items.length}건</span>의 게시글이 있습니다.</strong>
          </div>
          <ul id='list'>
            {items.map((item, index)=>
              <li key={index} className={'list-item'}>
                <NavLink to={`/whats-new/${subcategory_id}/${item.id}`}>
                  <img className='news-icon' src="/images/icon/ico_notice.png" alt="" />
                  <strong className='item-title'>{item.title}</strong>
                  <span>{item.created_at}</span>
                </NavLink>
              </li> 
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default News; 