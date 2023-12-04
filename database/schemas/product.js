const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static initiate(sequelize) {
    return Product.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          comment: "상품 아이디 (기본키)",
        },
        name: {
          type: Sequelize.STRING(200),
          allowNull: false,
          comment: "상품 이름",
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "상품 가격",
        },
        imageUrl: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "이미지 URL 주소",
        },
        galleryImages: {
          type: Sequelize.JSON,
          allowNull: false,
          comment: "갤러리 이미지 배열",
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "상품 카테고리",
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "상품 제목",
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "상품 설명",
        },
        detailType: {
          type: Sequelize.JSON,
          allowNull: false,
          comment: "상세 정보 배열",
        },
        detailDescription: {
          type: Sequelize.JSON,
          allowNull: false,
          comment: "상세 정보 설명",
        },
        detailPrice: {
          type: Sequelize.JSON,
          allowNull: false,
          comment: "상세 정보 가격",
        },
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
