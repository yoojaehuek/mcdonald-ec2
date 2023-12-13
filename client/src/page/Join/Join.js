import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Join.scss'
import { API_URL } from '../../config/contansts'

/** 우편번호 창   */
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
/** 우편번호 창  */

function Join() {
    const [isLabelVisibleId, setIsLabelVisibleId] = useState(false);
    const [isLabelVisiblePwd, setIsLabelVisiblePwd] = useState(false);
    const inputRefId = useRef(null);
    const inputRefPwd = useRef(null);
    const navigate = useNavigate();

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
    
    const [selectedAddress, setSelectedAddress] = useState('');

    // 선택된 주소를 업데이트하는 콜백 함수
    const handleSelectedAddress = (address) => {
        setSelectedAddress(address);
    };

    /** 우편번호 창  */

    const onSubmitJoin = async (e) => {
        e.preventDefault();
        const id = e.target.id.value
        const pwd = e.target.pwd.value
        const confirmPwd = e.target.confirmPwd.value
        const addr = e.target.addr.value
        const phone = e.target.phone.value

        if(pwd === confirmPwd && id !== "" && pwd !== "" && confirmPwd !== "" && phone !== "" && addr !== "")
        {
            await axios.post(`${API_URL}/user/join`,{id, pwd, addr, phone})
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
            } else if (inputType === 'pwd') {
                setIsLabelVisiblePwd(true);
            }
        };
        const handleInputBlur = (inputType) => {
        const inputValue =
            inputType === 'id' ? inputRefId.current.value : inputRefPwd.current.value;
    
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
                        id="id"
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
                    <div id='input-li-addr'>
                        <div><label className={isLabelVisiblePwd ? '' : 'hidden'}>주소</label></div>
                        {/* // 버튼 클릭 시 팝업 생성 */}
                        <button type='button' onClick={openPostCode}>우편번호 검색</button>
                    </div>
                    <input
                        ref={inputRefPwd}
                        type="text"
                        id="addr"
                        placeholder="주소"
                        onFocus={() => handleInputFocus('pwd')}
                        onBlur={() => handleInputBlur('pwd')}
                        value={selectedAddress} // 주소 입력 필드의 값을 선택된 주소로 설정
                    />
                </li>
            </ul>

            {/** 우편번호 창 */}

            <div>
                {/* // 팝업 생성 기준 div */}
                <div id='popupDom'>
                    {isPopupOpen && (
                        <PopupDom>
                            {/* onSelectAddress prop을 전달 */}
                            <PopupPostCode onSelectAddress={handleSelectedAddress} onClose={closePostCode} />
                        </PopupDom>
                    )}
                </div>
            </div>

            {/** 우편번호 창 */}


            <li><button type='submit' id='join-btn'>회원가입</button></li>
        </form>
    </div>
    );
}

export default Join;
