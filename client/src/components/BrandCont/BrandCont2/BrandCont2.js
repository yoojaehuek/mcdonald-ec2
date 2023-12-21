import { API_URL } from '../../../config/contansts';
import "./BrandCont2.scss";

const BrandCont02 = ({props}) => {

  return(
    <div className='brandCont02' to={`/${props.prodNum}`}>
      <ul>
        <li>
          <span className='cont2_img'>
            <img src={API_URL+props.cont_img} alt="메인이미지" />
          </span>
          <div className='titmain'>
            <strong>{props.main_tit}</strong>
          </div>
          <p className="txtmain">{props.main_txt}</p>
        </li>
      </ul>
    </div>
  )
}

export default BrandCont02;