//커트롤러 역할
//req수신
//req 데이터 및 내용 검증
//서버에서 수행된 결과 클라이언트에게 반환(res)

const ReservationService = require("../services/reservationService");

class ReservationController {
  static async addReservation(req,res,next){
    try {
        const tmp = req.body;
        tmp.userId = req.userId;
        console.log("tmp: ",tmp);
        const newReservation = await ReservationService.addReservation(tmp);
        
        if(newReservation.errorMessage){
            throw new Error(newReservation.errorMessage)
        }
        res.status(200).json(newReservation);

    } catch (error) {
        next(error)
    }
  }
  static async getReservationByUserId(req, res, next){
    try {
      console.log("req.userId: ", req.userId);
      const userId = req.userId;
      const result = await ReservationService.getReservationByUserId({id: userId});
      console.log("reservationController.js/getReservationByUserId()/result: ", result);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReservationController;