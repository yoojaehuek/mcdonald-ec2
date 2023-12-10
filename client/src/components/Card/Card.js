import { NavLink, useLocation } from 'react-router-dom';
import { API_URL } from '../../config/contansts';
import "./Card.scss";

const Card = ({props}) => {
  const { pathname } = useLocation();
  const table = pathname.split('/')[1];

  return(
    <div className='card'>
      <NavLink to={`/${props.table}/detail/${props.prodNum}`}>
        <div className="cardImg">
          <img src={API_URL+props.prodImg} alt="카드이미지" />
        </div>
        <div className="cardName">
          <strong>{props.prodContent}</strong>
        </div>
      </NavLink>
    </div>
  )
}
export default Card; 
