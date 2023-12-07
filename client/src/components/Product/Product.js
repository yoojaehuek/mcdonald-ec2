import { API_URL } from "../../config/contansts";
import './Product.scss';
const Product =({props})=>{
	return(
		<div id="product">
			<div>
				<img src={API_URL+props.image} alt="" />
			</div>
			<div id="prd-name">
				<h3>{props.koName}</h3>
				<p>{props.engName}</p>
			</div>		
		</div>
	)
}

export default Product ;