# Mcdonald

> Mcdonald는 혁신적인 메뉴 개발과 편리한 매장 서비스로 고객들에게 독특하고 기억에 남는 다양한 맛의 경험을 제공하며, 일상을 더욱 특별하게 만드는 곳

<br/>

## 대표화면
<table>
  <tr>
    <td><b>메인 페이지</b></td>
    <td><b>관리자 페이지</b></td>
  </tr> 
  <tr>
    <td><img src="/readme-file/main-page.png" alt="메인 페이지"></td>
    <td><img src="/readme-file/admin-page.png" alt="관리자 페이지"></td>
  </tr>
</table>

<br/>

## 어떤 서비스인가요?

- Mcdonald은 세계적으로 유명한 패스트 푸드 체인 중 하나로, 다양한 국가와 지역에서 패스트 푸드 및 음료 서비스를 제공하고 있습니다. 맥도날드의 서비스는 햄버거, 치킨, 감자튀김, 음료, 디저트 등 다양한 메뉴를 주력으로 하며, 고객들에게 빠르고 편리한 음식 서비스를 제공하는 것이 특징입니다. 매장 내외에서는 다양한 프로모션과 이벤트를 통해 고객들에게 즐거운 경험을 선사하고 있습니다

## Contents

Click to scroll to that page

1. How to start? : 시작 가이드
2. Project Info : 프로젝트 소개

- ​Project intention : 프로젝트 기획 의도
- Service : 서비스
- How can use this project?

3. Stacks : 사용 기술 스택
4. WEB MVP & Project tree : 주요 기능 및 프로젝트 구조

- 기능 소개
- ERD
- Architecture

5. Trouble Shooting : 트러블 슈팅
6. END with Members: 프로젝트 멤버 및 역할 소개

## 1. How to start : 시작 가이드

For building and running the application you need :

