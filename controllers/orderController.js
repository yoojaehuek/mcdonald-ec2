//커트롤러 역할
//req수신
//req 데이터 및 내용 검증
//서버에서 수행된 결과 클라이언트에게 반환(res)

const OrderService = require("../services/orderService");

class OrderController {
  static async addOrder(req,res,next){
    try {
        const tmp = req.body;
        tmp.userId = req.userId;
        // tmp.userId = 1;
        // console.log("tmp: ",tmp);
        const newOrder = await OrderService.addOrder(tmp);
        
        if(newOrder.errorMessage){
            throw new Error(newOrder.errorMessage)
        }
        res.status(200).json(newOrder);

    } catch (error) {
        next(error)
    }
  }
  static async getOrderByUserId(req, res, next){
    try {
      console.log("req.userId: ", req.userId);
      // const userId = req.userId;
      const userId = 1;
      const result = await OrderService.getOrderByUserId({id: userId});
      console.log("orderController.js/getOrderByUserId()/result: ", result);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;