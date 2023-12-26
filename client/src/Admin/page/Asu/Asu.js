import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';
import './Asu.scss';


const Asu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/su`)
    .then(res => {
      console.log(res.data);
      setItems(res.data)
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  function loadFile(input) {
    var file = input.files[0]; //선택된 파일 가져오기

    //미리 만들어 놓은 div에 text(파일 이름) 추가
    var name = document.getElementById('fileName');
    name.textContent = file.name;

    //새로운 이미지 div 추가
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden"; //버튼을 누르기 전까지는 이미지를 숨긴다
    newImage.style.objectFit = "contain";

    //이미지를 image-show div에 추가
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
  };
  return (
    <>
      <div class="asu-main">
        <div className='asu-main1'>
        <h2>상품 정보 수정</h2>
        <table className="asu-table">
        <colgroup>
                <col span="1" class="col11" />
                <col span="1" class="col22" />
                <col span="1" class="col33" />
                <col span="1" class="col44" />
          </colgroup>
        <tr class="asu-tr1">
            <th scope="col" >상품명(한국어)</th>
            <th>
              <input type='text'></input>
            </th>
            <th scope="col">상품명(영어)</th>
            <th>
              <input type='text'></input>

            </th>
            
        </tr>

        <tr className='asu-tr2'>
          <td>종류</td>
            <td>
              <select>
                <option value='' selected>-- 선택 --</option>
                <option value='apple'>사과</option>
                <option value='banana'>바나나</option>
                <option value='lemon'>레몬</option>
              </select>
            </td>
            <td>태그</td>
            <td>
              <select>
                <option value='' selected>-- 선택 --</option>
                <option value='apple'>사과</option>
                <option value='banana'>바나나</option>
                <option value='lemon'>레몬</option>
              </select>
            </td>
          </tr>
          
        <tr className='asu-tr3'>
          <td>가격</td>
            <td>
              <input type='text'></input>
            </td>
            <td>판매여부</td>
            <td>
              <select>
                <option value='' selected>-- 선택 --</option>
                <option value='chul'>출시</option>
                <option value='pum'>품절</option>
                <option value='pan'>판매종료</option>
              </select>
            </td>
          </tr>
          
        <tr className='asu-tr4'>
          <td>상품설명</td>
            <td colSpan="3">
              <input type='text'></input>
            </td>
          </tr>
           <tr>
          <td>칼로리</td>
            <td colSpan="3" class="asu-cal">
              <input type='text'></input>
              <th>무게(g)</th>
              <input type='text'></input>
              <th>단백질</th>
              <input type='text'></input>
              <th>포화지방</th>
              <input type='text'></input>
              <th>당류</th>
              <input type='text'></input>
              <th>나트륨</th>
            </td>
          </tr>

           <tr>
          <td>이미지</td>
              <td colSpan="3">
                <form method="post" enctype="multipart/form-data">
    <div class="asu-imgfile">
        <label for="chooseFile">
             👉 CLICK HERE! 👈
        </label>
    </div>
    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)"></input>
</form>
            </td>
        </tr>
        </table>
        <div class="asu-bottom">
        <button>상품수정</button>
        <button>취소</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Asu;
