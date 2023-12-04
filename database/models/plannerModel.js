const Planner = require('../schemas/planner'); 

class PlannerModel {
    static async findAllByPoint({point}){
        const planner = await Planner.findAll({
          where: {
            point: point,
          }
        });
        return planner;
    } 
}

module.exports = PlannerModel;