import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import Login from './page/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Crew from './page/Story/People/Crew/Crew';
import Work from './page/Story/People/Work/Work';
import Recruit from './page/Story/People/Recruit/Recruit';
import Faq from './page/Story/Competition/Faq/Faq';
import BrandIntro from './page/Story/BrandIntro/BrandIntro';
// import Effort from './page/Story/Competition/FarmToRestaurant/Effort';
// import Safekeeping from './page/Story/Competition/FarmToRestaurant/Safekeeping';
import FarmToRestaurant from './page/Story/Competition/FarmToRestaurant/FarmToRestaurant';
// import Material from './page/Story/Competition/FarmToRestaurant/Material';
import HappyMeal from './page/WhatsNew/HappyMeal/HappyMeal';
import Promotion from './page/WhatsNew/Promotion/Promotion';
import DetailPromotion from './page/WhatsNew/Promotion/DetailPromotion/DetailPromotion';
import BrandHistory from './page/Story/BrandIntro/BrandHistory';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login/>}/>

        <Route path='/crew' element={<Crew/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/recruit' element={<Recruit/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/farmtorestaurant' element={<FarmToRestaurant/>}></Route>
        <Route element={<Test></Test>}>
          <Route path='/brandintro' element={<BrandIntro/>}></Route>
          <Route path='/brandhistory' element={<BrandHistory/>}></Route>
          <Route path='/promotion' element={<Promotion />}></Route>
          <Route path='/promotion/detail/:prodNum' element={<DetailPromotion />}></Route>
        </Route>
      </Routes>
      <NavLink to={"/promotion"}>프로모션</NavLink>
      <NavLink to={"/crew"}>Crew</NavLink>
      <NavLink to={"/work"}>work</NavLink>
      <NavLink to={"/recruit"}>recruit</NavLink>
      <Footer />
    </div>
  );
}

export default App;
