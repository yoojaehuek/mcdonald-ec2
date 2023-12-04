const Reservation = require('../schemas/reservation'); 
const Planner = require('../schemas/planner'); 

class ReservationModel {

  static async createReservation({newReservation}){
    console.log("newReservation",newReservation);
    const createNewReservation = await Reservation.create(newReservation);
    return createNewReservation;
  }

  static async findOneReservationUserId({id}){
    console.log("reservationId: ",id);
    const reservation = await Reservation.findOne({
      where: {
        userId: id
      }
    }); //where: {id: asdf} 형태가 들어와야함
    // console.log(reservation);
    return reservation;
  }

  static async findOneReservationUserId2({id}){
    // console.log("reservationId",id);
    const reservation = await Reservation.findOne({
      where: {
        userId: id,
      },
      include: [{
        model: Planner,
        attributes: ['name', 'phone'],
      }],
    }); //where: {id: asdf} 형태가 들어와야함
    return reservation;
  }

  static async destroyReservation({id}){
    // console.log("reservationId",reservationId);
    const reservation = await Reservation.destroy({
      where: {
        userId: id
      }
    });//where: {id: asdf} 형태가 들어와야함
    return reservation;
  }
}

module.exports = ReservationModel;