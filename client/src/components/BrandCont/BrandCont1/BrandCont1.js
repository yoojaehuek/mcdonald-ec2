import { API_URL } from '../../../config/contansts';
import "./BrandCont1.scss";

const BrandCont01 = ({props}) => {

  return(
    <div className='brandCont01' to={`${props.prodNum}`}>
      <div className='cont1_img'>
        <img src={API_URL+props.top_img} alt="브랜드소개콘텐트이미지" />
      </div>
      <h2 className='titDep2'>{props.tit_h2}</h2>
      <p className="txtInfo">{props.txtInfo}</p>
    </div>
  )
}

export default BrandCont01;
