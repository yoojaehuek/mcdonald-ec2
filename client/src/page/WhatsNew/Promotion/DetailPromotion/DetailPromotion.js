import { useParams, NavLink } from 'react-router-dom';
import { API_URL } from '../../../../config/contansts';
import { useEffect } from 'react';
import './DetailPromotion.scss';

const DetailPromotion = () => {
  const {prodNum} = useParams();
  console.log(prodNum);

  useEffect(()=> {
    
  }, []);

  const tmp = {title: "신선한 토마토와 매콤한 소스의 만남!", date: "2023-11-30", read_count: "1200", content: "/upload/promotion/1679374416681.jpg"}
  return(
    <div className='inner'>
      <div className='detail_Promotion_Top'>
        <h2 className='detail_Promotion_Title'>{tmp.title}</h2>
        <div>
          <span>{tmp.date}</span>
          <span>{tmp.read_count}</span>
        </div>
      </div>
      <div className='detail_Promotion_Content'>
        <img src={API_URL+tmp.content} alt="content 이미지" />
      </div>
      <div className='detail_Promotion_BtnArea'>
        <button>{`<`}</button>
        <button>목록으로</button>
        <button>{`>`}</button>
      </div>
    </div>
  )
}

export default DetailPromotion; 