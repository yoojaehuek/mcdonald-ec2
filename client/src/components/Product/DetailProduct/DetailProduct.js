import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailProduct.scss';

const DetailProduct =()=>{
    const { id } = useParams();

	return(
        <div id='burger-Detail '>
            <h2>상세페이지</h2>
            <p>
                제품 ID: {id}
            </p>

        </div>
	)
}

export default DetailProduct;