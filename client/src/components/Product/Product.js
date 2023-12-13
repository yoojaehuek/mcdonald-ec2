import { API_URL } from "../../config/contansts";
import { NavLink } from 'react-router-dom'
import './Product.scss';

const Product =({props})=>{
	console.log("props.id",props.id);
	return(
	<NavLink to={`${props.id}`}>
		<div id="product">
			<div>
				<img src={API_URL+props.image} alt=""/>
			</div>
			<div id="prd-name">
				<h3>{props.koName}</h3>
				<p>{props.engName}</p>
			</div>		
		</div>
	</NavLink>
	)
}

export default Product;