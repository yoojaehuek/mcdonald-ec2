const Sequelize = require("sequelize");
// 예약(예약 id, 참조키=(고객id, 플레너id, prodId), 예약일,예약시간, 예약장소)	

class Reservation extends Sequelize.Model {
    static initiate(sequelize) {
        Reservation.init({
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            comment: "예약 ID (기본키)",
        },
        userId: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "유저 ID (참조키) ",
        },
        plannerId: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "플레너 ID (참조키) ",
        },
        point:{
            type:Sequelize.STRING(20),
            allowNull:false,
            comment:"지점"
        },
        date: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "방문일",
        },
        time: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "희망 시간대",
        },
        contactChoice: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "선호하는 연락 방법",
        },
        theme: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "방문 인원",
        },
        }, {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Reservation',
        tableName: 'reservations',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        //참조키로 Pay모델에 id(sourceKey)를 userId(foreignKey)라는 이름으로 보냄
        // db.User.hasMany(db.Pay, { foreignKey: 'userId', sourceKey: 'id'});//pay태이블로 보냄 hasMany 가 보낸다 라는뜻
        // db.User.hasMany(db.PlayHistory, { foreignKey: 'userId', sourceKey: 'id'});
        // db.User.hasMany(db.PlayList, { foreignKey: 'userId', sourceKey: 'id'});

        db.Reservation.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'id'});//user의 id를 userId 로 받아옴 
        db.Reservation.belongsTo(db.Planner, {foreignKey: 'plannerId', targetKey: 'id'});//user의 id를 userId 로 받아옴 
    }
};

module.exports = Reservation;