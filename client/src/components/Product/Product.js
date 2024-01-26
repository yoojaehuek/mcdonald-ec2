import { API_URL } from "../../config/contansts";
import { NavLink } from 'react-router-dom'
import './Product.scss';

const Product =({props})=>{
	console.log("product에서 받은 props",props);
	return(
	<NavLink to={`/menu/${props.sub_category_id}/${props.id}`}> {/** 메뉴/카테고리id/상품id */}
		<div id="product">
			<div>
				<img src={API_URL+props.thumbnail_img_url} alt=""/>
			</div>
			<div id="prd-name">
				<h3>{props.k_name}</h3>
				<p>{props.e_name}</p>
			</div>		
		</div>
	</NavLink>
	)
}

export default Product;