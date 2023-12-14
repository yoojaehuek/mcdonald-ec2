import React, { useState } from 'react';
import './Event.scss';
import MapBottom from "../MapBottom";
import Buttonmain from "../../../../components/Main/Button";


{/* <script>
  function nextShow() {
    $(".storeList > li:hidden").each(
      function(i, ob) {
        if (i < 15)
          $(ob).show();
      }
    );
    if($(".storeList > li:hidden").length == 0) {
      $(".btnMore").hide()
    }
  }

  $(document).ready(function () {
    nextShow();
  });
</script> */}


const Event = () => {
  const dd = [
    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원',
    '충북', '충남', '전북', '전남', '경북', '경남', '제주', '강남', '강서', '송파',
    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원',
    '충북', '충남', '전북', '전남', '경북', '경남', '제주', '강남', '강서', '송파',
    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원',
    '충북', '충남', '전북', '전남', '경북', '경남', '제주', '강남', '강서', '송파',
    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원'
  ];

  const chunkArray = (array, size) => { // 배열 나누는 함수 chunkarray.
    const result = []; // 나눠진 배열들 담을 빈 배열
    for (let i = 0; i < array.length; i += size) { // 주어진 size 만큼 이동
      result.push(array.slice(i, i + size)); // 돌면서 주어진 크기만큼 부분 배열 추출. 결과 추가
    }
    return result;
  };

  const Count = 15; // 표시할 데이터 개수
  const [displayCount, setDisplayCount] = useState(Count); // 표시할 데이터 개수만큼 초기값 설정

  const chunkeddd = chunkArray(dd.slice(0, displayCount), 4); // 현재까지 표시된 데이터 나눠서 변수에 저장
  // console.log(displayCount);
  // console.log(chunkeddd);
  const nextShow = () => {
    setDisplayCount(prevCount => prevCount + 15); // 버튼 누르면 업데이트해서 데이터 보여줌
  };

  const AllData = displayCount >= dd.length; // 모든 데이터 표시했는지 체크? 변수.
  // console.log(AllData);
  return (
    <>
      <MapBottom />
      <div className="FindStore1">
        <div className="contents">
          <div className="contArea2">
            <div className="inner">
              <div className="eventStore2">
                <div className="topInfo">
                  <h2>스트로베리 아이스크림 판매 매장입니다.</h2>
                  <p>아래 매장 리스트를 확인해주세요!</p>
                </div>
                <ul className="storeList">
                  {chunkeddd.map((group, groupIndex) => ( // 반복. 그만.
                  // 각 그룹 나타내는 클래스 만듬
                    <div key={groupIndex} className="storeListRow">
                      {group.map((location, locationIndex) => ( // 계속 반복.
                        <li key={locationIndex} className="locationItem">
                          {location}
                        </li> // 각 위치 나타내는 item 클래스 li 생성.
                      ))}
                    </div>
                  ))}
                  {/* {isAllDataDisplayed && (
                    <div className="storeListRow" style={{ borderBottom: '2px solid #000' }}>
                      <div className="locationItem">
                      </div>
                    </div>
                  )} */}
                </ul>
                {!AllData && (
                  <div className="btnMore">
                    <button type="button" className="more" onClick={nextShow}>
                      <span>+</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Buttonmain />
    </>
  );
};

export default Event;