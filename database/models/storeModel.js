const Store = require('../schemas/store'); 
const { Op } = require('sequelize');

class StoreModel {
<<<<<<< HEAD
  static async createStore({newStore}){
    console.log("newStore",newStore);
    const createNewStore = await Store.create(newStore);
    return createNewStore;
=======

  static async createStore({newStore}){
    console.log("newStore",newStore);
    const result = await Store.create(newStore);
    return result;
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
  }

  static async getAllStore(){
    // console.log("storeId: ",storeId);
    const result = await Store.findAll();
    return result;
  }

<<<<<<< HEAD
=======
  static async getOneStore({store_id}){
    // console.log("storeId: ",storeId);
    const result = await Store.findOne({
      where: {
        id: store_id,
      }
    });
    return result;
  }

>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
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
  
<<<<<<< HEAD
  static async putStore({update, storeId}){
    console.log("update: ",update);
=======
  static async updateStore({update, store_id}){
    console.log("Model/update: ",update);
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
    const store = await Store.update({
      ...update
    }, {
      where: {
<<<<<<< HEAD
        id: storeId
=======
        id: store_id
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
      }
    });//where: {id: asdf} 형태가 들어와야함
    return store;
  }

<<<<<<< HEAD
  static async destroyStore({storeId}){
    // console.log("storeId",storeId);
    const store = await Store.destroy({
      where: {
        id: storeId
=======
  static async deleteStore({store_id}){
    // console.log("storeId",storeId);
    const store = await Store.destroy({
      where: {
        id: store_id
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
      }
    });//where: {id: asdf} 형태가 들어와야함
    return store;
  }

}

module.exports = StoreModel; 