import { NavLink } from 'react-router-dom';
import './thum.scss';

const thum = ({props}) => {
    console.log("thum/props: ", props);

    return(
        <div className='thum'>
            <NavLink to={`/Society/Sodetail/${props.prodNum}`}>
                <div className='thumimg'>
                    <img src={thum.prodNum.prodImg} alt="소셜"/>
                </div>                
            </NavLink>
        </div>
    )
}
export default thum;