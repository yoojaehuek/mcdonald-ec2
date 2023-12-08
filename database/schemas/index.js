const Sequelize = require('sequelize');
const Admin = require('./admin');
const Category = require('./category');
const Crew = require('./crew');
const Effort = require('./effort');
const Faq = require('./faq');
const HappyMeal = require('./happymeal');
const Material = require('./material');
const News = require('./news');
const Option = require('./option');
const Order = require('./order');
const OrderOption = require('./orderOption');
const OrderMenu = require('./orderMenu');
const Product = require('./product');
const Promotion = require('./promotion');
const Store = require('./store')
const SubCategory = require('./subCategory');
const User = require('./user'); //user파일을 User로 불러옴 
const VisualBackGround = require('./visualBackGround');

const env = process.env.NODE_ENV || 'development'; //상수 env에 NODE_ENV없으면 'development' 넣음
const config = require('../../config/config.json')[env]; //상수config에 ../config/config파일에서 env(development) 불러옴
const db = {}; //상수 db라는 빈 객체 생성

//sequelize 인스턴스 생성../config/config파일의 development 내용들 넣음  
const sequelize = new Sequelize(config.database, config.username, config.password, config); 

//생성된 인스턴스를 나중에 재사용하기 위해 db.sequelize에 넣음
db.sequelize = sequelize;

//만든 모델들 추가
db.Admin = Admin;
db.Category = Category;
db.Crew = Crew;
db.Effort = Material;
db.Faq = Faq;
db.HappyMeal = HappyMeal;
db.Material = Material;
db.News = News;
db.Option = Option;
db.Order = Order;
db.OrderOption = OrderOption;
db.OrderMenu = OrderMenu;
db.Product = Product;
db.Promotion = Promotion;
db.Store = Store;
db.SubCategory = SubCategory;
db.User = User;
db.VisualBackGround = VisualBackGround;



Admin.initiate(sequelize);
Category.initiate(sequelize);
SubCategory.initiate(sequelize);
Crew.initiate(sequelize);
Effort.initiate(sequelize);
Faq.initiate(sequelize);
HappyMeal.initiate(sequelize);
Material.initiate(sequelize);
News.initiate(sequelize);
Option.initiate(sequelize);
Order.initiate(sequelize);
OrderOption.initiate(sequelize);
OrderMenu.initiate(sequelize);
Product.initiate(sequelize);
Promotion.initiate(sequelize);
Store.initiate(sequelize);
User.initiate(sequelize);
VisualBackGround.initiate(sequelize);


Admin.associate(db);
Category.associate(db);
Crew.associate(db);
Effort.associate(db);
Faq.associate(db);
Material.associate(db);
News.associate(db);
Option.associate(db);
Order.associate(db);
OrderOption.associate(db);
OrderMenu.associate(db);
Product.associate(db);
Promotion.associate(db);
HappyMeal.associate(db);
Store.associate(db);
User.associate(db);
VisualBackGround.associate(db);
SubCategory.associate(db);

module.exports = db;