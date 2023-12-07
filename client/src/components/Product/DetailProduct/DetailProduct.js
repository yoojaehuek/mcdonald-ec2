import React from 'react';
import './DetailProduct.scss';

const DetailProduct =({match})=>{
    // URL에서 동적으로 전달된 제품 ID를 얻습니다.
    const productId = match.params.id;
    
	return(
        <div>
            <h2>상세페이지</h2>
            <p>
                제품 ID : {productId}
            </p>

        </div>
	)
}

export default DetailProduct;