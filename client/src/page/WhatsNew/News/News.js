import './News.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, NavLink } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';


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
                  <img className='news-icon' src="../images/icon/ico_notice.png" alt="" />
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