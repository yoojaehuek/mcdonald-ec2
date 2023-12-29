import { NavLink, useLocation } from 'react-router-dom';
import { API_URL } from '../../config/contansts';
import "./Card.scss";

const Card = ({props}) => {
  const { pathname } = useLocation();

  return(
    <div className='card'>
      <NavLink to={`/whats-new/${props.sub_category_id}/${props.id}`}>
        <div className="cardImg">
          <img src={API_URL+props.thumbnail_img_url} alt="카드이미지" />
        </div>
        <div className="cardName">
          <strong>{props.title}</strong>
        </div>
      </NavLink>
    </div>
  )
}
export default Card; 
