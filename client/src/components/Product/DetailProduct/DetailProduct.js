import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from "../../../config/contansts";
import './DetailProduct.scss';

const DetailProduct =()=>{
    const { id } = useParams();
    const detailProd = [
        {id:1, koName:"더블 비프 미트칠리버거 세트", engName:"Double Beef Meat Chili Burger", image:"/upload/detailproduct/burgerDetail.png"},
    ]
    const [isNutritionVisible, setNutritionVisible] = useState(false);
    const [isAllergyVisible, setAllergyVisible] = useState(false);
    const [isOriginVisible, setOriginVisible] = useState(false);

    const handleNutritionButtonClick = () => {
        setNutritionVisible(!isNutritionVisible);
    };
    const handleAllergyButtonClick = () => {
        setAllergyVisible(!isAllergyVisible);
    };
    const handleOriginButtonClick = () => {
        setOriginVisible(!isOriginVisible);
    };
    const renderButtonContent = (isVisible) => {
        return isVisible ? '-' : '+';
    };
    

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
                <li>
                    <button className='btn'onClick={handleNutritionButtonClick}>
                        <div id='toggle-btn'>  
                            <h2>영양정보</h2> <button>{renderButtonContent(isNutritionVisible)}</button>
                        </div>
                        {isNutritionVisible && (
                            <div id='toggle'>
                                <table className='Nutrition-info-table'>
                                    <thead>
                                        <tr>
                                            <th scope="row">영양소</th>
                                            <th scope="col">중량(g)</th>
                                            <th scope="col">중량(ml)</th>
                                            <th scope="col">열량</th>
                                            <th scope="col">당</th>
                                            <th scope="col">단백질</th>
                                            <th scope="col">포화지방</th>
                                            <th scope="col">나트륨</th>
                                            <th scope="col">카페인</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">함량</th>
                                            <td>239g</td>
                                            <td>-</td>
                                            <td>652kcal</td>
                                            <td>11g</td>
                                            <td>31g</td>
                                            <td>14g</td>
                                            <td>1171mg</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">영양소기준치</th>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>11%</td>
                                            <td>57%</td>
                                            <td>93%</td>
                                            <td>59%</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </button>
                </li>
                <li>
                    <button className='btn'onClick={handleAllergyButtonClick}>
                        <div id='toggle-btn'>  
                            <h2>알레르기 정보</h2> <button> {renderButtonContent(isAllergyVisible)}</button>
                        </div>
                        {isAllergyVisible && (
                            <div id="toggle">
                            <p>
                                <b>알레르기 유발 가능 식재료</b><span> (난류,우유,대두,밀,돼지고기,토마토,쇠고기)</span> <br/>
                                <b>* 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.</b>
                            </p>
                            </div>
                        )}
                    </button>
                </li>
                <li>
                    <button className='btn' onClick={handleOriginButtonClick}>
                        <div id='toggle-btn'>  
                            <h2>원산지 정보</h2>  <button>{renderButtonContent(isOriginVisible)}</button>
                        </div>
                        {isOriginVisible && (
                            <div id="toggle">
                                <p>
                                    <b>
                                        쇠고기:호주산 <br/>
                                        돼지고기(베이컨):외국산(아일랜드,스페인,캐나다)
                                    </b>
                                </p>
                            </div>
                        )}
                    </button>
                </li>
            </div>
            
        </div>
	)
}

export default DetailProduct;