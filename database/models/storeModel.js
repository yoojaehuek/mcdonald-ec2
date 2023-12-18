const Store = require('../schemas/store'); 
const { Op } = require('sequelize');

class StoreModel {
  static async createStore({newStore}){
    console.log("newStore",newStore);
    const createNewStore = await Store.create(newStore);
    return createNewStore;
  }

  static async getAllStore(){
    // console.log("storeId: ",storeId);
    const result = await Store.findAll();
    return result;
  }

  static async getMcdelivery({dongWithoutLastCharacter}){
    // console.log("storeId: ",storeId);
    const result = await Store.findAll({
      where: {
        address: {
          [Op.like]: `%${dongWithoutLastCharacter}%`,
        }
      }
    });
    return result;
  }

  // static async findOneStoreEmail({email}){
  //   console.log("storeId",typeof(email));
  //   const store = await Store.findOne({
  //     where: {
  //       email: email
  //     }
  //   }); //where: {id: asdf} 형태가 들어와야함
  //   console.log("찾음: ",store);
  //   return store;
  // }
  
  static async putStore({update, storeId}){
    console.log("update: ",update);
    const store = await Store.update({
      ...update
    }, {
      where: {
        id: storeId
      }
    });//where: {id: asdf} 형태가 들어와야함
    return store;
  }

  static async destroyStore({storeId}){
    // console.log("storeId",storeId);
    const store = await Store.destroy({
      where: {
        id: storeId
      }
    });//where: {id: asdf} 형태가 들어와야함
    return store;
  }

}

module.exports = StoreModel; 