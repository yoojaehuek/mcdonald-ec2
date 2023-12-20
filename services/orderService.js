const OrderModel = require('../database/models/orderModel');
// const PlannerModel = require('../database/models/plannerModel');

class OrderService{

  static async addOrder({store_id, menu_items, userId}){
    // console.log("userId: ", userId);
    // console.log("store_id: ", store_id);
    // console.log("menu_items: ", menu_items);
    
    // //이미 예약한 유저면 막기
    // const order = await OrderModel.findOneOrderUserId({ id: userId });
    // // console.log(order);
    // if (order != null) {
    //   const errorMessage = "이미 예약하신 내역이 있습니다.";
    //   return { errorMessage };      
    // }

    const newOrder = {store_id, menu_items, userId};
		
    //예약테이블에 INSERT INTO
		const createNewOrder = await OrderModel.createOrder({newOrder});
    const order_id = createNewOrder.id;
    console.log("createNewOrder: ", createNewOrder.get({ plain: true }));
    // console.log("order_id: ", order_id);
    
    menu_items.map( (item, index) => { //장바구니에 담은 존류만큼 반복 
      // console.log('item: ', item);
      // const createNewOrderMenu = await OrderModel.createOrderMenu({order_id, newOrder});
      OrderModel.createOrderMenu({order_id, item})
        .then(createNewOrderMenu => {
          const orderMenu_id = createNewOrderMenu.id;
          console.log("createNewOrderMenu: ", createNewOrderMenu.get({ plain: true }));
          if (item.options.length != 0) { //옵션을 선택했을때만 작동
            item.options.map((option, index) => { //옵션의 종류만큼 반복
              // console.log("option: ", option);
              OrderModel.createOrderOption({orderMenu_id, option})
                .then(createNewOrderOption => {
                  console.log("createNewOrderOption: ", createNewOrderOption.get({ plain: true }));
                })
            })
            // const createNewOrderOption = await OrderModel.createOrderOption({orderMenu_id, newOrder});
          }
        })
    });
    

		return createNewOrder
  }

  static async getOrderByUserId({id}){
    const orderData = await OrderModel.findOneOrderUserId2({id});
    // if (orderData.length === 0) {
    //   return [];
    // }
    return orderData;
  }

  static async findAllOrderDate({userId, dateType}){

    const date = new Date();
    //월별 조회
    if (dateType.month) {
      // console.log(typeof(parseInt(dateType.month)));
      date.setMonth(date.getMonth()-parseInt(dateType.month));
    }
    // 일별 조회
    else if (dateType.day) {
      date.setDate(date.getDate()-parseInt(dateType.day));
    }
    // 주별 조회
    else if (dateType.week) {
      date.setDate(date.getDate()-(parseInt(dateType.week)*7));
    }
    //연별 조회
    else if (dateType.year) {
      date.setFullYear(date.getFullYear()-parseInt(dateType.year));
    }
    // 적절한 쿼리가 제공되지 않은 경우
    else {
      // throw new Error("'Invalid request. Please provide month, day, or week.'");
      const errorMessage = "잘못 요청";
      return errorMessage;
    }
    const result = await OrderModel.findAllOrderDate({userId, date});
    return result;
  }

  static async deleteOrder({order_id}){
    const result = await OrderModel.deleteOrder({order_id});
    return result;
  }


}

module.exports = OrderService;