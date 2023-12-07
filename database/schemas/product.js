const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static initiate(sequelize) {
    return Product.init(
      {
        // id: {
        //   type: Sequelize.INTEGER,
        //   autoIncrement: true,
        //   primaryKey: true,
        //   allowNull: false,
        //   comment: "상품 아이디 (기본키)",
        // },
        // sub_category_id: {
        //   type: Sequelize.STRING,
        //   allowNull: 
        //   false,
        //   comment: "",
        // },
        // admin_id: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   comment: "",
        // },
        // k_name: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "한글 상품이름",
        // },
        // e_name: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "영어 상품이름",
        // },
        // thumbnail_img_url: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "상품 카테고리",
        // },
        // link: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "상품 제목",
        // },
        // seq: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   comment: "",
        // },
        // description: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "",
        // },
        // sale_start_time: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "",
        // },
        // sale_end_time: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "",
        // },
        // nutritional_information: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "",
        // },
        // llergen_information: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "",
        // },
        // cuntry_of_origin: {
        //   type: Sequelize.VARCHAR(50),
        //   allowNull: false,
        //   comment: "",
        // },
        // price: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   comment: "",
        // },
        // created_at: {
        //   type: Sequelize.timestamps(50),
        //   allowNull: false,
        //   comment: "",
        // },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Product',
        tableName: 'products',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
}

module.exports = Product;
