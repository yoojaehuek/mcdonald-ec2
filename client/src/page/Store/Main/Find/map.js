import React, { useEffect } from "react";

const { kakao } = window;

function Maps() {
  useEffect(() => {
    // 여기에서 Kakao 지도 API를 사용하여 지도를 초기화하는 코드를 작성
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 필요한 경우 추가적인 설정 또는 이벤트 처리를 진행
  }, []);

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
        style={{ width: "60vw", height: "60vh", margin: "5vw" }}
      ></div>
    </div>
  );
}

export default Maps;
