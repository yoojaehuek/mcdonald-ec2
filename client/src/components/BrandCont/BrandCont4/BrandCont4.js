import { API_URL } from '../../../config/contansts';
import "./BrandCont4.scss";

const BrandCont04 = ({props}) => {

  return(
    <ul className='brandCont04' to={`/${props.prodNum}`}>
      <li>
        <span className='cont4_img'>
          <img src={API_URL+props.cont_img} alt="메인이미지" />
        </span>
        <div class='titmain'>
          <strong>{props.main_tit}</strong>
        </div>
        <p class="txtmain">{props.main_txt}</p>
      </li>
    </ul>
  )
}

export default BrandCont04;