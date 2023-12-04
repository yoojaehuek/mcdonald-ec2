const express = require('express');
const app = express();
const path = require('path');
const { sequelize } = require('./database/schemas');//DB테이블
const port = 8003;

//시퀄라이즈 연결 부분
sequelize.sync({ force: false }) //force가 true면 킬때마다 DB 새로 만듬
.then(() => { 
  console.log("DB연결 성공");
})
.catch((err) => {
  console.error(err);
});


// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
var cors = require('cors');
app.use(cors(
  // {
  //   origin: '*',
  //   credential: 'true', // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  // }
));


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

app.listen(port, () => {
  console.log(`${port}에서 대기중....`);
})