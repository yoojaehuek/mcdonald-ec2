import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from "../../../config/contansts";
import './DetailProduct.scss';

const DetailProduct =()=>{
    const { id } = useParams();// 이거로 id 가저와서 axios.get() 보내서 
    console.log("id: ", id);
    //페이지 열때 get으로 상품정보 가져오고 정보중에서 가격이랑 옵션 등 만 수정해서 로컬로 보냄 
    const [number, setNumber] = useState(1); //상품개수 증감변수
    const [isOptionVisible, setOptionVisible] = useState(true); //옵션 보여지는 여부 
    /**옵션버튼 화살표이미지 */
    const optionBtn = {
        src1:"/images/Product/arrow_down_bf.png",
        src2:"/images/Product/arrow_up_bf.png",
    }
    const options = [
        {id:1, name:"감튀",     price:"1600"},
        {id:2, name:"사이다",   price:"1500"},
        {id:3, name:"치즈",     price:"700"},
        {id:4, name:"마요네즈", price:"300"},
        {id:5, name:"베이컨",   price:"500"},
        {id:6, name:"양상추",   price:"500"},
        {id:7, name:"토마토",   price:"500"},
    ]
    /**옵션 화살표 버튼 클릭시 이미지가 변하고 옵션 보여짐 */
    const toggleOption = () =>{
        setOptionVisible(!isOptionVisible); 
    }
    /** 상품개수 증감 */
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        if(number>1) setNumber(number - 1); 
    };              
    const detailProd = {               
        id:1, 
        koName:"더블 비프 미트칠리버거", 
        engName:"Double Beef Meat Chili Burger",
        image:"/upload/detailproduct/burgerdetail.png",
        info:"진한 고기맛 살리는 미트칠리소스에 상큼한 사워크림, 순쇠고기 100% 패티 2장과 짭조롬한 치즈와 베이컨까지!연말엔 더블 비프 미트칠리 버거!",
        price:12000,
    };
    const [isNutritionVisible, setNutritionVisible] = useState(false);
    const [isAllergyVisible, setAllergyVisible] = useState(false);
    const [isOriginVisible, setOriginVisible] = useState(false);
    /** 영양정보, 알레르기정보, 원산지 정보 */
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
    


     /** 각 옵션의 수량을 관리할 상태 배열 */ 
    const [optionQuantities, setOptionQuantities] = useState(options.map((option) => ({ id: option.id, name: option.name, quantity: 0 })));

    /**  옵션수량 증감함수 */
    const optionDecrease = (index) => {
        const updatedQuantities = [...optionQuantities];
        if (updatedQuantities[index].quantity > 0) {
            updatedQuantities[index].quantity -= 1;
            setOptionQuantities(updatedQuantities);
        }
    };
    const optionIncrease = (index) => {
        const updatedQuantities = [...optionQuantities];
        updatedQuantities[index].quantity += 1;
        setOptionQuantities(updatedQuantities);
    };

     // 각 옵션의 가격 * 수량 값을 더한 총 가격
    // total 은 누적값 초기값0, option 현재 순회중인 options 배열의 요소, index 순회중인 요소의 인덱스
    // reduce는 options 배열의 요소들을 순회하면서 콜백함수를 호출 최종적으로 옵션들의 총값을 추출
    const totalOptionPrice = options.reduce((total, option, index) => {
        return total + option.price * optionQuantities[index].quantity;
    }, 0);

    // 전체 상품 가격
    const totalProductPrice = detailProd.price * number;

    /** 장바구니버튼클릭시 로컬스토리지로 값보냄 */
    
    const handleCartButtonClick = () => {
        // console.log(optionQuantities[0]);
        const selectedOptions = optionQuantities
        .filter((option) => option.quantity > 0)
        .map((option) => ({
            option_id: option.id,
            option_name: option.name,
            quantity: option.quantity,
        }));
        // 저장할 데이터를 구성합니다.
        const cartItem = {
                    menu_id: detailProd.id,
                    quantity: number, // 옵션 수량 대신 `number`를 사용할 수 있습니다.
                    totalPrice: totalOptionPrice + totalProductPrice,
                    options: selectedOptions
                };

        // 로컬 스토리지에서 기존의 장바구니 아이템을 가져오거나 빈 배열로 초기화합니다.
        const existingCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

        // 새로운 아이템을 장바구니에 추가합니다.
        existingCartItems.push(cartItem);

        // 업데이트된 장바구니 아이템을 다시 로컬 스토리지에 저장합니다.
        sessionStorage.setItem('cart', JSON.stringify(existingCartItems));
    };


	return(
        <div id='burger-Detail'>
            <div>                                               
                <div id='contents'>
                    <div id='prod-img'>             
                        <img src={API_URL+detailProd.image} alt="" />
                    </div>
                    <form >
                        <li>
                            <h1>{detailProd.koName}</h1>
                            <p>{detailProd.engName}</p>
                            <p id='info'>{detailProd.info}</p>
                        </li>
                        <li id='prod-count'>
                            <div><h2>수량</h2></div>
                            <div id='count-btn'> 
                                {/* 상품개수 증감버튼 type='button'으로해야 새로고침안됨:number값 초기화 안됨 */}
                                <button type='button' onClick={decrease}><div>-</div></button> 
                                <button type='button'>{number}</button>
                                <button type='button' onClick={increase}><span>+</span></button>
                            </div>
                        </li> 
                        <li id='option'>
                            <div>
                                <h2>옵션선택</h2>
                                <div onClick={toggleOption}>
                                    <img src={ isOptionVisible === true ? optionBtn.src1 : optionBtn.src2 } alt="" />
                                </div>
                            </div>
                            {!isOptionVisible && (
                            <div>
                                <ul id='option-ul'>
                                    {options.map((option, index) => (
                                        <li key={index}>
                                            <span>{option.name}</span>
                                            <div>
                                                <span>{option.price} 원</span>
                                                <div id='option-count-btn'>
                                                    <button type='button' onClick={() => optionDecrease(index)}>
                                                        <div>-</div>
                                                    </button>
                                                    <button type='button'>{optionQuantities[index].quantity}</button>
                                                    <button type='button' onClick={() => optionIncrease(index)}>
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )}
                        </li>
                        <div id='order'>
                            <div id='order-price'>
                                <span>상품금액</span>
                                <h2>{totalOptionPrice + totalProductPrice} 원</h2>
                            </div>
                            <div id='order-btn'>
                                <div>
                                <button type='button' id='cartBtn' onClick={handleCartButtonClick}>장바구니</button>{/* 로컬스토리지에 저장 */}
                                    <button type='submit' id='orderBtn'>주문하기</button> {/** 로컬 스토리지에 저장될걸 불러와서 post로 보냄 */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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