const Order = require('../schemas/order'); 
const OrderMenu = require('../schemas/orderMenu'); 
const OrderOption = require('../schemas/orderOption'); 
// const Planner = require('../schemas/planner'); 

class OrderModel {

  static async createOrder({newOrder}){
    // console.log("newOrder: ",newOrder);
    const createNewOrder = await Order.create({
      user_id: newOrder.userId,
      store_id: newOrder.store_id,
    });
    return createNewOrder;
  }

  static async findOneOrderUserId({id}){
    console.log("orderId: ",id);
    const order = await Order.findOne({
      where: {
        userId: id
      }
    }); //where: {id: asdf} 형태가 들어와야함
    // console.log(order);
    return order;
  }

  static async findOneOrderUserId2({id}){
    // console.log("orderId",id);
    const order = await Order.findOne({
      where: {
        userId: id,
      },
      include: [{
        model: Planner,
        attributes: ['name', 'phone'],
      }],
    }); //where: {id: asdf} 형태가 들어와야함
    return order;
  }

  static async destroyOrder({id}){
    // console.log("orderId",orderId);
    const order = await Order.destroy({
      where: {
        userId: id
      }
    });//where: {id: asdf} 형태가 들어와야함
    return order;
  }

  static async createOrderMenu({order_id, item}){
    // console.log("OrderMenu: ",order_id);
    const createNewOrderMenu = await OrderMenu.create({
      'order_id': order_id,
      product_id: item.menu_id,
      quantity: item.quantity,
    });
    return createNewOrderMenu;
  }

  static async findAllOrderMenuByOrderId({orderId}){
    const orderMenus = await OrderMenu.findAll({
      where: {
        order_id: orderId,
      }
    });
    return orderMenus;
  }

static async createOrderOption({orderMenu_id, option}){
    // console.log("option: ",option);
    const createNewOrderMenu = await OrderOption.create({
      'orderMenu_id': orderMenu_id,
      option_id: option.option_id,
      quantity: option.quantity,
    });
    return createNewOrderMenu;
  }

  static async findAllOrderOptionByOrderId({orderMenuId}){
    const orderOptions = await OrderOption.findAll({
      where: {
        orderMenu_id: orderMenuId,
      }
    });
    return orderOptions;
  }
}

module.exports = OrderModel;