import React from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from "../../../config/contansts";
import './DetailProduct.scss';

const DetailProduct =()=>{
    const { id } = useParams();
    const detailProd = [
        {id:1, koName:"더블 비프 미트칠리버거 세트", engName:"Double Beef Meat Chili Burger", image:"/upload/detailproduct/burgerDetail.png"},
    ]
	return(
        <div id='burger-Detail'>
            <div>
                <h1>더블 비프 미트칠리버거</h1>
                <p>Double Beef Meat Chili Burger</p>
                <li>
                    <img src={API_URL+detailProd.image} alt=""/>
                </li>
                <p>
                    진한 고기맛 살리는 미트칠리 소스에 상큼한 사워크림,
                    순쇠고기 100% 패티 2장과 짭조롬한 치즈와 베이컨까지!
                    연말엔 더블 비프 미트칠리 버거!
                </p>
                <p>
                    *판매 시간: 10:30AM~04:00AM
                </p>
            </div>

            <div id='menu-info'>
                <li><button><h1>영양정보</h1></button></li>
                <li><button><h1>알레르기정보</h1> </button></li>
                <li><button><h1>원산지정보</h1></button></li>
            </div>
            
        </div>
	)
}

export default DetailProduct;