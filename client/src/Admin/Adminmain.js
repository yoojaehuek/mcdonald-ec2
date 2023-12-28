import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AHeader from './Component/AHeader';
import AMenu from './Component/AMenu';
import AChart from './page/AChart/AChart';
import AProduct from './page/AProduct/AProduct';
import AProductDetail from './Component/ProductTable/ProductDetail';
import AProductUpload from './Component/ProductTable/ProductUpload';
import AOption from './page/AOption/AOption';
import AOrder from './page/AOrder/AOrder';
import ASlider from './page/ASlider/ASlider';
import AStore from './page/AStore/AStore';
import StoreAdd from './Component/StoreTable/StoreAdd';
import ACrew from './page/story/ACrew';
import AEffort from './page/story/AEffort';
import AMaterial from './page/story/AMaterial';
import ABanner from './page/ABanner/ABanner';
import AWhatsNew from './page/AWhatsNew/AWhatsNew/AWhatsNew.js';
import ANews from './page/AWhatsNew/ANews/ANews.js';
import StoreDetail from './Component/StoreTable/StoreDetail';
import AFaq from './page/story/AFaq';
import ALogin from './page/ALogin/ALogin.js';

import './Adminmain.scss';
import { getCookie } from '../utils/cookie.js';

const AdminMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    console.log("location: ", location);
    if(!getCookie('login')){
      alert('다시 로그인 해주세요');
      navigate('/admin/login');
    }
  }, [location]);
  return (
    // <div id='Admin' style={{ display: 'flex', flexDirection: 'column'}}>
    <div id='Admin' >
      <AHeader id='header' />
      <AMenu id='menu' />
      <div className='AdminMain' style={{padding: ' 0 100px'}}>
        <Routes>
          
          <Route path='/' element={<AChart />} />
          {/* <Route path='/admin/login' element={<ALogin />} /> */}
          <Route path='/menu/:subcategory_id' element={<AProduct />} />
          <Route path='/menu/:subcategory_id/upload' element={<AProductUpload />} />
          <Route path='/menu/:subcategory_id/edit' element={<AProductDetail />} />
          <Route path='/store/*' element={<AStore />} />
          <Route path='/store/edit' element={<StoreDetail />} />
          <Route path='/store/add' element={<StoreAdd />} />
          <Route path='/story/crew' element={<ACrew />} />
          <Route path='/story/faq' element={<AFaq />} />
          <Route path='/story/effort' element={<AEffort />} />
          <Route path='/story/material' element={<AMaterial />} />
          <Route path='/order/*' element={<AOrder />} />
          <Route path='/banner/*' element={<ABanner />} />
          <Route path='/option/*' element={<AOption />} />
          <Route path='/slider/*' element={<ASlider />} />
          <Route path='/whats-new/*' element={<AWhatsNew />} />
          <Route path='/whats-new/13' element={<ANews />} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminMain;
