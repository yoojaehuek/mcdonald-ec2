import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import Login from './page/Login/Login';
import Menu from './page/Menu/Menu';
import DetailProduct from './components/Product/DetailProduct/DetailProduct';
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
import Society from './page/Story/Society/Society';
import Slider from './components/Main/Slider'
import Scaleforgood from './page/Story/Society/Scaleforgood/Scaleforgood'
import Kidssoccer from './page/Story/Society/Kidssoccer/Kidssoccer';
import McDrive from './page/Store/McDrive/McDrive';
import Rental from './page/Store/Rental/Rental';
import McDelivery from './page/Store/McDelivery/McDelivery';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/login' element={<Login/>}/>
          <Route element={<Test />}>
            <Route path='/society' element={<Society/>}/>
            <Route path='/burger' element={<Menu/>}/>
            <Route path='/products/:id' element={<DetailProduct/>}/>
            <Route path='/crew' element={<Crew/>}></Route>
            <Route path='/work' element={<Work/>}></Route>
            <Route path='/recruit' element={<Recruit/>}></Route>
            <Route path='/faq' element={<Faq/>}></Route>
            <Route path='/farmtorestaurant' element={<FarmToRestaurant/>}></Route>
            <Route path='/happymeal' element={<HappyMeal />}></Route>
            <Route path='/brandintro' element={<BrandIntro/>}></Route>
            <Route path='/brandhistory' element={<BrandHistory/>}></Route>
            <Route path='/promotion' element={<Promotion />}></Route>
            <Route path='/slider' element={<Slider />}></Route>
            <Route path='/:page/detail/:prodNum' element={<DetailPromotion />}></Route>
            <Route path='/scaleforgood' element={<Scaleforgood/>}/>
          <Route path='/kidssoccer' element={<Kidssoccer />} />
          <Route path='/mcdrive' element={<McDrive />}></Route>
          <Route path='/rental' element={<Rental />}></Route>
          <Route path='/mcdelivery' element={<McDelivery/>}></Route>
        </Route>
        </Routes>
      <Footer />
    </div>
  );
}
//s
export default App;
