import React from "react";
import './Event.scss';
import MapBotton from "../MapBotton";
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
  return (
    <>
    <MapBotton/>
      <div className="FindStore">
        <div class="contents">
          <div class="contArea">
            <div class="inner">
              <div class="eventStore2">
                <div class="topInfo">
                  <h2>스트로베리 아이스크림 판매 매장입니다.</h2>
                  <p>아래 매장 리스트를 확인해주세요!</p>
                </div>
                <ul class="storeList"></ul>
                <div class="btnMore">
                  <button type="button" class="more" onClick="nextShow()">이벤트매장목록 더보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Buttonmain/>
      </>
    </>
  )
}

export default Event;