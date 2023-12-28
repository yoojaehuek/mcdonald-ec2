import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/contansts";
import { error, log } from "console";
import { errHandler } from '../../utils/globalFunction';
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/State";

const clientKey = "test_ck_yL0qZ4G1VOaGZY0qRkGk8oWb2MQY";
const customerKey = "test_sk_DpexMgkW367N2GPKmowBVGbR5ozO";

export default function Payment() {
  const navigate = useNavigate();
  const [islogin, setIslogin] = useRecoilState(loginState); //useState와 거의 비슷한 사용법
  const { state } = useLocation();
  console.log(state);

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance["renderPaymentMethods"]> | null>(null);
  const [price, setPrice] = useState(state.total_price);
  const [menus, setMenus] = useState(state.menu_items);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods("#payment-widget", price);

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
  }, [price]);

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '10vw auto 5vw',
        maxWidth: '600px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ color: '#333', marginBottom: '1vw' }}>주문서</h1>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{menus[0].name}</span>
        {menus.length > 1 && <span>외 {menus.length - 1}개</span>}
      </div>
      <h2 style={{ color: '#555', marginBottom: '20px' }}>가격: {price}</h2>
      <div id="payment-widget" style={{ margin: '20px 0' }} />
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;
          await paymentWidget
            ?.requestPayment({
              orderId: nanoid(),
              orderName: "맨토스",
              customerName: "김토스",
              customerEmail: "customer123@gmail.com",
            })
            .then(() => {
              console.log("res");
              axios
                .post(`${API_URL}/order`, state)
                .then((res) => {
                  console.log("주문성공: ", res.data);
                  sessionStorage.clear();
                  navigate("/success");
                })
                .catch((err) => {
                  alert(`에러: ${err}`);
                  console.error(err);
                  setIslogin(false);
                  errHandler(err);
                });
            })
            .catch((err) => {
              console.error(err);
              if (err.code === "USER_CANCEL") {
                console.log("사용자가 결제 취소");
              } else {
                alert("결제실패!");
                navigate("/fail");
              }
            });
        }}
      >
        결제하기
      </button>
    </div>
  );
}
