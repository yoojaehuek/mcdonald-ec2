const Sequelize = require("sequelize");
//지점(id, name, content, information, hall, location, mainImgUrl, infoImgUrl, HallImgUrl)
class Point extends Sequelize.Model {
    static initiate(sequelize) {
    Point.init({
        id: {
            type: Sequelize.STRING(20),
            primaryKey: true,
            allowNull: false,
            comment: "지점 ID (기본키)",
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "지점 이름",
        },
        content: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "지점 콘텐츠",
        },
        information:{
            type:Sequelize.STRING(20),
            allowNull:false,
            comment:"지점 정보"
        },
        hall:{
            type:Sequelize.STRING(20),
            allowNull:false,
            comment:"홀",
        },
        location:{
            type:Sequelize.STRING(20),
            allowNull:false,
            comment:"지점 위치",
        },
        mainImgUrl:{
            type:Sequelize.STRING,
            allowNull:false,
            comment:"메인이미지 url"
        },
        infoImgUrl:{
            type:Sequelize.STRING,
            allowNull:false,
            comment:"info이미지 url"
        },
        HallImgUrl:{
            type:Sequelize.STRING,
            allowNull:false,
            comment:"홀 이미지 url"
        },
        }, {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Point',
        tableName: 'points',
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
    }
};

module.exports = Point;