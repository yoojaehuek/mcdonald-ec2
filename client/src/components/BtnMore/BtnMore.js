import React from 'react';
import './BtnMore.scss';

const BtnMore = ({ onClick })=>{

	return(
        <div id='btnMore-box'>
            <button className='btnMore' onClick={onClick}></button>
        </div>
	)
}

export default BtnMore ;