const Sequelize = require('sequelize'); 
const User = require('./user'); //user파일을 User로 불러옴 
const FAQ = require('./faq');
// const Product = require('./product');
// const Planner = require('./planner')//planner 파일을 Planner로 불러옴
// const Point = require('./point')//point.js 파일을 Point로 불러옴
// const Reservation = require('./reservation')//point.js 파일을 Point로 불러옴
// const Hall = require('./hall')
const Crew = require('./crew');
const Material = require('./Material');
const Effort = require('./Effort');

const env = process.env.NODE_ENV || 'development'; //상수 env에 NODE_ENV없으면 'development' 넣음
const config = require('../../config/config.json')[env]; //상수config에 ../config/config파일에서 env(development) 불러옴
const db = {}; //상수 db라는 빈 객체 생성

//sequelize 인스턴스 생성../config/config파일의 development 내용들 넣음  
const sequelize = new Sequelize(config.database, config.username, config.password, config); 

//생성된 인스턴스를 나중에 재사용하기 위해 db.sequelize에 넣음
db.sequelize = sequelize;

//만든 모델들 추가
db.User = User;
db.Crew = Crew;
db.FAQ = FAQ;
db.Material = Material;
db.Effort = Material;
// db.Product = Product;
// db.Planner = Planner;
// db.Point = Point;
// db.Reservation = Reservation;
// db.Hall = Hall;
//s

User.initiate(sequelize);
Crew.initiate(sequelize);
FAQ.initiate(sequelize);
Material.initiate(sequelize);
Effort.initiate(sequelize);
// Product.initiate(sequelize);
// Planner.initiate(sequelize);
// Point.initiate(sequelize);
// Reservation.initiate(sequelize);
// Hall.initiate(sequelize);


User.associate(db);
// FAQ.associate(db);
// Planner.associate(db);
// Point.associate(db);
// Reservation.associate(db);
// Hall.associate(db);

module.exports = db;