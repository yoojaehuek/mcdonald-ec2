const StoreModel = require('../database/models/storeModel')


class StoreService{
	
	static async getAllStore(){
		const result = await StoreModel.getAllStore();
		return result;
	}

	static async getMcdelivery({address}){
		const elements = address.split(' '); //주소 띄어쓰기 기준으로 나누기
		const dong = elements[elements.length - 2]; //나눈주소[길이-2]번째 글자
		const dongWithoutLastCharacter = dong.slice(0, -1); // 마지막 글자 제거
		let result = await StoreModel.getMcdelivery({dongWithoutLastCharacter});
		// console.log(result);
    if (result.length === 0) {
      result = false;
    }
		return result;
	}

}
module.exports = StoreService;