import { API_URL } from '../../../config/contansts';
import "./BrandCont3.scss";

const BrandCont03 = ({props}) => {

  return(
    <div className='brandCont03' to={`/${props.prodNum}`}>
      <div className="col2">
        <span className='cont3_img'>
          <img src={API_URL+props.cont_img} alt="메인이미지" />
        </span>
        <div className='tit'>
          <h3>{props.main_tit}</h3>
        </div>
        <p className="txt">{props.main_txt}</p>
        <div className='tit' style={{marginTop: '40px'}}>
          <h3>{props.sub_tit}</h3>
        </div>
        <p className="txt">{props.sub_txt}</p>
      </div>
    </div>
  )
}

export default BrandCont03;