- [Node.js 18.16.1](https://nodejs.org/en)
- [npm 9.7.2](https://www.npmjs.com/)
- MariaDB 10.3.11

Installation

```bash
https://github.com/KJH1225/mcdonald.git
```

Front (mcdonald/client/)에서

```
npm i --force
npm run build
```

DB

```
mcdonald/database/sqlFile/mcdonalddb.sql 실행
mcdonald/config/config.json 파일의 development: {} 내용을 자신에 맞게 수정
```


Back (mcdonald/)에서

```
npm i 
npm start
```

접속

```
http://localhost:8000 접속
```

Back-end API test


- [API test용 POSTMAN](https://app.getpostman.com/join-team?invite_code=4071354b0146362eeb5dac679a7525f1&target_code=928eadf671f500a4f66463f91555daf1)


## 💻 2. Project Info : 프로젝트 소개

### ✔️개발 기간

- 2023.12.04 ~ 2023.12.27 (4주)

- [개발 일정 구글 시트](https://docs.google.com/spreadsheets/d/10lYxth4svSIDfBxel2TmEZxhLZDoqIq5BC2L7L-PQ_w/edit#gid=609442951)

### ✔️ 배포 서버

- www.i1004902.com

### ✔️ 프로젝트 기획 의도

서비스 소개

- 메뉴 다양성: 맥도날드는 햄버거, 치킨, 샐러드, 감자튀김, 디저트 등 다양한 메뉴를 보유하고 있어 다양한 식사 옵션을 제공합니다. 또한 지역에 따라 메뉴가 약간씩 다를 수 있습니다.
- 가족을 위한 서비스: 맥도날드는 가족을 대상으로 하는 다양한 키즈 메뉴와 함께, Happy Meal과 같은 이벤트를 통해 어린이들에게 흥미로운 경험을 제공하기도 합니다.
- 캠페인 및 할인 프로모션: 계절별로 다양한 캠페인과 할인 프로모션을 통해 소비자들에게 가격 경쟁력 있는 제품을 제공하고 있습니다.
  
기능 소개

- 음식 소개
- 음식 주문 서비스
- 음식 배달 서비스
- 우리 집 주변 배달 가능 여부 확인 서비스
- 지점 설명 및 지점 위치 지도 검색 서비스
- 서비스 소개
- 회원 가입 / 탈퇴
- 로그인 / 로그아웃
- FAQ
- 마이페이지
- 주문 조회 서비스
- 관리자페이지
- 맥도날드 소개 페이지

### ✔️ 서비스

#### 서비스 설명
1. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명

   1. 메뉴 소개
      - 음식 및 디저트 소개
      - 메뉴 및 디저트 등 음식 목록 DB에서 조회
      - 메뉴 선택 후 자세한 정보 확인 가능
      - 메뉴 선택 후 추가 옵션 선택 가능
      - 장바구니에 담아두기 기능 가능 

    2. 주문 소개 
        - 메뉴를 장바구니에 담고 주소 입력 후 주문하기 기능
        - 수량 및 옵션 확인 후 결제 기능

    3. 지점 소개
        - 24시, 맥모닝, 맥드라이브, 맥딜리버리, 주차 중 선택해서 가능한 지점 찾기 기능
        - 지점 검색 후 검색하기 누르면 지도에 지점 위치 보여주기 기능
        - 내 위치 주변 지점 검색 기능
        - 내 위치 맥딜리버리 배달 가능 여부 확인 기능 
    
    4. What's New 소개
        - 고객들 에게 맥도날드 이벤트 및 뉴스 소개
        - 시각적으로 심심하지 않게 재미를 주는 이미지를 이용해 이벤트 및 뉴스 소개
        - 맥도날드 소식 소개
    
    5. 회원가입/탈퇴 기능
        - 회원가입을 통해 서비스에 가입 및 이용 가능
        - 필요한 정보를 데이터베이스에 저장(아이디, 비밀번호 등)
        - 가입 후 로그인 가능
        - 마이페이지에서 회원 탈퇴 가능
        - 탈퇴 전 추가 확인 창이 표시되며, 확인 후 회원 정보 삭제
    
    6. 로그인/로그아웃 기능
        - 등록된 사용자 아이디, 비밀번호를 입력하여 로그인 가능
        - 서버는 입력된 정보를 검증 후 올바른 경우 인증 토큰 부여
        - 인증 토큰 확인하여 권한 있는지 확인 후 서비스 모든 기능 이용
        - 사용자는 세션 토큰을 통해 로그인 상태 유지
        - 서버에 요청을 보낼 때마다 토큰 유효성 확인/만료시 로그인 페이지로 리다이렉트
        - 로그아웃 클릭 시 세션 토큰을 무효화하여 로그아웃 처리
        - 로그아웃 후 일부 기능 접근 제한
    
    7. FAQ
        - 고객이 자주 묻는 질문 답변
        - 검색 및 카테고리, 버튼을 통해 편리함
        - DB에서 데이터를 가져와 아코디언 방식으로 구현
    
    8. 마이페이지 기능
        - 마이페이지에서 개인 정보를 확인하고 수정 가능
        - 주문 내역 날짜별 조회 가능 

    9. 브랜드 소개
        - 브랜드 및 회사 소개 페이지
        - 스토리와 역사를 보여주는 페이지
        - 브랜드 음식 품질 상태 및 관리 소개 페이지
        - 브랜드 봉사활동 소개 페이지
          
    10. 관리자 페이지
        - 관리자 메인 페이지 일 월 총 매출 및 인기 버거 확인 가능
        - 메뉴페이지 음식 및 디저트 수정 및 삭제 추가 기능
        - 맥도날드 이벤트 및 뉴스 수정 및 삭제 추가 기능
        - 지점 수정 및 삭제 추가 기능
        - 브랜드 소개 및 품질 관리 등 내용 수정 및 삭제 추가 기능
        - 주문 상태 변경 관리 페이지
        - 각 홈페이지 배너 이미지 수정 및 삭제 추가 기능 
        - 메뉴 선택 후 추가 토핑 및 디저트 수정 및 삭제 추가 기능
        - 메인 홈페이지 슬라이더 부분 사진 및 동영상 수정 및 삭제 추가 기능
      
4. 유저 시나리오
  - WHO 
    - 짧은 점심시간을 효율적으로 활용하고 싶은 직장인, 학생, 바쁜 일상 속에서 손쉽게 식사를 즐기고자 하는 모든 이들에게 맥도날드는 최적의 선택입니다.
  - WHAT
    - 맥도날드는 햄버거, 치킨, 감자튀김, 음료, 디저트 등의 메뉴로 다양한 패스트 푸드를 제공합니다. 특히 빠르게 포장하여 신속하게 섭취할 수 있는 특징이 있습니다. 맥도날드는 다채로운 메뉴로 신선하고 맛있는 음식을 제공합니다.
  - WHEN
    - 맥도날드는 언제 어디서든지 신속하게 대응할 수 있는 메뉴와 서비스를 제공합니다. 배가 고픈데 밥이 땡기지 않을 때 혹은 빠르게 음식을 받고 싶을 때, 맥도날드는 최적의 선택이 될 것입니다.
  - WHERE
    - 맥도날드는 도시, 시가지, 쇼핑몰, 공항 등 다양한 장소에 매장을 운영하고 있어, 언제 어디서든 손쉽게 맛있는 식사를 즐길 수 있습니다. 맥도날드의 광범위한 위치는 고객들에게 편리하게 이용할 수 있는 환경을 제공합니다.
  - WHY
    - 맥도날드는 빠른 서비스와 풍부한 메뉴로 고객들에게 편안하고 맛있는 식사 경험을 제공하기 위해 설립되었습니다. 어떤 상황에서도 빠르게 식사를 해결할 수 있는 옵션을 제공하며, 풍부한 메뉴와 퀄리티로 고객들의 다양한 맛에 부합하고 있습니다. 맥도날드는 항상 신선하고 맛있는 음식을 제공하여 고객들이 편안하게 즐길 수 있는 장소로 인정받고 있습니다.


### ✔️ 프로젝트 구조

#### 🧩 front-end

![front-end](/readme-file/front-end.svg)

> 페이지별 구조

- Main : 페이지 기반으로 구현된 서비스.
* Main : 메인페이지/ 경로 접속 시 라우팅되는 메인 페이지
* Menu : 각 메뉴 상품을 보여주는 페이지
* Store : 지점 및 배달 소개 페이지
* Whats-New : 이달의 프로모션, 소식, 이벤트 보여주는 페이지
* Story : 브랜드 소개, 사회 및 품질, 인재 등 소개 페이지
* Login : 로그인 페이지
* Join : 회원가입 페이지
* Mypage: 회원 계정 정보, 주문 내역 확인 및 수정 페이지
* Admin : 페이지 관리 페이지
* payment : 상품 결제 페이지
<br/><br/>
#### 🧩 back-end
<br/>

![back-end](/readme-file/back-end.png)

> 로직 구조

- config : 환경변수 설정
- model : DB와 연동하여 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- schemas : DB와 테이블 정의
- sqlFile : DB 파일 저장
- routes : 요청 받은 정보를 알맞게 가공 후 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- controllers : 서비스로 요청 전달 및 응답 
- utils/token: JWT토큰 생성, 회원 인증
- services : 요청받은 정보를 알맞게 가공하는 로직 수행

<br/>

#### 🧩 ERD

<br/>

![ERD](/readme-file/ERD.svg)

- [ERD 다이어그램](https://dbdiagram.io/d/mcdonald-ERD-657133f656d8064ca08ba43c)

<br/>

#### 🧩 Architecture

![Architecture](/readme-file/Architecture.png)

<br/>

### ✔️ 페이지 구성

## 💻 3. Stacks

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt="node.js" src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="express" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img alt="Sequelize" src ="https://img.shields.io/badge/sequelize-52B0E7.svg?&style=for-the-badge&logo=sequelize&logoColor=white"/> <img alt="MySQL" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> <img alt="MUI" src ="https://img.shields.io/badge/mui-007FFF.svg?&style=for-the-badge&logo=mui&logoColor=white"/> 

### 💻 Dependencies

<img alt="npm" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/> <img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <img alt=".env" src ="https://img.shields.io/badge/.ENV-ECD53F.svg?&style=for-the-badge&logo=dotenv&logoColor=white"/> <img alt="multer" src ="https://img.shields.io/badge/multer-000000.svg?&style=for-the-badge&logo=multer&logoColor=White"/> <img alt="jsonwebtokens" src ="https://img.shields.io/badge/jsonwebtokens-000000.svg?&style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>

### 🔗 Cooperation

<img alt="github" src ="https://img.shields.io/badge/github-000000.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="discord" src ="https://img.shields.io/badge/discord-5662F6.svg?&style=for-the-badge&logo=discord&logoColor=white"/>

### 🌏 With Deploy

<img alt="Amazon" src ="https://img.shields.io/badge/Amazon EC2-FF9900.svg?&style=for-the-badge&logo=amazonec2&logoColor=white"/> <img alt="nginx" src ="https://img.shields.io/badge/nginx-009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/> <img alt="pm2" src ="https://img.shields.io/badge/pm2-2B037A.svg?&style=for-the-badge&logo=pm2&logoColor=white"/>

## 5. 트러블 슈팅
 
 ### 1. API 호출 이슈
 
  - 문제: 개발 완료 후 Build 파일로 교체했을 때 백엔드 API와 React의 route 주소가 겹쳐 화면이 안나오고 백엔드에 get 요청이 되는 이슈
  - 해결책: 문제를 해결하기 위해 백엔드 API 주소를 변경. 기존 루트 주소로 요청을 보내고 있었으나, 변경 후에는 API 요청 시에 /api를 앞에 추가하여 요청하도록 수정. 이를 통해 프론트엔드와 백엔드 간의 라우트 충돌을 방지하고, 각각이 올바르게 동작하도록 조치.

<br/>

```javascript
axios.get(`${API_URL}/api/store`)
.then(res => {
  setResult(res.data);
}).catch(err => {
  console.error(err);
})
```
    
 ### 2. 레이아웃 깨짐

  - 문제: 관리자 메인 페이지 화면 레이아웃이 예상과 다르게 깨지는 문제가 발생.
  - 해결책: CSS Grid 등을 사용하여 레이아웃을 안정적으로 유지하도록 스타일을 조정.

<br/>

![css](/readme-file/admin-grid.png)

 ### 3. 먼저 내 위치를 선택하고 매장을 선택한 후 다시 내 위치를 선택하면 작동하지 않는 문제

  - 문제: 초기에 내 위치를 선택하고 매장을 선택한 후에 다시 내 위치를 선택하면 지도 및 마커 동작이 정상적으로 이루어지지 않는 문제가 발생.
  - 해결책: 내 위치나 매장을 선택할 때마다, 기존에 생성된 지도와 마커를 초기화하고 새로운 지도와 마커를 생성하며, 이전에 생성한 마커와 이벤트를 해제하고 새로운 마커와 이벤트를 추가. 다시 내 위치를 선택한 경우, 지도의 중심을 사용자의 위치로 재설정.

```javascript
function Maps({ stores, onMarkerClick, clickedStore, myLocation }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.55415495198728, 126.97078657543889),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  
    // 매장 정보를 이용하여 마커 생성 및 지도에 추가
    stores.forEach((store) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(store.latitude, store.longitude),
        title: store.store_name,
      });
  
      kakao.maps.event.addListener(marker, "click", function () {
        onMarkerClick(store);
      });
  
      marker.setMap(map);
    });
  
    // clickedStore가 변경되면 해당 좌표로 지도 이동
    if (clickedStore) {
      const { latitude, longitude } = clickedStore;
      const moveLatLng = new kakao.maps.LatLng(latitude, longitude);
      map.panTo(moveLatLng);
    } else if (myLocation) {
      // 내 위치 중심으로 지도 이동
      const { latitude, longitude } = myLocation;
      const moveLatLng = new kakao.maps.LatLng(latitude, longitude);
      map.panTo(moveLatLng);
    }
  }, [stores, onMarkerClick, clickedStore, myLocation]);
```

## 6. END

- 한국정보교육원 웹 프론트엔드 클라우드 콘솔 개발자 양성과정 3회차 1조 

## ✔️프로젝트 멤버 구성

|  front-end   | back-end |
| :----------: | :------- |
| 김지환(팀장) | 김지환    |
|    김준녕    | 김준녕   |
|    임헌성    |          |
|    박승균    |          |
|    백승준    |          |
|    김정혁    |          |
|    유재혁    | 유재혁    |    
## 팀원별 역할

### 김지환(팀장)

- 해피밀 (프론트,디자인)
- 프로모션 (프론트,디자인)
- 새로운소식 (프론트,디자인)
- 백엔드 (맥딜리버리,매장찾기,장바구니,결제,마이페이지)
- 관리자 페이지 백엔드 전체
- 관리자 페이지 프론트,디자인 (해피밀,프로모션,새로운소식,메인,로그인)
- 프로젝트 문서화 (back-end, ERD, 트러블 슈팅)
- AWS EC2 활용하여 프로젝트 배포
- NginX 리버스 프록시, https 적용
- Node.js 서버 구조 설계 (Controllers-Services-models 구조)
- React 폴더 구조 설계
- JWT accessToken, refreshToken과 Redis를 사용한 사용자 인증 구현
- Recoil 상태관리 라이브러리를 사용해 사용자 로그인 상태 관리
- 토스 페이먼츠로 결제 구현
- API 설계 및 DB 구조 설계

### 김준녕

- 품질이야기 (프론트,디자인,백엔드)
- 사람들 (프론트,디자인,백엔드)
- 매장찾기 (프론트, 디자인)
- 관리자 페이지 프론트,디자인 (재료,크루,노력,FAQ)
- 관리자 페이지 대시보드 구현
- 페이지네이션 관리자 페이지 적용
- MUI 활용한 관리자 메인페이지 기본 틀 구현
- 프로젝트 문서화 (front-end, Architecture, 트러블 슈팅)
- 관리자 페이지 사용 설명서 작성
- 카카오맵 API 및 MyLocation 기능

### 유재혁

- 메뉴 (프론트,디자인,백엔드)
- 메뉴 디테일 (프론트,디자인,백엔드)
- 로그인 (프론트,디자인,벡엔드)
- 회원가입 (프론트,디자인,벡엔드)
- 장바구니 (프론트, 디자인)
- 관리자페이지 프론트,디자인 (메뉴)
- 로그인 회원가입 유효성 검사 구현
- Daum 우편 번호 API 활용한 주소 찾기 기능 구현

### 김정혁

- 브랜드 소개 (프론트,디자인)
- 매장 찾기 (프론트, 디자인)
- 관리자페이지(매장관리) 프론트,디자인
  
### 임헌성

- 메인페이지 (프론트,디자인,슬라이더)
- 헤더 (프론트,디자인,드롭다운)
- 푸터 (프론트,디자인,개인정보처리방침 컴포넌트)
- 관리자페이지 (옵션, Slider, Banner) 프론트, 디자인
- Aside 기능 구현
- 관리자 페이지 사용 설명서
- 프로젝트 문서화 (서비스 설명, 소개)

### 박승균

- 임차문의 (프론트,디자인)
- 맥드라이브 (프론트,디자인)

### 백승준

- 사회적 책임과 지원 (프론트,디자인)
- 책임과 지원 디테일 (프론트,디자인)
  


