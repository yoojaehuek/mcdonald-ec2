const Hall = require('../schemas/hall'); 

class HallModel {
    static async findAll(){
        const hall = await Hall.findAll();
        return hall;
    } 
}

module.exports = HallModel; 