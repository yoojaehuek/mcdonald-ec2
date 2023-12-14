import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../config/contansts'
import axios from 'axios';
import PopupDom from './PopupDom';/** 우편번호 창   */
import PopupPostCode from './PopupPostCode';/** 우편번호 창  */
import './Join.scss'


function Join() {
	const [isLabelVisibleId, setIsLabelVisibleId] = useState(false);
	const [isLabelVisiblePwd, setIsLabelVisiblePwd] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState('');// 우편번호
	const [selectedYear, setSelectedYear] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');
	const [selectedDay, setSelectedDay] = useState('');  
	const inputRefId = useRef(null);
	const inputRefPwd = useRef(null);
	const navigate = useNavigate();


	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
	const months = Array.from({ length: 12 }, (_, index) => index + 1);
	const days = Array.from({ length: 31 }, (_, index) => index + 1);
  
	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);console.log("생년월일:",selectedYear,selectedMonth,selectedDay);
	};
	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);console.log("생년월일:",selectedYear,selectedMonth,selectedDay);
	};
	const handleDayChange = (e) => {
		setSelectedDay(e.target.value);console.log("생년월일:",selectedYear,selectedMonth,selectedDay);
	};

	/** 우편번호 창  */

	// 팝업창 상태 관리
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	// 팝업창 열기
	const openPostCode = () => {
		setIsPopupOpen(true)
	}
	// 팝업창 닫기
	const closePostCode = () => {
		setIsPopupOpen(false)
	}
	// 선택된 주소를 업데이트하는 콜백 함수
	const handleSelectedAddress = (address) => {
		setSelectedAddress(address);
	};
	/** 우편검색 결과가 인풋창에 업데이트 되지않아서 이함수로 업데이트 시켜줌 */
	const handleAddressChange = (e) => {
		setSelectedAddress(e.target.value);
	};
	/** 우편번호 창  */

	const onSubmitJoin = async (e) => {
		e.preventDefault();
		const email = e.target.email.value
		const pwd = e.target.pwd.value
		const confirmPwd = e.target.confirmPwd.value
		const user_name = e.target.name.value
		const phone = e.target.phone.value
		const address = e.target.address.value
		const detail_address = e.target.detail_address.value

		

		if(pwd === confirmPwd && email !== "" && pwd !== "" && confirmPwd !== "" && user_name !== "" && phone !== "" && address !== ""&& detail_address !== "")
		{
			console.log(email);
			axios.post(`${API_URL}/user/join`,{email, pwd, user_name, phone, address, detail_address})
			.then(() =>{
				alert("가입성공!");
				navigate('/');  
			})
			.catch(err =>{
				console.error(err);
			})
		}else{
			return alert("전부 입력해주세요");
		}
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			// 입력 필드 외부를 클릭하면 라벨을 숨깁니다.
			if (
				inputRefId.current &&
				!inputRefId.current.contains(event.target) &&
				inputRefPwd.current &&
				!inputRefPwd.current.contains(event.target)
			) {
				const inputValueId = inputRefId.current.value.trim();
				const inputValuePwd = inputRefPwd.current.value.trim();
		
				// 입력 필드에 값이 있는 경우 라벨을 보이게 합니다.
				setIsLabelVisibleId(!!inputValueId);
				setIsLabelVisiblePwd(!!inputValuePwd);
			}
		};
		// 이벤트 리스너 등록
		document.addEventListener('mousedown', handleClickOutside);
		// 컴포넌트가 언마운트될 때 이벤트 리스너 제거
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [inputRefId, inputRefPwd]);
		const handleInputFocus = (inputType) => {
			if (inputType === 'id') {
				setIsLabelVisibleId(true);
			} else if (inputType == 'pwd') {
				setIsLabelVisiblePwd(true);
			}
		};


		const handleInputBlur = (inputType) => {
			const inputValue = inputType === 'id' ? inputRefId.current.value : inputRefPwd.current.value;
		
			// 만약 입력 필드가 비어있다면, 다시 라벨을 숨길 수 있습니다.
			if (!inputValue.trim()) {
				if(inputType === 'id') {
					setIsLabelVisibleId(false);
				}else if(inputType === 'pwd') {
					setIsLabelVisiblePwd(false);
				}
			}
		};
	
	return (
	<div className="Join">
		<form id='Join-form' onSubmit={onSubmitJoin}>
			<h1>회원가입</h1>
			<ul id='join-input'>
				<li className="input-li">
					<label className={isLabelVisibleId ? '' : 'hidden'}>아이디(이메일주소)</label>
					<input
						ref={inputRefId}
						type="text"
						id="email"
						placeholder="아이디(이메일주소)"
						onFocus={() => handleInputFocus('id')}
						onBlur={() => handleInputBlur('id')}
					/>
				</li>
				<li className="input-li">
					<label className={isLabelVisiblePwd ? '' : 'hidden'}>비밀번호</label>
					<input
						ref={inputRefPwd}
						type="password"
						id="pwd"
						placeholder="비밀번호"
						onFocus={() => handleInputFocus('pwd')}
						onBlur={() => handleInputBlur('pwd')}
					/>
				</li>
				<li className="input-li">
					<label className={isLabelVisiblePwd ? '' : 'hidden'}>비밀번호</label>
					<input
						ref={inputRefPwd}
						type="password"
						id="confirmPwd"
						placeholder="비밀번호 확인"
						onFocus={() => handleInputFocus('pwd')}
						onBlur={() => handleInputBlur('pwd')}
					/>
				</li>
				<li className="input-li">
					<label className={isLabelVisiblePwd ? '' : 'hidden'}>이름</label>
					<input
						ref={inputRefPwd}
						type="text"
						id="name"
						placeholder="이름"
						onFocus={() => handleInputFocus('pwd')}
						onBlur={() => handleInputBlur('pwd')}
					/>
				</li>
				<li className="input-li">
					<label className={isLabelVisiblePwd ? '' : 'hidden'}>전화번호</label>
					<input
						ref={inputRefPwd}
						type="text"
						id="phone"
						placeholder="전화번호(010-1234-5678)"
						onFocus={() => handleInputFocus('pwd')}
						onBlur={() => handleInputBlur('pwd')}
					/>
				</li>

				<li className="input-li">
					<label id='birth-label'>생년월일</label>
					<div className='boxecal'>
						
						<select className='chyear' id='chyearjoin' value={selectedYear} onChange={handleYearChange}>
						<option value="">선택</option>
						{years.map((year) => (
							<option key={year} value={year}>
							{year}
							</option>
						))}
						</select>

						<select className='chmonth' id='chmonthjoin' value={selectedMonth} onChange={handleMonthChange}>
						<option value="">선택</option>
						{months.map((month) => (
							<option key={month} value={month}>
							{month}
							</option>
						))}
						</select>

						<select className='chday' id='chdayjoin' value={selectedDay} onChange={handleDayChange}>
						<option value="">선택</option>
							{days.map((day) => (
								<option key={day} value={day}>
								{day}
								</option>
							))}
						</select>

					</div>
				</li>

				
				<li className="input-li">
					<label className={isLabelVisiblePwd ? '' : 'hidden'}>주소</label>
					<div id='input-li-addr'>
						<input
							ref={inputRefPwd}
							type="text"
							id="address"
							placeholder="주소"
							value={selectedAddress} // 주소 입력 필드의 값을 선택된 주소로 설정
							onChange={handleAddressChange} // 주소 변경을 처리하기 위한 이벤트 핸들러 추가
						/>
						{/* 버튼 클릭 시 팝업 생성 */}
						<button type='button' onClick={openPostCode}>우편번호 검색</button>
					</div>
					<label className={isLabelVisiblePwd ? '' : 'hidden'}>상세주소</label>
					<input
						ref={inputRefPwd}
						type="text"
						id="detail_address"
						placeholder="상세주소"
						onFocus={() => handleInputFocus('pwd')}
						onBlur={() => handleInputBlur('pwd')}
					/>
					<div>
						{/* 우편번호 창 팝업 생성 기준 div */}
						<div id='popupDom'>
							{isPopupOpen && (
								<PopupDom>
									{/* onSelectAddress prop을 전달 */}
									<PopupPostCode onSelectAddress={handleSelectedAddress} onClose={closePostCode} />
								</PopupDom>
							)}
						</div>
					</div>
				</li>
			</ul>
			<li><button type='submit' id='join-btn'>회원가입</button></li>
		</form>
	</div>
	);
}

export default Join;
