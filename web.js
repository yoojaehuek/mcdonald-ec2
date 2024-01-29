//test
const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./database/schemas');//DB테이블
const port = 8000;
require('dotenv').config();
const errorMiddleware = require('./utils/errorMiddleware');
const bannerRouter = require('./routers/banner');
const CrewRouter = require('./routers/crew');
const FaqRouter = require('./routers/faq');
const MaterialRouter = require('./routers/material');
const EffortRouter = require('./routers/effort');
const userRouter = require('./routers/user');
const productRouter = require('./routers/product');
const sliderRouter = require('./routers/slider');
const storeRouter = require('./routers/store');
const whatsNewRouter = require('./routers/whatsNew');
const orderRouter = require('./routers/order');
const optionRouter = require('./routers/option');
const adminRouter = require('./routers/admin');


//시퀄라이즈 연결 부분
sequelize.sync({ force: true }) //force가 true면 킬때마다 DB 새로 만듬
.then(() => { 
  console.log("DB연결 성공");
})
.catch((err) => {
  console.error(err);
});

app.use(cookieParser());


// URL-encoded방식 사용할수있게 설정 (.urlencoded()은 x-www-form-urlencoded형태의 데이터를 해석  )
// json형식의 데이터를 처리할 수 있게 설정 (.json()은 JSON형태의 데이터를 해석.)
// 자세한 설명: https://kirkim.github.io/javascript/2021/10/16/body_parser.html
app.use(express.urlencoded({extended: false}));  
app.use(express.json());


// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
var cors = require('cors');
app.use(cors());

// '/upload'경로로 뭔가 요청이오면 여기서 걸리고 upload폴더의 정적 파일을 제공하겠다
// 예: "/upload/image.jpg")에 액세스하면 Express.js는 "upload" 디렉터리에서 정적 파일을 찾아 제공
app.use("/app1/api/upload", express.static("upload"));  

const upload = multer({ 
  storage: multer.diskStorage({ //저장 설정
      destination: function(req, file, cb) { // 어디에 저장할거냐? upload/
          cb(null, 'upload/') // upload폴더 밑에
      },
      filename: function(req, file, cb){ // 어떤 이름으로 저장할거야?
          // 어떤 이름으로 저장할거야?
          // 타임스탬프.확장자 형식으로 파일명 저장
          cb(null, new Date().valueOf() + path.extname(file.originalname));
      }
  })
})

app.post('/app1/api/image', upload.single('image'), (req, res)=>{
  const file = req.file; 
  console.log("post(/image) file:",file);
  res.send({ 
      imageUrl: "/api/upload/"+file.filename //이미지 여기 저장했다 json형식으로 보냄
  })
})

app.use('/app1/api/user', userRouter);
app.use('/app1/api/crew', CrewRouter);
app.use('/app1/api/faq', FaqRouter);
app.use('/app1/api/material', MaterialRouter);
app.use('/app1/api/effort', EffortRouter);
app.use("/app1/api/banner", bannerRouter);
app.use('/app1/api/product', productRouter);
app.use('/app1/api/slider', sliderRouter);
app.use('/app1/api/store', storeRouter);
app.use('/app1/api/whats-new', whatsNewRouter);
app.use('/app1/api/order', orderRouter);
app.use('/app1/api/option', optionRouter);
app.use('/app1/api/admin', adminRouter);
app.get('/app1/api/logout', (req, res) => {
  console.log("logout");
  res.cookie('accessToken',{},{
    httpOnly : true,
    secure : false,
    sameSite : 'strict',
  })
  res.cookie('refreshToken',{},{
    httpOnly : true,
    secure : false,
    sameSite : 'strict',
  })
  res.status(200).end();
})



app.use(errorMiddleware);

//app.use(express.static(path.join(__dirname, 'client/build')));

//app.get('*', (req, res) => {
//  console.log('__dirname: ', path.join(__dirname, '/client/build/index.html'));
//  res.sendFile(path.join(__dirname, '/client/build/index.html'));
//})

app.listen(port, () => {
  console.log(`${port}에서 대기중....`);
})
