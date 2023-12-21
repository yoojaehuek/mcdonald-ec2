import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../config/contansts';
import "./BrandInner_btn.scss";

const BrandInner_btn = ({props}) => {

  return(
    <div className='inner_btn'>
      <NavLink to={`//${props.prodNum}`}>
        
      </NavLink>
    </div>
  )
}
export default BrandInner_btn; 
