const Sequelize = require("sequelize");


class Slider extends Sequelize.Model {
  static initiate(sequelize) {
    Slider.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        content_url: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "슬라이더안에 들어갈 이미지, 동영상 저장 경로"
        }
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'Slider',
        tableName: 'Slider',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }

    )
  }
  static associate(db) {
    //???
  }

}

module.exports = Slider;