import React, { useEffect, useRef, useState } from "react"
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../config/contansts"
import { error, log } from "console"


const clientKey = "test_ck_yL0qZ4G1VOaGZY0qRkGk8oWb2MQY"
const customerKey = "test_sk_DpexMgkW367N2GPKmowBVGbR5ozO"

export default function Payment() {
  const navigate = useNavigate();
  // let { order_id } = useParams();
  // console.log(order_id);

  const { state } = useLocation();
  console.log("state:", state);

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null)
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null)
  const [price, setPrice] = useState(state.total_price)

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      )

      paymentWidgetRef.current = paymentWidget
      paymentMethodsWidgetRef.current = paymentMethodsWidget
    })()

    
  }, [])

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current

    if (paymentMethodsWidget == null) {
      return
    }

    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    )
  }, [price])

  return (
    <div>
      <h1>주문서</h1>
      <h2>가격: {price}</h2>
      <div id="payment-widget" />
      <button
        onClick={ async () => {
          const paymentWidget = paymentWidgetRef.current
            await paymentWidget?.requestPayment({
              orderId: nanoid(),
              orderName: "맨토스",
              customerName: "김토스",
              customerEmail: "customer123@gmail.com",
              // successUrl: `${window.location.origin}/success`,
              // failUrl: `${window.location.origin}/fail`,
            })
            .then(() => {
              console.log("res");
              axios.post( `${API_URL}/order`, state )
                .then(res => {
                  console.log("주문성공: ",res.data);
                  sessionStorage.clear(); // 세션 스토리지 전체를 비우는 부분
                  navigate('/success');
                }).catch(err => {
                  alert(`에러: ${err}`);
                })
            }).catch ((err) => {
              console.error(err);
              if(err.code === "USER_CANCEL"){
                console.log("사용자가 결제 취소");
              }else{
                alert('결제실패!');
                navigate('/fail');
              }
            }) 
        }}
      >
        결제하기
      </button>
    </div>
  )
}