import { NavLink } from 'react-router-dom';
import { API_URL } from '../../config/contansts';
import "./Card.scss";

const Card = ({props}) => {
  //props = {prodNum: 1, prodImg: "/asd/asd/asd.jpg", prodContent: "신선한 토마토와 매콤한 소스의 만남!"}
  console.log("Card/props: ", props);

  return(
    <div className='card'>
      <NavLink to={`/promotion/detail/${props.prodNum}`}>
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
