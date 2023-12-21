import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { API_URL } from "../../../config/contansts";
import "./DetailProduct.scss";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams(); // 주소에서 상품id 가져옴
  console.log("디테일 파람스 id: ", id);
  const [number, setNumber] = useState(1); //상품개수 증감변수
  const [isOptionVisible, setOptionVisible] = useState(true); //옵션 보여지는 여부
  const [product, setProduct] = useState({});
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/product/${id}`)
      .then((res) => {
        console.log("디테일에서받은res.data: ", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log("product에 담음:", product);
  }, [id]);
  /** 옵션 불러오기 */
  useEffect(() => {
    axios
      .get(`${API_URL}/option`)
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    if (options.length > 0) {
      setOptionQuantities(
        options.map((option) => ({
          id: option.id,
          name: option.name,
          quantity: 0,
          price: option.price,
        }))
      );
    }
  }, [options]);

  /**옵션버튼 화살표이미지 */
  const optionBtn = {
    src1: "/images/Product/arrow_down_bf.png",
    src2: "/images/Product/arrow_up_bf.png",
  };
  /**옵션 화살표 버튼 클릭시 이미지가 변하고 옵션 보여짐 */
  const toggleOption = () => {
    setOptionVisible(!isOptionVisible);
  };
  /** 상품개수 증감 */
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    if (number > 1) setNumber(number - 1);
  };
  const [isAllergyVisible, setAllergyVisible] = useState(false);
  const [isOriginVisible, setOriginVisible] = useState(false);
  /** 영양정보, 알레르기정보, 원산지 정보 */
  const handleAllergyButtonClick = () => {
    setAllergyVisible(!isAllergyVisible);
  };
  const handleOriginButtonClick = () => {
    setOriginVisible(!isOriginVisible);
  };
  const renderButtonContent = (isVisible) => {
    return isVisible ? "-" : "+";
  };

  /** 각 옵션의 수량을 관리할 상태 배열 (순서 보기) */ 
  const [optionQuantities, setOptionQuantities] = useState(
    options.map((option) => ({
      id: option.id,
      name: option.name,
      quantity: 0,
      price: option.price,
    }))
  );

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
    return total + option.price * (optionQuantities[index]?.quantity || 0);
  }, 0);

  // 전체 상품 가격
  const totalProductPrice = product.price * number;

  /** 장바구니버튼클릭시 로컬스토리지로 값보냄 */
  const handleCartButtonClick = () => {
    // console.log(optionQuantities[0]);
    const selectedOptions = optionQuantities
      .filter((option) => option.quantity > 0)
      .map((option) => ({
        option_id: option.id,
        option_name: option.name,
        option_price: option.price,
        quantity: option.quantity,
      }));
    const cartItem = {
      img: product.thumbnail_img_url,
      name: product.k_name,
      price: product.price, // 상품 단가
      menu_id: product.id, //상품 id
      quantity: number, // 옵션 수량 대신 `number`를 사용할 수 있습니다.
      totalOptionPrice: totalOptionPrice,
      totalPrice: totalOptionPrice + totalProductPrice, //상품 총가격
      options: selectedOptions,
    };

    // 로컬 스토리지에서 기존의 장바구니 아이템을 가져오거나 빈 배열로 초기화합니다.
    const existingCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

    // 새로운 아이템을 장바구니에 추가합니다.
    existingCartItems.push(cartItem);

    // 업데이트된 장바구니 아이템을 다시 로컬 스토리지에 저장합니다.
    sessionStorage.setItem("cart", JSON.stringify(existingCartItems));
  };

  return (
    <div id="burger-Detail">
      <div>
        <div id="contents">
          <div id="prod-img">
            <img src={API_URL + product.thumbnail_img_url} alt="" />
          </div>
          <form>
            <li>
              <h1>{product.k_name}</h1>
              <p>{product.e_name}</p>
              <p id="info">{product.description}</p>
              <p id="sale-time">
                *판매시간:{product.sale_start_time}~{product.sale_end_time}
              </p>
            </li>
            <li id="prod-count">
              <div>
                <h2>수량</h2>
              </div>
              <div id="count-btn">
                {/* 상품개수 증감버튼 type='button'으로해야 새로고침안됨:number값 초기화 안됨 */}
                <button type="button" onClick={decrease}>
                  <div>-</div>
                </button>
                <button type="button">{number}</button>
                <button type="button" onClick={increase}>
                  <span>+</span>
                </button>
              </div>
            </li>
            <li id="option">
              <div>
                <h2>옵션선택</h2>
                <div onClick={toggleOption}>
                  <img
                    src={
                      isOptionVisible === true ? optionBtn.src1 : optionBtn.src2
                    } 
                    alt=""
                  />
                </div>
              </div>

              {!isOptionVisible && (
                <div>
                  <ul id="option-ul">
                    {!options.length ? (
                      <p>옵션이 없습니다.</p>
                    ) : (
                      <>
                        {options.map((option, index) => (
                          <li key={index}>
                            <span>{option.name}</span>
                            <div>
                              <span>{option.price.toLocaleString()} 원</span>
                              <div id="option-count-btn">
                                <button
                                  type="button"
                                  onClick={() => optionDecrease(index)}
                                >
                                  <span>-</span>
                                </button>
                                <button type="button">
                                  {" "}
                                  {optionQuantities[index] &&
                                    optionQuantities[index].quantity}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => optionIncrease(index)}
                                >
                                  <span>+</span>
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              )}
            </li>
            <div id="order">
              <div id="order-price">
                <span>상품금액</span>
                <h2>{(totalOptionPrice + totalProductPrice).toLocaleString()} 원</h2>
              </div>
              <div id="order-btn">
                <div>
                  <NavLink
                    to="/mcart"
                    type="button"
                    id="cartBtn"
                    onClick={handleCartButtonClick}
                  >
                    장바구니 담기
                  </NavLink>
                  {/* 로컬스토리지에 저장 */}
                  {/* <button type='submit' id='orderBtn'>주문하기</button> * 로컬 스토리지에 저장될걸 불러와서 post로 보냄 */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="menu-info">
        <li>
          <button className="btn" onClick={handleAllergyButtonClick}>
            <div id="toggle-btn">
              <h2>알레르기 정보</h2>{" "}
              <button> {renderButtonContent(isAllergyVisible)}</button>
            </div>
            {isAllergyVisible && (
              <div id="toggle">
                <p>
                  <b>알레르기 유발 가능 식재료</b>
                  <span> {product.llergen_information}</span> <br />
                  <b>
                    * 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고
                    있습니다.
                  </b>
                </p>
              </div>
            )}
          </button>
        </li>
        <li>
          <button className="btn" onClick={handleOriginButtonClick}>
            <div id="toggle-btn">
              <h2>원산지 정보</h2>{" "}
              <button>{renderButtonContent(isOriginVisible)}</button>
            </div>
            {isOriginVisible && (
              <div id="toggle">
                <p>
                  <b>{product.cuntry_of_origin}</b>
                </p>
              </div>
            )}
          </button>
        </li>
      </div>
    </div>
  );
};

export default DetailProduct;
