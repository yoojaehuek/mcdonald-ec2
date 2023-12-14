import React, { useState } from 'react';
import './Myinfo.scss';

const Order = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today'); // 'today', 'week', '3month', '6month', 'year'
  const [selectedTab] = useState('info'); // 'info' 또는 'order'로 상태 관리

  // 주문 데이터
  const ordersByPeriod = {
    'today': [
      { id: '1', date: '2023-12-14', ordername: '빅맥세트', point: '평택점', state: '주문완료', pay: '10000원' },
      // ... 오늘의 주문 데이터
    ],
    'week': [
      { id: '2', date: '2023-12-15', ordername: '치즈버거세트', point: '수인분당점', state: '주문완료', pay: '8000원' },
      // ... 1주일 내의 주문 데이터
    ],
    '3month': [
      // ... 3개월 내의 주문 데이터
    ],
    '6month': [
      // ... 6개월 내의 주문 데이터
    ],
    'year': [
      // ... 1년 내의 주문 데이터
    ],
  };


  // const periods = ['today', 'week', '3month', '6month', 'year'];

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  const orderData = ordersByPeriod[selectedPeriod] || []; // 선택된 주기에 따른 주문 데이터 가져오기

  return (
    <ul className='orderList'>
      <div className='warrper'>
        <div className='con3'>
          <div className='serch-warp'>
            <ul className='tap'>
              <li>
                <label htmlFor='order_history_today'>
                  <input
                    type='radio'
                    name='serchday'
                    id='order_history_today'
                    value='today'
                    checked={selectedPeriod === 'today'}
                    onChange={handlePeriodChange}
                  />
                  <div className={`radio-label ${selectedPeriod === 'today' ? 'active' : ''}`}>오늘</div>
                </label>
              </li>
              <li>
                <label htmlFor='order_history_week'>
                  <input
                    type='radio'
                    name='serchday'
                    id='order_history_week'
                    value='week'
                    checked={selectedPeriod === 'week'}
                    onChange={handlePeriodChange}
                  />
                  <div className={`radio-label ${selectedPeriod === 'week' ? 'active' : ''}`}>1주일</div>
                </label>
              </li>
              <li>
                <label htmlFor='order_history_3month'>
                  <input
                    type='radio'
                    name='serchday'
                    value="3month"
                    id='order_history_3month'
                    checked={selectedTab === '3month'}
                    onChange={handlePeriodChange}
                  />
                  <div className={`radio-label ${selectedPeriod === '3month' ? 'active' : ''}`}>3개월</div>
                </label>
              </li>
              <li>
                <label htmlFor='order_history_6month'>
                  <input
                    type='radio'
                    name='serchday'
                    value="6month"
                    id='order_history_6month'
                    checked={selectedTab === '6month'}
                    onChange={handlePeriodChange}
                  />
                  <div className={`radio-label ${selectedPeriod === '6month' ? 'active' : ''}`}>6개월</div>
                </label>
              </li>
              <li>
                <label htmlFor='order_history_year'>
                  <input
                    type='radio'
                    name='serchday'
                    id='order_history_year'
                    value="year"
                    checked={selectedTab === 'year'}
                    onChange={handlePeriodChange}
                  />
                  <div className={`radio-label ${selectedPeriod === 'year' ? 'active' : ''}`}>1년</div>
                </label>
              </li>
            </ul>
            <div className='txt'>
              주문내역 변경 및 취소는 고객센터로 문의주시기 바랍니다.
            </div>
          </div>
          <div className='orderlist'>
            <ul className='orderheader'>
              <li className='num'>주문번호</li>
              <li className='day'>주문일자</li>
              <li className='txt2'>주문상품</li>
              <li className='store'>주문매장</li>
              <li className='state'>주문상태</li>
              <li className='price'>결제금액</li>
            </ul>
            {orderData.map((item) => (
              <div key={item.id} className='orderItem'>
                <li className='num'>{item.id}</li>
                <li className='day'>{item.date}</li>
                <li className='txt2'>{item.ordername}</li>
                <li className='store'>{item.point}</li>
                <li className='state'>{item.state}</li>
                <li className='price'>{item.pay}</li>
              </div>
            ))}
            {orderData.length === 0 && (
              <div className='empty'>
                <div className='txt5'>
                  주문내역이 없습니다.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ul>
  );
};

export default Order;
