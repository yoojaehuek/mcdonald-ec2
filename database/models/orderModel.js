const { Product, Store, Option } = require('../schemas');
const Order = require('../schemas/order'); 
const OrderMenu = require('../schemas/orderMenu'); 
const OrderOption = require('../schemas/orderOption'); 
const { Op } = require('sequelize');

class OrderModel {

  static async createOrder({newOrder}){
    // console.log("newOrder: ",newOrder);
    const createNewOrder = await Order.create({
      user_id: newOrder.userId,
      store_id: newOrder.store_id,
    });
    return createNewOrder;
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

  static async createOrderOption({orderMenu_id, option}){
    // console.log("option: ",option);
    const createNewOrderMenu = await OrderOption.create({
      'orderMenu_id': orderMenu_id,
      option_id: option.option_id,
      quantity: option.quantity,
    });
    return createNewOrderMenu;
  }


//조회 쿼리
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
  
  static async findAllOrderMenuByOrderId({orderId}){
    const orderMenus = await OrderMenu.findAll({
      where: {
        order_id: orderId,
      }
    });
    return orderMenus;
  }

  static async findAllOrderOptionByOrderId({orderMenuId}){
    const orderOptions = await OrderOption.findAll({
      where: {
        orderMenu_id: orderMenuId,
      }
    });
    return orderOptions;
  }

  static async findAllOrderDate({userId, date}){
    
    // // 서비스에서 날짜 정해서 넘겨주기 
    // const oneMonthAgo = new Date();
    // oneMonthAgo.setMonth(oneMonthAgo.getMonth()-1);
    // console.log(oneMonthAgo);

    const result = await Order.findAll({
      where: {
        user_id: userId,
        created_at: {
          [Op.between]: [date, new Date()],
        }
      },
      attributes: ['id', 'status', 'created_at'],
      include: [
        { 
          model: OrderMenu,
          attributes: ['quantity'],
          include: [
            {
              model: Product,
              attributes: ['k_name', 'price', 'thumbnail_img_url'],
            },
            {
              model: OrderOption,
              attributes: ['quantity'],
              required: false,
              include: [
                {
                  model: Option,
                  attributes: ['name', 'price'],
                }
              ],
            },
          ]
        },
        {
          model: Store,
          attributes: ['store_name']
        },
      ],
      /*--  위 시퀄문 sql버전 
      SELECT 
        `Order`.`id`, 
          `Order`.`status`, 
          `Order`.`created_at`, 
          `OrderMenus`.`id` AS `OrderMenus.id`, 
          `OrderMenus`.`quantity` AS `OrderMenus.quantity`, 
          `OrderMenus->Product`.`id` AS `OrderMenus.Product.id`, 
          `OrderMenus->Product`.`k_name` AS `OrderMenus.Product.k_name`, 
          `OrderMenus->Product`.`price` AS `OrderMenus.Product.price`, 
          `OrderMenus->Product`.`thumbnail_img_url` AS `OrderMenus.Product.thumbnail_img_url`, 
          `OrderMenus->OrderOptions`.`id` AS `OrderMenus.OrderOptions.id`, 
          `OrderMenus->OrderOptions`.`quantity` AS `OrderMenus.OrderOptions.quantity`, 
          `OrderMenus->OrderOptions->Option`.`id` AS `OrderMenus.OrderOptions.Option.id`, 
          `OrderMenus->OrderOptions->Option`.`name` AS `OrderMenus.OrderOptions.Option.name`, 
          `OrderMenus->OrderOptions->Option`.`price` AS `OrderMenus.OrderOptions.Option.price`, 
          `Store`.`id` AS `Store.id`, 
          `Store`.`store_name` AS `Store.store_name` 
      FROM `Order` AS `Order`
      LEFT OUTER JOIN `OrderMenu` AS `OrderMenus` ON `Order`.`id` = `OrderMenus`.`order_id` 
      LEFT OUTER JOIN `Product` AS `OrderMenus->Product` ON `OrderMenus`.`product_id` = `OrderMenus->Product`.`id` 
      LEFT OUTER JOIN `OrderOption` AS `OrderMenus->OrderOptions` ON `OrderMenus`.`id` = `OrderMenus->OrderOptions`.`orderMenu_id` 
      LEFT OUTER JOIN `Option` AS `OrderMenus->OrderOptions->Option` ON `OrderMenus->OrderOptions`.`option_id` = `OrderMenus->OrderOptions->Option`.`id` 
      LEFT OUTER JOIN `Store` AS `Store` ON `Order`.`store_id` = `Store`.`id` 
      WHERE `Order`.`user_id` = 1 AND `Order`.`created_at` BETWEEN '2023-12-15 09:26:08' AND '2023-12-17 09:26:08';
      */
    });
    return result;
  }

//삭제 쿼리
  static async deleteOrder({order_id}){
    // console.log("orderId",orderId);
    const order = await Order.destroy({
      where: {
        id: order_id
      }
    });//where: {id: asdf} 형태가 들어와야함
    return order;
  }

}

module.exports = OrderModel;