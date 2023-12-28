import React, { useState, useEffect } from "react";
import "./Find.scss";
import MapBotton from "../MapBottom";
import Maps from "./map";
import { IconButton } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import axios from "axios";
import { API_URL } from "../../../../config/contansts";

const Find = () => {
  const [yn_24h, setYn24] = useState(false);
  const [yn_mcmorning, setYnmcmorning] = useState(false);
  const [yn_mcdrive, setYnmcdrive] = useState(false);
  const [yn_mcdelivery, setYnmcdelivery] = useState(false);
  const [yn_parking, setYnparking] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [stores, setStores] = useState([]);
  const [result, setResult] = useState(stores);
  const [currentpage, setcurrentpage] = useState(1);
  const [storepage] = useState(4);
  const [clickedStore, setClickedStore] = useState(null);
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/api/store`)
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

  const handleStoreClick = (store) => {
    console.log("매장 클릭됨:", store);
    setClickedStore({ latitude: store.latitude, longitude: store.longitude });
  };

  const search = async (e) => {
    e.preventDefault();
    
    const qs = {};
    if (yn_24h) {
      qs.yn_24h = yn_24h;
    }
    if (yn_mcmorning) {
      qs.yn_mcmorning = yn_mcmorning;
    }
    if (yn_mcdrive) {
      qs.yn_mcdrive = yn_mcdrive;
    }
    if (yn_mcdelivery) {
      qs.yn_mcdelivery = yn_mcdelivery;
    }
    if (yn_parking) {
      qs.yn_parking = yn_parking;
    }
    if (searchText.length != 0) {
      qs.searchText = searchText;
    }
    console.log("qs: ", qs);

    axios.get(`${API_URL}/api/store`, { params: qs })
    .then(res => {
      setResult(res.data);
      setcurrentpage(1);
    }).catch(err => {
      console.error(err);
    })
  };

  const laststore = currentpage * storepage;
  const firststore = laststore - storepage;
  const currentStores = result.slice(firststore, laststore);

  const paginate = (pageNumber) => setcurrentpage(pageNumber);

  const centerOnMyLocation = () => {
    console.log("내 위치 중심으로 보기 버튼 클릭.");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMyLocation({ latitude, longitude });
          setClickedStore(null);
          console.log("내 위치가 다음 좌표로 설정됨:", { latitude, longitude });
        },
        (error) => {
          console.error("현재 위치를 가져오는 중 오류 발생:", error);
        }
      );
    } else {
      console.error("위치 정보 지원하지 않음.");
    }
  };

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
                  맥드라이브
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
                  placeholder="매장/지점명을 입력해주세요"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit">검색하기</button>
              </form>
            </div>
          </div>
        </div>
        <Maps
          stores={stores}
          onMarkerClick={handleStoreClick}
          clickedStore={clickedStore}
          myLocation={myLocation}
        />
        <div className="myLocationButton" onClick={centerOnMyLocation}>
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
                  <tr key={store.id} onClick={() => handleStoreClick(store)}>
                    <td>{`${store.store_name}/${store.address}`}</td>
                    <td>{store.phone}</td>
                    <td>{`${store.start_time} - ${store.end_time}`}</td>
                    <td>
                      {store.yn_24h == 1 && <span>24시간 </span>}
                      {store.yn_mcmorning == 1 && <span>맥모닝 </span>}
                      {store.yn_mcdrive == 1 && <span>맥드라이브 </span>}
                      {store.yn_mcdelivery == 1 && <span>맥딜리버리 </span>}
                      {store.yn_parking == 1 && <span>주차 가능</span>}
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
