import React, { useEffect, useState } from "react";
import { API_URL } from "../../../config/contansts";
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";
import "./Mcart.scss";

const Mcart = () => {
  const [cart, setCart] = useState([]); /** 장바구니에 담은 상품목록 */
  const [user, setUser] = useState({});/** 로그인한 사용자정보 */
  const [store, setStore] = useState([]);/** 매장 목록 */
  const [isPopupOpen, setPopupOpen] = useState(false); // 팝업창
  const [selectedStore, setSelectedStore] = useState(null); // 팝업창에서 선택한 매장
  const [prodQuantities, setProdQuantities] = useState([]);
  const navigate = useNavigate();
  /** 주문하기 */
  const handleOrder = () => {
    if(selectedStore == null ) { 
      alert("매장을 선택해주세요");
      return;
    }
    cart.map((item, index) => {
      item.quantity = prodQuantities[index].quantity;
    });
    const orderObject = {};
    orderObject.store_id  = selectedStore.id;
    orderObject.menu_items = cart;
    orderObject.total_price = totalProdPrice;
    axios.post( `${API_URL}/order`, orderObject )
    .then(res => {
      console.log("주문성공: ",res.data);
      alert("주문성공했습니다!!");
      sessionStorage.clear(); // 세션 스토리지 전체를 비우는 부분
      navigate('/')
    }).catch(err => {
      console.error(err);
    })
  }
  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) setCart(storedCart);
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
        setStore(res.data);
      })
      .catch((err) => {
          console.error(err);
      });
    }, [cart]);
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
  /**  각 메뉴 개수 증감 */
  const prodDecrease = (index) => {
    const updatedQuantities = [...prodQuantities];
    if (updatedQuantities[index].quantity > 0) {
      updatedQuantities[index].quantity -= 1;
      setProdQuantities(updatedQuantities);
      updateSessionStorage(updatedQuantities);// 세션
    }
  };
  const prodIncrease = (index) => {
    const updatedQuantities = [...prodQuantities];
    if (updatedQuantities[index]) {
      updatedQuantities[index].quantity += 1;
      setProdQuantities(updatedQuantities);
      updateSessionStorage(updatedQuantities); // 세션
    }
  };
  const updateSessionStorage = (updatedQuantities) => {
    // 세션 스토리지에 현재 cart 상태를 업데이트
    const updatedCart = cart.map((item, index) => ({
      ...item,
      quantity: updatedQuantities[index].quantity,
    }));
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  /**  각 메뉴의 가격 * 수량 값을 더한 총 가격
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

  // 장바구니에서 메뉴 항목을 제거하는 함수
  const removeItemFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    const updatedQuantities = [...prodQuantities];
    updatedQuantities.splice(index, 1);
    setProdQuantities(updatedQuantities);

    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /** 팝업 열기,닫기 함수 */
  const openPopup = () => { setPopupOpen(true); };
  const closePopup = () => { setPopupOpen(false); };
  /**  매장 선택 함수 */
  const handleStoreSelection = (selectedStore) => { setSelectedStore(selectedStore); closePopup(); };

  return (
    <div className="Mcart-top">
      <div className="Mcart-h2">
        <h2>장바구니</h2>
      </div>
      <div className="Mcart-btn">
        <button className="Mcart-btn1">배달주문</button>
      </div>
      <div className="midbox">
        <div className="Mcart-mid">
          <ul className="Mcart-ul">
            <li className="Mcart-li1">
              <div>
                <p>배달주소</p>
              </div>
              <div className="Mcart-p">
                <p>{user.address} {user.detail_address}</p>
              </div>
            </li>
            <li className="Mcart-li2">
              <div>{selectedStore ? selectedStore.store_name : '매장 선택'}</div>
              <div>
              <button onClick={openPopup}>매장선택</button>
                {isPopupOpen && (
                  <div className="store-popup">
                    <h3>매장 선택</h3>
                    <ul>
                      {store.map((storeItem) => (
                        <li key={storeItem.id} onClick={() => handleStoreSelection(storeItem)}>
                          <h1>{storeItem.store_name} </h1>
                          <p>{storeItem.phone}</p>
                          <p>{storeItem.address}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="Mcart-li3">
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
        <div className="Mcart-h3">
          <h3>주문상품</h3>
        </div>
        {cart && cart.length > 0 ? (
          cart.map((prod, index) => (
            <li key={index} className="Mcart-li4">
              <button className="Mcart-btn2" onClick={() => removeItemFromCart(index)} ></button>
              {/* 삭제버튼 */}
              <div className="Mcart-middle1">
                <div>
                  <img src={API_URL + prod.img} alt="" />
                </div>
                <div>
                  <div className="Mcart-txt">
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
              <div className="Mcart-middle2">
                <div className="Mcart-plusb">
                  <button type="button" onClick={() => prodDecrease(index)}>
                    <div>-</div>
                  </button>
                  <button type="button">
                    {prodQuantities[index] && prodQuantities[index].quantity}
                  </button>
                  <button type="button" onClick={() => prodIncrease(index)}>
                    <span>+</span>
                  </button>
                </div>
                <div>
                  <p>
                    {(
                      prod.totalOptionPrice +
                      (prodQuantities[index]?.quantity || 0) * prod.price
                    ).toLocaleString()} 원
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : 
          <p>상품이 없습니다.</p>
        }
        <div className="Mcart-bottom">
          총 상품 금액 <span>{ totalProdPrice.toLocaleString() } 원</span>
        </div>
      </div>
      <div className="Mcart-botbotton">
        <NavLink to={'/menu/1'} className="botbutton1">메뉴추가</NavLink>
        <button className="botbutton2" onClick={ handleOrder }>주문하기</button>
      </div>
    </div>
  );
};

export default Mcart;
