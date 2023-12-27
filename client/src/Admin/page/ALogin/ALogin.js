import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../../config/contansts";
import { getCookie, setCookie } from "../../../cookie";
import { NavLink, useNavigate } from "react-router-dom";

const ALogin = () => {
  const navigate = useNavigate();
  const setTime = 3600000; //1시간 (1000 = 1초)
  const [inputs, setInputs] = useState({
    id: '',
    password: ''
  });

  const { id, password } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onLogin = () => {
    console.log(id, password);
    axios.post(`${API_URL}/admin/login`, {id, password})
    .then(res => {
      console.log(res);
      setCookie('login', res.data.data,{
        expires: new Date(Date.now() + setTime),
      });
      navigate('/admin');
    }).catch(err => {
      console.error(err.response.data);
      alert('로그인 실패!');
    })
  }

  return (
    <>
      <h1>관리자 로그인</h1>
      <div>
        <input name="id" placeholder="아이디" onChange={onChange} value={id} />
        <input type="password" name="password" placeholder="비밀번호" onChange={onChange} value={password}/>
        <button onClick={onLogin}>로그인</button>
      </div>
      <div>
        <a href='/'>메인 페이지로</a>
      </div>
    </>
  )
}

export default ALogin;