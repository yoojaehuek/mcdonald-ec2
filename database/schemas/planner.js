const Sequelize = require("sequelize");
// 플레너(플레너id, pw, name, phone)
class Planner extends Sequelize.Model {
    static initiate(sequelize) {
    Planner.init({
        id: {
            type: Sequelize.STRING(20),
            primaryKey: true,
            allowNull: false,
            comment: "플레너 ID (기본키)",
        },
        pwd: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "비밀번호",
        },
        profileImgUrl: {
            type: Sequelize.STRING,
            allowNull: false,
            comment: "상담사프로필사진",
        },
        point: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "지점",
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "이름",
        },
        phone: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "전화번호",
        },
        introduction: {
            type: Sequelize.STRING,
            allowNull: false,
            comment: "소개",
        },
        regdate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
            comment: "플레너 회원 가입일",
        },
        }, {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Planner',
        tableName: 'planners',
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
        db.Planner.hasMany(db.Reservation, { foreignKey: 'plannerId', sourceKey: 'id'});
    }
};

module.exports = Planner;