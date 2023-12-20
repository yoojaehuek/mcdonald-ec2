import React, { useState, useEffect } from "react";
import "./Find.scss";
import MapBotton from "../MapBottom";
import Maps from "./map";
import { IconButton } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import axios from "axios";
import { API_URL } from "../../../../config/contansts";

// import { NavLink } from 'react-router-dom';

// const stores = [
//   {
//     id: 1,
//     store_name: "평택GS DT",
//     phone: "010-0000-0001",
//     address: "경기 평택시 용이동 470-5",
//     start_time: "00:00",
//     end_time: "24:00",
//     yn_24h: true,
//     yn_mcmorning: true,
//     yn_mcdrive: true,
//     yn_mcdelivery: true,
//     yn_parking: true,
//   },
//   {
//     id: 2,
//     store_name: "평택서정 DT점",
//     phone: "010-0000-0002",
//     address: "경기 평택시 서정동 779-5",
//     start_time: "07:00",
//     end_time: "23:00",
//     yn_24h: false,
//     yn_mcmorning: true,
//     yn_mcdrive: true,
//     yn_mcdelivery: true,
//     yn_parking: false,
//   },
//   {
//     id: 3,
//     store_name: "평택 세교DT점",
//     phone: "010-0000-0003",
//     address: "경기 평택시 세교동 277-10",
//     start_time: "00:00",
//     end_time: "24:00",
//     yn_24h: true,
//     yn_mcmorning: false,
//     yn_mcdrive: true,
//     yn_mcdelivery: false,
//     yn_parking: true,
//   },
//   {
//     id: 4,
//     store_name: "송탄",
//     phone: "010-0000-0004",
//     address: "경기 평택시 신장동 302-1",
//     start_time: "08:00",
//     end_time: "24:00",
//     yn_24h: false,
//     yn_mcmorning: false,
//     yn_mcdrive: false,
//     yn_mcdelivery: true,
//     yn_parking: true,
//   },
//   {
//     id: 5,
//     store_name: "송탄",
//     phone: "010-0000-0004",
//     address: "경기 평택시 신장동 302-1",
//     start_time: "08:00",
//     end_time: "24:00",
//     yn_24h: false,
//     yn_mcmorning: false,
//     yn_mcdrive: false,
//     yn_mcdelivery: true,
//     yn_parking: true,
//   },
// ];

