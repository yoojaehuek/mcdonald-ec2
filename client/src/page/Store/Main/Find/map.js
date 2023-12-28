import React, { useEffect } from "react";

const { kakao } = window;

function Maps({ stores, onMarkerClick, clickedStore, myLocation }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.55415495198728, 126.97078657543889),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  
    // 매장 정보를 이용하여 마커 생성 및 지도에 추가
    stores.forEach((store) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(store.latitude, store.longitude),
        title: store.store_name,
      });
  
      kakao.maps.event.addListener(marker, "click", function () {
        onMarkerClick(store);
      });
  
      marker.setMap(map);
    });
  
    // clickedStore가 변경되면 해당 좌표로 지도 이동
    if (clickedStore) {
      const { latitude, longitude } = clickedStore;
      const moveLatLng = new kakao.maps.LatLng(latitude, longitude);
      map.panTo(moveLatLng);
    } else if (myLocation) {
      // 내 위치 중심으로 지도 이동
      const { latitude, longitude } = myLocation;
      const moveLatLng = new kakao.maps.LatLng(latitude, longitude);
      map.panTo(moveLatLng);
    }
  }, [stores, onMarkerClick, clickedStore, myLocation]);

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
