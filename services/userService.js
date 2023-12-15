const UserModel = require('../database/models/userModel')
const crypto = require('crypto');
const redisClient = require("../utils/redis.utils");
require('dotenv').config();
const { makeRefreshToken, makeAccessToken } = require('../utils/token');


class UserService{
	//유효성 검사 이메일 겹치는지 등등
	static async addUser({email, pwd, user_name, phone, address, detail_address, selectedYear, selectedMonth, selectedDay}){
		const birth = selectedYear+'-'+selectedMonth+'-'+selectedDay;
		console.log("birth: ", birth);
		//crypto.randomBytes(128): 길이가 128인 임의의 바이트 시퀀스를 생성
		//.toString('base64'): 임의의 바이트를 base64로 인코딩된 문자열로 변환
		const salt = crypto.randomBytes(128).toString('base64'); 

		// crypto.createHash('sha512'): SHA-512 해시 개체를 생성
		//.update(pwd + salt): 비밀번호( pwd)와 솔트를 연결하여 해시를 업데이트
		//.digest('hex'): 16진수 형식으로 최종 해시를 생성
		const hashPassword = crypto
			.createHash('sha512')
			.update(pwd + salt)
			.digest('hex'); 

		const newUser = { email, pwd: hashPassword, salt, user_name, phone, address, detail_address, birth }

		const createNewUser = await UserModel.createUser({newUser});
		return createNewUser
	}

	static async loginUser({email, pwd}){
		console.log("서비스에서: ",email);
		// console.log("id: ",id);
		// console.log("pwd: ",pwd);

		const user = await UserModel.findOneUserEmail({ email });
		if (!user) {
			const errorMessage = "해당 id는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
			return errorMessage;
		}

		// 입력한 비밀번호와 조회해온 암호화 난수 함침
		const combinedPassword = pwd + user.salt;

		// 함친 combinedPassword 암호화
		const hashedPassword = crypto
			.createHash('sha512')
			.update(combinedPassword)
			.digest('hex');

		// hashedPassword와 DB의 비밀번호 비교
		if (hashedPassword === user.pwd) {
			console.log('Login successful!');
			// console.log("userService.js/loginUser()/user: ", user);
			const accessToken = makeAccessToken({id: user.id});
			const refreshToken = makeRefreshToken();

			// userId를 키값으로 refresh token을 redis server에 저장
			await redisClient.set(user.id, refreshToken);
			// await redisClient.get(user.id, (err, value) => {
			// 	console.log("redis.value: ", value); 
			// });
			
			const name = user.user_name; 
			const email = user.email;			
			const newUser = {name, email, accessToken, refreshToken};

			return newUser
		}else {
			console.log('Invalid login credentials.');
		}
	}

	static async detailUser({id}){
		const user = await UserModel.findOneUserId({id});
		// console.log({myId});
		const name = user.user_name;
		const user_email = user.email;
		const address = user.address;
		const detail_address = user.detail_address;
		const phone = user.phone;
		// const birth = user.birth;
		const birth = "test";

		const userInfo = {
			name,
			user_email,
			address,
			detail_address,
			phone,
			birth
		};

		return userInfo;
	}

	static async putUser({updateValue}, {userId}){
		console.log("서비스에서: ",updateValue, userId);
		// const email = updateValue.user_name;
		// const phone = updateValue.phoneNumberPrefix + updateValue.phoneNumberSuffix;
		// const address = updateValue.address;
		// const detail_address = updateValue.detail_address;
		// const birth = updateValue.selectedYear+'-'+updateValue.selectedMonth+'-'+updateValue.selectedDay;
		const update = {
			user_name: updateValue.user_name,
			phone: updateValue.phone_number_prefix + updateValue.phone_number_suffix,
			address: updateValue.address,
			detail_address: updateValue.detail_address,
			birth: updateValue.selected_year+'-'+updateValue.selected_month+'-'+updateValue.selected_day,
		};
		// update.user_name = updateValue.user_name;
		// update.phone = updateValue.phone_number_prefix + updateValue.phone_number_suffix;
		// update.address = updateValue.address;
		// update.detail_address = updateValue.detail_address;
		// update.birth = updateValue.selectedYear+'-'+updateValue.selectedMonth+'-'+updateValue.selectedDay;
		console.log(update);

		const user = await UserModel.putUser({update}, {userId});
		return user;
	}

	static async deleteUser({userId}){
		console.log("서비스에서: ", userId);
		const user = await UserModel.destroyUser({userId});
		return user;
	}
}
module.exports = UserService;