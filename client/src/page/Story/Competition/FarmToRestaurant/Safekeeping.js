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
          <img src="./images/Story/people.jpg" alt="Image 1" />
          <h1>1.</h1>
          <h3> 1</h3>
        </div>
        <div className="image-set">
          <img src="./images/Story/people.jpg" alt="Image 2" />
          <h1>2.</h1>
          <h3> 2</h3>
        </div>
      </div>
    </div>
  );
};

export default Safekeeping;
