const User = require('../schemas/user'); 

class UserModel {
  static async createUser({newUser}){
    console.log("newUser",newUser);
    const createNewUser = await User.create(newUser);
    return createNewUser;
  }

  static async findOneUserId({id}){
    // console.log("userId",id);
    const user = await User.findOne({
      where: {
        id: id
      }
    }); //where: {id: asdf} 형태가 들어와야함
    return user;
  }

  static async destroyUser({userId}){
    // console.log("userId",userId);
    const user = await User.destroy({
      where: {
        id: userId
      }
    });//where: {id: asdf} 형태가 들어와야함
    return user;
  }
}

module.exports = UserModel; 