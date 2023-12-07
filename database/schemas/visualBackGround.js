const Sequelize = require("sequelize");

class VisualBackGround extends Sequelize.Model {
  static initiate(sequelize) {
    VisualBackGround.init({
      id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        comment: "(기본키)",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "타이틀",
      },
      subCopy: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "서브",
      }, 
      backgroundImage: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "배경이미지url",
      }, 
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "주소(배열형태)",
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'VisualBackGround',
      tableName: 'visualBackGrounds',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    //참조키로 Pay모델에 id(sourceKey)를 visualBackGroundId(foreignKey)라는 이름으로 보냄
    // db.VisualBackGround.hasMany(db.Pay, { foreignKey: 'visualBackGroundId', sourceKey: 'id'});//pay태이블로 보냄 hasMany 가 보낸다 라는뜻
    // db.VisualBackGround.hasMany(db.PlayHistory, { foreignKey: 'visualBackGroundId', sourceKey: 'id'});
    // db.VisualBackGround.hasMany(db.PlayList, { foreignKey: 'visualBackGroundId', sourceKey: 'id'});
    // db.VisualBackGround.hasMany(db.Reservation, { foreignKey: 'visualBackGroundId', sourceKey: 'id'});//Reservation로 보냄 hasMany 가 보낸다 라는뜻
  }
};

module.exports = VisualBackGround;