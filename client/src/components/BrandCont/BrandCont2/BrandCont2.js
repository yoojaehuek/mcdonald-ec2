import { API_URL } from '../../../config/contansts';
import "./BrandCont2.scss";

const BrandCont02 = ({props}) => {

  return(
    <div className='brandCont02' to={`/${props.prodNum}`}>
      <div className='cont2_img'>
        <img src={API_URL+props.cont_img} alt="메인이미지" />
      </div>
      <div class='titmain'>
        <strong>{props.main_tit}</strong>
      </div>
      <p class="txtmain">{props.main_txt}</p>
    </div>
  )
}

export default BrandCont02;