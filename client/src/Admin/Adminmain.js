import React, { useEffect, useRef } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AHeader from './Component/AHeader';
import AMenu from './Component/AMenu';
import AChart from './page/AChart';
import AProduct from './page/AProduct';
import AOption from './page/AOption';
import AOrder from './page/AOrder';
import ASlider from './page/ASlider';
import AStore from './page/AStore';
import ACrew from './page/story/ACrew';
import AEffort from './page/story/AEffort';
import AMaterial from './page/story/AMaterial';
import AVisualbackground from './page/AVisualbackground';
import AWhatsNew from './page/whatsNew/AWhatsNew';
import ANews from './page/whatsNew/ANews';
import StoreDetail from './Component/StoreTable/StoreDetail';
import AFaq from './page/story/AFaq';
import Asu from './page/Asu';


import './Adminmain.scss';

const AdminMain = () => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <AHeader />
      <AMenu />
      <div className='AdminMain'>
        <Routes>
          <Route path='/' element={<AChart />} />
          <Route path='/menu/:subcategory_id' element={<AProduct />} />
          <Route path='/store/*' element={<AStore />} />
          <Route path='/store/edit' element={<StoreDetail />} />
          <Route path='/story/crew' element={<ACrew />} />
          <Route path='/story/faq' element={<AFaq />} />
          <Route path='/story/effort' element={<AEffort />} />
          <Route path='/story/material' element={<AMaterial />} />
          <Route path='/order/*' element={<AOrder />} />
          <Route path='/visualbackground/*' element={<AVisualbackground />} />
          <Route path='/option/*' element={<AOption />} />
          <Route path='/slider/*' element={<ASlider />} />
          <Route path='/whats-new/*' element={<AWhatsNew />} />
          <Route path='/whats-new/13' element={<ANews />} />
           <Route path='/asu' element={<Asu/>} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminMain;
