const ReservationModel = require('../database/models/reservationModel');
const PlannerModel = require('../database/models/plannerModel');

class ReservationService{

  static async addReservation({plannerId, point, date, time, contactChoice, theme,  userId}){
    
    //이미 예약한 유저면 막기
    const reservation = await ReservationModel.findOneReservationUserId({ id: userId });
    // console.log(reservation);
    if (reservation != null) {
      const errorMessage = "이미 예약하신 내역이 있습니다.";
      return { errorMessage };      
    }

    const newReservation = {plannerId, point, date, time, contactChoice, theme,  userId};
		
    //예약테이블에 INSERT INTO
		const createNewReservation = await ReservationModel.createReservation({newReservation});
		return createNewReservation
  }

  static async getReservationByUserId({id}){
    const reservationData = await ReservationModel.findOneReservationUserId2({id});
    // if (reservationData.length === 0) {
    //   return [];
    // }
    return reservationData;
  }

}

module.exports = ReservationService;