const Find = () => {
  const [yn_24h, setYn24] = useState(false);
  const [yn_mcmorning, setYnmcmorning] = useState(false);
  const [yn_mcdrive, setYnmcdrive] = useState(false);
  const [yn_mcdelivery, setYnmcdelivery] = useState(false);
  const [yn_parking, setYnparking] = useState(false);
  const [searchText, setSearchText] = useState(""); // 입력값을 저장할 상태 추가
  const [stores, setStores] = useState([]);
  const [result, setResult] = useState(stores);
  const [currentpage, setcurrentpage] = useState(1);
  const [storepage] = useState(4);

  useEffect(() => {
    axios.get(`${API_URL}/store`)
      .then(res => {
        setStores(res.data);
        const filteredStores = res.data.filter((store) => store.id === 1).slice(0, storepage);
        setResult(filteredStores);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  

  const toggleButton = (setter) => {
    setter((prev) => !prev);
  };
  // console.log(yn_24h);
  const search = (e) => {
    e.preventDefault();

    // 필터가 모두 비활성화면 원래 모든 데이터 다 가져옴
    if (!yn_24h && !yn_mcmorning && !yn_mcdrive && !yn_mcdelivery && !yn_parking) {
      setResult(stores);
      //console.log(stores);
      return;
    }

    // stores 배열을 필터링하는 로직
    const filteredStores = stores.filter((store) => {
      // const services = [];
      // if (store.yn_24h) services.push('24시간');
      // if (store.yn_mcmorning) services.push('맥모닝');
      // if (store.yn_mcdrive) services.push('맥드라이브');
      // if (store.yn_mcdelivery) services.push('맥딜리버리');
      // if (store.yn_parking) services.push('주차');

      // const addressIncludesSearchText = store.address.toLowerCase().includes(searchText.toLowerCase());
      // const servicesIncludeSearchText = services.some(service => service.toLowerCase().includes(searchText.toLowerCase()));

      return (
        (yn_24h ? store.yn_24h : false) ||
        (yn_mcmorning ? store.yn_mcmorning : false) ||
        (yn_mcdrive ? store.yn_mcdrive : false) ||
        (yn_mcdelivery ? store.yn_mcdelivery : false) ||
        (yn_parking ? store.yn_parking : false)
        // (store.store_name.includes(searchText) || store.address.includes(searchText))
        // addressIncludesSearchText || servicesIncludeSearchText
      );
    });
    setResult(filteredStores);
    // console.log(filteredStores);
    setcurrentpage(1);
  };
  console.log(result);
  // 현재페이지 첫 번째랑 마지막 인덱스 계산
  const laststore = currentpage * storepage;
  const firststore = laststore - storepage;
  const currentStores = result.slice(firststore, laststore); // 현재 페이지에 보여줄 친구들 result 배열에서 가져옴

  const paginate = (pageNumber) => setcurrentpage(pageNumber); // 페이지 변경 함수. 클릭한 페이지로 이동

  return (
    <>
      <MapBotton />
      <div className="FindStore">
        <div className="contents">
          <div className="contArea1">
            <div className="inner">
              <div className="search">
                <button
                  style={{
                    backgroundColor: yn_24h ? "#000" : "",
                    color: yn_24h ? "white" : "",
                  }}
                  onClick={() => toggleButton(setYn24)}
                >
                  <img src={yn_24h ? "../images/Store/btn1-1.png" : "../images/Store/btn1.png"} alt="btn1" />
                  24시간
                </button>
                <button
                  style={{
                    backgroundColor: yn_mcmorning ? "#000" : "",
                    color: yn_mcmorning ? "white" : "",
                  }}
                  onClick={() => toggleButton(setYnmcmorning)}
                >
                  <img src={yn_mcmorning ? "../images/Store/btn2-1.png" : "../images/Store/btn2.png"} alt="btn2" />
                  맥모닝
                </button>
                <button
                  style={{
                    backgroundColor: yn_mcdrive ? "#000" : "",
                    color: yn_mcdrive ? "white" : "",
                  }}
                  onClick={() => toggleButton(setYnmcdrive)}
                >
                  <img src={yn_mcdrive ? "../images/Store/btn3-1.png" : "../images/Store/btn3.png"} alt="btn3" />
                  맥드라이드
                </button>
                <button
                  style={{
                    backgroundColor: yn_mcdelivery ? "#000" : "",
                    color: yn_mcdelivery ? "white" : "",
                  }}
                  onClick={() => toggleButton(setYnmcdelivery)}
                >
                  <img src={yn_mcdelivery ? "../images/Store/btn4-1.png" : "../images/Store/btn4.png"} alt="btn4" />
                  맥딜리버리
                </button>
                <button
                  style={{
                    backgroundColor: yn_parking ? "#000" : "",
                    color: yn_parking ? "white" : "",
                  }}
                  onClick={() => toggleButton(setYnparking)}
                >
                  <img src={yn_parking ? "../images/Store/btn5-1.png" : "../images/Store/btn5.png"} alt="btn5" />
                  주차
                </button>
              </div>
              <form className="search1" onSubmit={search}>
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit">검색하기</button>
              </form>
            </div>
          </div>
        </div>
        <Maps />
        <div className="myLocationButton">
          <IconButton>
            <MyLocationIcon />
          </IconButton>
          <p>내 위치 중심으로 보기</p>
        </div>
        <div className="storeResult">
          <div className="mcStore">
            <table>
              <thead>
                <tr>
                  <th>매장명/주소</th>
                  <th>전화번호</th>
                  <th>영업시간</th>
                  <th>이용가능 서비스</th>
                </tr>
              </thead>
              <tbody>
                {currentStores.map((store) => (
                  <tr key={store.id}>
                    <td>{`${store.store_name}/${store.address}`}</td>
                    <td>{store.phone}</td>
                    <td>{`${store.start_time} - ${store.end_time}`}</td>
                    <td>
                      {store.yn_24h && <span>24시간 </span>}
                      {store.yn_mcmorning && <span>맥모닝 </span>}
                      {store.yn_mcdrive && <span>맥드라이브 </span>}
                      {store.yn_mcdelivery && <span>맥딜리버리 </span>}
                      {store.yn_parking && <span>주차 가능</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(result.length / storepage) }, (_, index) => index + 1).map((pageNumber) => ( // 페이지 번호 생성
            <button key={pageNumber} onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};


export default Find;
