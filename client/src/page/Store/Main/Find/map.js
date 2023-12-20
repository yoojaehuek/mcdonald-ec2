import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../config/contansts";

const { kakao } = window;

function Maps() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // 서버에서 매장 정보를 가져오는 비동기 함수
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(`${API_URL}/store`);
        setStores(response.data);
         // 이후의 Kakao 지도 코드를 여기에 추가
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.55415495198728, 126.97078657543889),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        // 매장 정보를 이용하여 마커 생성 및 지도에 추가
        response.data.forEach((store) => {
          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(store.latitude, store.longitude),
            title: store.name,
          });
          marker.setMap(map);
        });

      } catch (error) {
        console.error("Error fetching store data:", error.message);
      }
    };
    // 매장 정보를 가져온 후 실행
    fetchStoreData();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="map"
        style={{ width: "60vw", height: "60vh", margin: "2vw" }}
      ></div>
    </div>
  );
}

export default Maps;
