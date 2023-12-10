import React from "react";
import './Rental.scss';
// import { NavLink } from "react-router-dom";


const temp = [
  {mcdh2:"토지 임대 및 매매", mcdth1:"임차조건",mcdth2:"면적", mcda:"제안서 양식 다운로드"},
  { mcdli1: "안정적이고 지속적인 주거 인구 증가 지역", mcdli2: "차량의 진 출입 및 접근성이 좋은 위치", mcdli3: "도로변에 위치하여 가시성이 좋은 입지", mcdli4: "교통 통행량이 많은 지역", mcdli5: "서울 - 최소 200평 이상 대지 면적", mcdli6: "경기도 및 광역시 - 최소 300평 이상 대지 면적", mcdli7: "그 외의 지역 - 최소 400평 이상 대지 면적" },
  { mcdp: "위의 입지 제안서 양식을 다운로드하여 작성하신 후 담당자에게 보내 주세요.", mcdb: "담당자 이메일 : ", mcda1: "realestate@kr.mcd.com" },
  {t1:"건물임대",t2:"유동인구가 풍부한 지역 (역세권, 사무실 및 아파트 밀집 지역 등)",t3:"서울/경기도 지역",t4:"6대 광역시",t5:"전용으로 1층이 80평 이상의 면적 (20평은 창고, 휴게실 공간으로 지하/윗층으로 이동 될 수 있음)",t6:"1,2층일 경우, 각 층이 40평 이상의 면적", t7:"중심 상업지구라면 1층 40평 이하일 때, 2층은 60평 이상의 면적"}
]


const Rental = () => {

  return (<div class="mcdrive-main">
    <div class="mcdrive-mcd1" >
      {
        temp.map(tmp =>
          <div id="rental-h2">
            <h2>{tmp.mcdh2}</h2>
          </div>
        )
      }
       
      <table class="rental-table" >
     <colgroup>
         <col width="15%">
         </col>
     </colgroup>
     <tbody>
         <tr>
             {
             temp.map(tmp =>
             <th id="rental-th1">{tmp.mcdth1}</th>
             )
             }
             <td>
                 {
                 temp.map(tmp =>
                 <ul id="rental-ul">
                     <li>{tmp.mcdli1}</li>
                     <li>{tmp.mcdli2}</li>
                     <li >{tmp.mcdli3}</li>
                     <li >{tmp.mcdli4}</li>
                 </ul>
                 )
                 }
             </td>
         </tr>
         <tr>
             {
             temp.map(tmp =>
             <th id="rental-th2">{tmp.mcdth2}</th>
             )
             }
             <td>
                 {
                 temp.map(tmp =>
                 <ul id="rental-ul">
                     <li >{tmp.mcdli5}</li>
                     <li>{tmp.mcdli6}</li>
                     <li >{tmp.mcdli7}</li>
                 </ul>
                 )
                 }
             </td>
         </tr>
     </tbody>
      </table>
          <a href="#" class="rental-a">
        {
          temp.map(tmp => 
                tmp.mcda 
          )
        }
      </a>
     {
        temp.map(tmp =>
          <div id="rental-email">
            <p>{tmp.mcdp}</p>
            <b>{tmp.mcdb}</b>
            <a href="#">{tmp.mcda1}</a>
            </div>
        )
      }
      {
        temp.map(tmp =>
          <div id="rental-h2">
            <h2>{tmp.t1}</h2>
          </div>
        )
      }
       
      <table class="rental-table" >
     <colgroup>
         <col width="15%">
         </col>
     </colgroup>
     <tbody>
         <tr>
             {
             temp.map(tmp =>
             <th id="rental-th1">{tmp.mcdth1}</th>
             )
             }
             <td>
                 {
                 temp.map(tmp =>
                 <ul id="rental-ul">
                     <li>{tmp.t2}</li>
                     <li>{tmp.t3}</li>
                     <li>{tmp.t4}</li>
                 </ul>
                 )
                 }
             </td>
         </tr>
         <tr>
             {
             temp.map(tmp =>
             <th id="rental-th2">{tmp.mcdth2}</th>
             )
             }
             <td>
                 {
                 temp.map(tmp =>
                 <ul id="rental-ul">
                     <li>{tmp.t5}</li>
                     <li>{tmp.t6}</li>
                     <li>{tmp.t7}</li>
                 </ul>
                 )
                 }
             </td>
         </tr>
     </tbody>
 </table>
    </div>
    </div>
  );
};

export default Rental;