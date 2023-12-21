import React, { useEffect, useState } from "react";
import "./Mcart.scss";
import { API_URL } from "../../../config/contansts";
import axios from "axios";
import {NavLink} from 'react-router-dom'
const Mcart = () => {
  const [number, setNumber] = useState(1); //상품개수 증감변수
  const [cart, setCart] = useState([]); /** 장바구니에 담은 상품목록 */
  const [user, setUser] = useState({});/** 로그인한 사용자정보 */
  const [store, setStore] = useState([]);/** 매장 목록 */
  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
    /** 로그인중인 사용자 정보 불러오기 */
    axios
      .get(`${API_URL}/user/one`)
      .then((res) => {
        console.log("로그인한 사용자정보",res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    /** 매장 전부 불러오기 */
    axios
      .get(`${API_URL}/store`)
      .then((res) => {
        console.log("매장 목록",res.data);
        setStore(res.data);
      })
      .catch((err) => {
          console.error(err);
      });

  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      setProdQuantities( //상품각각에 넣기
        cart.map((prod) => ({
          id: prod.menu_id,
          img: prod.img,
          name: prod.name,
          totalPrice: prod.totalPrice,
          price: prod.price,
          quantity: prod.quantity,
          options: prod.options,
          totalOptionPrice: prod.totalOptionPrice,
        }))
      );
    }
  }, [cart]);

  /** 각 옵션의 수량을 관리할 상태 배열 (순서 보기) */
  const [prodQuantities, setProdQuantities] = useState([]);
  useEffect(() => {
    if (cart.length > 0) {
      setProdQuantities(
        cart.map((prod) => ({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          quantity: 1,
        }))
      );
    }
  }, [cart]);
  /**  각 메뉴 개수 증감 */
  const prodDecrease = (index) => {
    const updatedQuantities = [...prodQuantities];
    if (updatedQuantities[index].quantity > 0) {
      updatedQuantities[index].quantity -= 1;
      setProdQuantities(updatedQuantities);
    }
  };
  const prodIncrease = (index) => {
    const updatedQuantities = [...prodQuantities];
    updatedQuantities[index].quantity += 1;
    setProdQuantities(updatedQuantities);
  };
  /**  각 메뉴의 가격 * 수량 값을 더한 총 가격
  total 은 누적값 초기값0, prod 현재 순회중인 cart 배열의 요소, index 순회중인 요소의 인덱스
  reduce는 cart 배열의 요소들을 순회하면서 콜백함수를 호출 최종적으로 옵션들의 총값을 추출
  cart 배열이 null 이거나 undefined 인 상태에서 reduce를 호출하려 하면 실행 안됨 */
  const totalProdPrice = cart ? 
  cart.reduce((total, prod, index) => {
      return (
        total +
        prod.totalOptionPrice +
        prod.price * ((prodQuantities[index] && prodQuantities[index].quantity) || 0)
      );
    }, 0)
  : 0;

  return (
    <div class="Mcart-top">
      <div class="Mcart-h2">
        <h2>장바구니</h2>
      </div>
      <div class="Mcart-btn">
        <button class="Mcart-btn1">배달주문</button>
        <button>방문포장</button>
      </div>
      <div class="midbox">
        <div class="Mcart-mid">
          <ul class="Mcart-ul">
            <li class="Mcart-li1">
              <div>
                <p>배달주소</p>
              </div>
              <div class="Mcart-p">
                <p>{user.address} {user.detail_address}</p>
              </div>
            </li>
            <li class="Mcart-li2">
              <div>서울점</div>
              <div>
                <button>주소변경</button>
              </div>
            </li>
            <li class="Mcart-li3">
              <div>수령인</div>
              <div>
                <input type="text" value={user.name}></input>
                <button>
                  <p>변경</p>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div class="Mcart-h3">
          <h3>주문상품</h3>
        </div>
        {cart && cart.length > 0 ? (
          cart.map((prod, index) => (
            <li key={index} class="Mcart-li4">
              <button class="Mcart-btn2"></button>
              {/* 삭제버튼 */}
              <div class="Mcart-middle1">
                <div>
                  <img src={API_URL + prod.img} alt="" />
                </div>
                <div>
                  <div class="Mcart-txt">
                    <div>
                      <h4>{prod.name}</h4>
                    </div>
                    <div id="options">
                      {prod.options.map((option, optionIndex) => (
                        <p key={optionIndex}>
                          {option.option_name}: {option.quantity}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div class="Mcart-middle2">
                <div class="Mcart-plusb">
                  <button type="button" onClick={() => prodDecrease(index)}>
                    <div>-</div>
                  </button>
                  <button type="button">
                    {" "}
                    {prodQuantities[index] && prodQuantities[index].quantity}
                  </button>
                  <button type="button" onClick={() => prodIncrease(index)}>
                    <span>+</span>
                  </button>
                </div>
                <div>
                  <p>
                    {prod.totalOptionPrice +
                      (prodQuantities[index]?.quantity || 0) * prod.price}
                    원
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : 
          <p>상품이 없습니다.</p>
        }
        <div class="Mcart-bottom">
          총 상품 금액 <span> {totalProdPrice} 원</span>
        </div>
      </div>
      <div class="Mcart-botbotton">
        <NavLink to={'/menu/1'} class="botbutton1">메뉴추가</NavLink>
        <button class="botbutton2">주문하기</button>
      </div>
    </div>
  );
};

export default Mcart;
