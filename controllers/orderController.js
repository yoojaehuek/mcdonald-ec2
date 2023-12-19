//커트롤러 역할
//req수신
//req 데이터 및 내용 검증
//서버에서 수행된 결과 클라이언트에게 반환(res)

const OrderService = require("../services/orderService");

class OrderController {
  static async addOrder(req,res,next){
    try {
<<<<<<< HEAD
        const tmp = req.body;
        // tmp.userId = req.userId;
        tmp.userId = 1;
=======
        // const tmp = req.body;
        tmp.userId = req.userId;
        // tmp.userId = 1;
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
        // console.log("tmp: ",tmp);
        const newOrder = await OrderService.addOrder(tmp);
        
        if(newOrder.errorMessage){
            throw new Error(newOrder.errorMessage)
        }
<<<<<<< HEAD
        res.status(200).json(newOrder);
=======
        res.status(201).json(newOrder);
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e

    } catch (error) {
        next(error)
    }
  }
  static async getOrderByUserId(req, res, next){
    try {
      console.log("req.userId: ", req.userId);
<<<<<<< HEAD
      // const userId = req.userId;
      const userId = 1;
=======
      const userId = req.userId;
      // const userId = 1;
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
      const result = await OrderService.getOrderByUserId({id: userId});
      console.log("orderController.js/getOrderByUserId()/result: ", result);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async findAllOrderDate(req, res, next){
    try {
<<<<<<< HEAD
      // const userId = req.userId;
      const userId = 1;
=======
      const userId = req.userId;
      // const userId = 1;
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
      const dateType = req.query;
      const result = await OrderService.findAllOrderDate({userId, dateType});
      // console.log("orderController.js/getOrderByUserId()/result: ", result);
      if (result.errorMessage) {
        throw new Error(result.errorMessage);
      }
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteOrder(req, res, next){
    try {
<<<<<<< HEAD
      // const userId = req.body;
      const orderId = 8;
      const result = await OrderService.deleteOrder({orderId});
=======
      const order_id = req.params.order_id;
      // const orderId = 8;
      const result = await OrderService.deleteOrder({order_id});
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e
      res.status(200).json(result);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = OrderController;