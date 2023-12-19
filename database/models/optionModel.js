const Option = require('../schemas/option'); 
Option
class OptionModel {
    static async findOneByid({optionId}){
        const option = await Option.findOne({
          attributes: ['name', 'price'],
          where: {
            id: optionId,
          }
        });
        return option;
    } 
}

module.exports = OptionModel;