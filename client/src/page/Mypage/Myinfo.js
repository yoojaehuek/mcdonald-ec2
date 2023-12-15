import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Order from './Order';
import "./Myinfo.scss";
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Myinfo = () => {
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectPhone, setSelectedPhone] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedDetailAddress, setSelectedDetailAddress] = useState('');
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState('');
  
  const [user, setUser] = useState({});

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const [selectedTab, setSelectedTab] = useState('info'); // 'info' 또는 'order'로 상태 관리
  

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };


  useEffect(() => {
    axios.get(`${API_URL}/user/one`)
    .then(res => {
      console.log(res.data);
      setUser(res.data);
      setSelectedEmail(res.data.user_email);
      setSelectedAddress(res.data.address);
      setSelectedDetailAddress(res.data.detail_address);
      setSelectedPhone(res.data.phone1);
      setSelectedPhoneNumber(res.data.phone);
      setSelectedYear(res.data.birth)
      setSelectedMonth(res.data.birth)
      setSelectedDay(res.data.birth)
    }).catch((err) =>{
      console.error(err);
    });
    // 페이지 로드 시 현재 날짜와 월일로 기본값 설정
    const currentDate = new Date();
    setSelectedYear(currentDate.getFullYear());
    setSelectedMonth(currentDate.getMonth() + 1);
    setSelectedDay(currentDate.getDate());
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

  return (
    <div className='container'>
      <div className='pagetop'>
        <div className='pagewarp'>
          <div className='pagename'>마이페이지</div>
          <div className='deptarar'>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/">마이페이지</NavLink>
            <NavLink to="/">개인정보수정</NavLink>
          </div>
        </div>
        <div className='slider_scroll'>
          <ul className='con'>
            <li onClick={() => setSelectedTab('info')} className={selectedTab === 'info' ? 'active' : ''}><div>개인정보수정</div></li>
            <li onClick={() => setSelectedTab('order')} className={selectedTab === 'order' ? 'active' : ''}><div>주문내역</div></li>
          </ul>
        </div>
      </div>
      <div className='wrapper'>
        <div className='con2'>
          {selectedTab === 'info' && (
            // 개인정보 수정 컴포넌트
            <>
              <ul className='inputList'>
                <li>
                  <div className='tit'><span>이름</span></div>
                  <div className='box'><input type='text' value={user.name} id='name' disabled='disabled'></input></div>
                </li>
                <li>
                  <div className='tit'><span>아이디</span></div>
                  <div className='box'><input type='email'disabled='disabled' value={selectedEmail} id='email' onChange={(e) => setSelectedEmail(e.target.value)}></input></div>
                </li>
                {/* <li>
                  <div className='tit'><span>비밀번호</span></div>
                  <div className='box'><input type='password' value={selectedPassword} id='password' onChange={(e) => setSelectedPassword(e.target.value)}></input></div>
                </li>
                <li>
                  <div className='tit'><span>비밀번호 재입력</span></div>
                  <div className='box'><input type='password' value={confirmedPassword} id='password' onChange={(e) => setConfirmedPassword(e.target.value)}></input></div>
                </li> */}
                <li>
                  <div className='tit'><span>주소</span></div>
                  <div className='box'><input type='text' disabled='disabled' value={selectedAddress} id='adress' onChange={(e) => setSelectedAddress(e.target.value)}></input></div>
                </li>
                <li>
                  <div className='tit'><span>상세주소</span></div>
                  <div className='box'><input type='text' placeholder='상세주소를 입력해주세요' value={selectedDetailAddress} id='adress' onChange={(e) => setSelectedDetailAddress(e.target.value)}></input></div>
                </li>
                <li>
                  <div className='tit'><span>휴대전화</span></div>
                  <div className='boxFlex'>
                    <select name='phone1' id='phonejoin' value={selectPhone} >
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                    <input type='number' id='phone2join' value={selectedPhoneNumber} placeholder='숫자만 입력해주세요'
                      onChange={(e) => setSelectedPhoneNumber(e.target.value)}></input>
                  </div>
                </li>
                <li>
                  <div className='tit'><span>생년월일</span></div>
                  <div className='boxecal'>
                    <select className='chyear' id='chyearjoin' value={selectedYear} onChange={handleYearChange}>
                      <option value="">선택</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <select className='chmonth' id='chmonthjoin' value={selectedMonth} onChange={handleMonthChange}>
                      <option value="">선택</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select className='chday' id='chdayjoin' value={selectedDay} onChange={handleDayChange}>
                      <option value="">선택</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
              </ul>
              <div className='btnwarp'>
                <button className='cola'>수정하기</button>
                <button className='colb'><span>회원탈퇴{'>'}</span></button>
              </div>
            </>
          )}
          {selectedTab === 'order' && (
            // 주문내역 컴포넌트
            <Order />
          )}
        </div>
      </div>
    </div>
  );
}
export default Myinfo;
