import React, { useState } from "react";
import "./Find.scss";
import MapBotton from "../MapBottom";
import Maps from "./map";

// import { NavLink } from 'react-router-dom';

const stores = [
  {
    id: 1,
    store_name: "평택GS DT",
    phone: "010-0000-0001",
    address: "경기 평택시 용이동 470-5",
    start_time: "00:00",
    end_time: "24:00",
    yn_24h: true,
    yn_mcmorning: true,
    yn_mcdrive: true,
    yn_mcdelivery: true,
    yn_parking: true,
  },
  {
    id: 2,
    store_name: "평택서정 DT점",
    phone: "010-0000-0002",
    address: "경기 평택시 서정동 779-5",
    start_time: "07:00",
    end_time: "23:00",
    yn_24h: false,
    yn_mcmorning: true,
    yn_mcdrive: true,
    yn_mcdelivery: true,
    yn_parking: false,
  },
  {
    id: 3,
    store_name: "평택 세교DT점",
    phone: "010-0000-0003",
    address: "경기 평택시 세교동 277-10",
    start_time: "00:00",
    end_time: "24:00",
    yn_24h: true,
    yn_mcmorning: false,
    yn_mcdrive: true,
    yn_mcdelivery: false,
    yn_parking: true,
  },
  {
    id: 4,
    store_name: "송탄",
    phone: "010-0000-0004",
    address: "경기 평택시 신장동 302-1",
    start_time: "08:00",
    end_time: "24:00",
    yn_24h: false,
    yn_mcmorning: false,
    yn_mcdrive: false,
    yn_mcdelivery: true,
    yn_parking: true,
  },
];

const Find = () => {
  const [yn_24h, setYn24] = useState(false);
  const [yn_mcmorning, setYnmcmorning] = useState(false);
  const [yn_mcdrive, setYnmcdrive] = useState(false);
  const [yn_mcdelivery, setYnmcdelivery] = useState(false);
  const [yn_parking, setYnparking] = useState(false);
  const [searchText, setSearchText] = useState(""); // 입력값을 저장할 상태 추가
  const [result, setResult] = useState([]);
  // console.log(yn_24h);
  const search = (e) => {
    e.preventDefault();

    // stores 배열을 필터링하는 로직
    const filteredStores = stores.filter((store) => {
      return (
        store.yn_24h == yn_24h &&
        store.yn_mcmorning == yn_mcmorning &&
        store.yn_mcdrive == yn_mcdrive &&
        store.yn_mcdelivery == yn_mcdelivery &&
        store.yn_parking == yn_parking
        // (store.store_name.includes(searchText) || store.address.includes(searchText))
      );
    });
    setResult(filteredStores);
  };
  console.log(result);

  return (
    <>
      <MapBotton />
      <div className="FindStore">
        <div className="contents">
          <div className="contArea1">
            <div className="inner">
              <div className="search">
                <button
                  style={
                    yn_24h ? { backgroundColor: "#000", color: "white" } : {}
                  }
                  onClick={() => setYn24(!yn_24h)}
                >
                  <img src="./images/Store/btn1.png"></img>
                  24시간
                </button>
                <button
                  style={
                    yn_mcmorning
                      ? { backgroundColor: "#000", color: "white" }
                      : {}
                  }
                  onClick={() => setYnmcmorning(!yn_mcmorning)}
                >
                  <img src="./images/Store/btn2.png"></img>
                  맥모닝
                </button>
                <button
                  style={
                    yn_mcdrive
                      ? { backgroundColor: "#000", color: "white" }
                      : {}
                  }
                  onClick={() => setYnmcdrive(!yn_mcdrive)}
                >
                  <img src="./images/Store/btn3.png"></img>
                  맥드라이브
                </button>
                <button
                  style={
                    yn_mcdelivery
                      ? { backgroundColor: "#000", color: "white" }
                      : {}
                  }
                  onClick={() => setYnmcdelivery(!yn_mcdelivery)}
                >
                  <img src="./images/Store/btn4.png"></img>
                  맥딜리버리
                </button>
                <button
                  style={
                    yn_parking
                      ? { backgroundColor: "#000", color: "white" }
                      : {}
                  }
                  onClick={() => setYnparking(!yn_parking)}
                >
                  <img src="./images/Store/btn5.png"></img>
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
              <div className="storeResult">
                <div className="map_btn"></div>
                <div className="mcStore"></div>
              </div>
            </div>
          </div>
        </div>
        <Maps />
      </div>
    </>
  );
};

export default Find;
