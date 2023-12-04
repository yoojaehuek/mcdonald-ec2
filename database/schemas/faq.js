const Sequelize = require("sequelize");

class FAQ extends Sequelize.Model {
  static initiate(sequelize) {
    FAQ.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false, 
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'FAQ',
        tableName: 'faq',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    //???
  }
}

module.exports = FAQ;
