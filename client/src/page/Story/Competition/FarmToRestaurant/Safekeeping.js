import React from 'react';
import './FarmToRestaurant.scss';

const Safekeeping = () => {
  return (
    <div className="safekeeping-container">
      <h1>깐깐한 원재료 준비 및 가공 과정만큼 보관과 배송도 중요하겠죠?</h1>
      <h3>
        GFSI (FSSC22000) 인증을 받은 배송 업체에서는 재료의 신선도와 안전성을 유지하기 위해<br/>
        철저하게 품질을 검사하여 보관하고 배송합니다.
      </h3>
      <div className="images-section">
        <div className="image-set">
          <img src="../images/Story/1.jpg" alt="Image 1" />
          <h1>최적의 온도와 보안 상태를 확인하는 <br/>검수 및 하역 단계</h1>
          <h3>깐깐한 관리를 통해 선별되고 가공된 원재료는 최적화된 온도에서 보관된 상태로 원재료 컨테이너에 봉인되어 물류 창고에 도착합니다. 물류업체에서 보안 확인을 마친 후, 트럭과 공장 사이의 공간이 한치의 틈도 없이 맞물리도록 도킹 작업을 수행, 최적의 온도를 유지하도록 한 후 재료를 하역합니다. 하역과정에서 재료의 온도를 확인하고 검수하는 과정을 거친 후에, 품질 검사증을 붙여 최적의 상태로 보관될 수 있도록 합니다.</h3>
        </div>
        <div className="image-set">
          <img src="../images/Story/2.jpg" alt="Image 2" />
          <h1>안전과 청결은 기본, VeroFresh program 관리를 통한 배송단계</h1>
          <h3>검수가 완료된 재료들은 레스토랑으로 이동되기 전까지 재료의 종류, 레스토랑 배송 날짜 등에 따라 분류하여 안전하고 깨끗하게 보관됩니다. 이 때, 재료들의 신선한 보관을 위해 최적의 온도 상태를 유지합니다. 재료의 유효기간과 상태를 다시 한 번 점검 후, 배송 차량이 보관 창고에 한 치의 틈도 없이 도킹되면, 재료들을 차량에 실어 목적지 레스토랑으로 출발하게 됩니다. VeroFresh program 으로 실시간 제품과 차량의 온도를 확인이 가능하여 배송 전까지 온도이탈을 최소화 합니다.</h3>
        </div>
      </div>
    </div>
  );
};

export default Safekeeping;
