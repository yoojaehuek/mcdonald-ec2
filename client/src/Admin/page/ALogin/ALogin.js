import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../../config/contansts";
import { setCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, CssBaseline, Typography, Paper } from "@mui/material";
import { Height } from "@mui/icons-material";

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
    axios.post(`${API_URL}/api/admin/login`, {id, password})
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
    <Container component="main" maxWidth="xs" sx={{marginTop: "12vw"}}>
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography component="h1" variant="h5" mb={2}>
          관리자 로그인
          <p style={{ fontSize: '0.8rem'}}>ID: i1004902@naver.com<br/>pwd: 123</p>
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="id"
          label="아이디"
          name="id"
          autoFocus
          onChange={onChange}
          value={id}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          onChange={onChange}
          value={password}
        />
        <Button variant="contained" fullWidth sx={{ mt: 2, mb: 2 }} onClick={onLogin}>
          로그인
        </Button>
        <a href="javascript:location.replace('/')">메인 페이지로</a>
      </Paper>
    </Container>
  );
};

export default ALogin;
