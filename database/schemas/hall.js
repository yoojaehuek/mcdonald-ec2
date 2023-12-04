const Sequelize = require("sequelize");

class Hall extends Sequelize.Model {
    static initiate(sequelize) {
        Hall.init(
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            hallName: {
                type: Sequelize.STRING,
                allowNull: false,
                comment:"홀이름",
            },
            hallImg: {
                type: Sequelize.STRING,
                allowNull: false,
                comment:"홀 이미지 주소",
            },
            Capacity: {
                type: Sequelize.STRING,
                allowNull: false,
                comment:"수용가능인원",
            },
            ParkingCapacity: {
                type: Sequelize.STRING,
                allowNull: false, 
                comment:"주차가능 대수",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Hall',
            tableName: 'halls',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }
        );
    }

    static associate(db) {}
}

module.exports = Hall;
