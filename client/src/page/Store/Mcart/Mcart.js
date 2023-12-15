import React, { useEffect, useState } from 'react';
import './Mcart.scss';




// const temp = [
//   { mcart: "장바구니", mcart1: "배달주소", mcart2: "서울 성북구 아리랑로 3 (동소문동6가, 기업은행) ㅇㄴㅇ", mcart3: "변경", mcart4: "주문상품", mcart5: "고구마피자(R)", mcart6: "오리지널", mcart7: "메뉴추가", mcart8: "주문하기" },
// ]


const Mcart = () => {
  const [number, setNumber] = useState(1); //상품개수 증감변수
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    console.log("aaa",typeof(JSON.parse(sessionStorage.getItem('cart'))))
    console.log("aaa",JSON.parse(sessionStorage.getItem('cart')))
    setCart(JSON.parse(sessionStorage.getItem('cart')));
    console.log("bbb",cart)
    
  },[])

 const increase = () => {
   setNumber(number + 1);
 };
 const decrease = () => {
   if (number > 1) setNumber(number - 1);
  };
  

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
                    <p>서울 성북구 아리랑로 3 (동소문동6가, 기업은행) ㅇㄴㅇ</p>
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
              <input type="text"></input>
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
        {
          cart.map(tmp =>
      <ul class="Mcart-ul1">
        <li class="Mcart-li4">
          <button class="Mcart-btn2"></button>
          <div class="Mcart-middle1">
                  <div><img></img></div>
            <div>
              <div class="Mcart-txt">
                  <div>
                        <h4>{}</h4> 
                  </div>
                  <div>
                        <p>{}</p>   
                   </div>
              </div>
            </div>
          </div>

          <div class="Mcart-middle2">
            <div class="Mcart-plusb"> 
                {/* 상품개수 증감버튼 type='button'으로해야 새로고침안됨:number값 초기화 안됨 */}
                <button type='button' onClick={decrease}><div>-</div></button> 
                <button type='button'>{number}</button>
                <button type='button' onClick={increase}><span>+</span></button>
            </div>  
              <div><p>{17900 * number}원</p></div>
          </div>
        </li>
      </ul>
             )
            } 
      <div class="Mcart-bottom">
      총 상품 금액
          <span>{17900 * number}원</span>
      </div>

       
      </div>
       <div class="Mcart-botbotton">
          <button class="botbutton1">메뉴추가</button>
            <button class="botbutton2">주문하기</button>
      </div>
    </div>

  );
};

export default Mcart;