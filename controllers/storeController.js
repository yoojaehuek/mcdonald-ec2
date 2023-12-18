const StoreService = require("../services/storeService");

class StoreController {

	static async getAllStore(req, res, next){
		try {
			// const storeId = req.body;
			const result = await StoreService.getAllStore();
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

	static async getMcdelivery(req, res, next){
		try {
			const address = req.query.address;
			console.log("dong: ", address);
			// const storeId = req.body;
			const result = await StoreService.getMcdelivery({address});
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

	static async createStore(req, res, next){
		try {
			// const address = req.query.address;
			// console.log("dong: ", address);
			// // const storeId = req.body;
			// const result = await StoreService.getMcdelivery({address});
			res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}

}

module.exports = StoreController;