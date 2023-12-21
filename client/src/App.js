import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Crew from './page/Story/People/Crew/Crew';
import Work from './page/Story/People/Work/Work';
import Recruit from './page/Story/People/Recruit/Recruit';
import HappyMeal from './page/WhatsNew/HappyMeal/HappyMeal';
import Promotion from './page/WhatsNew/Promotion/Promotion';
import DetailPromotion from './page/WhatsNew/Promotion/DetailPromotion/DetailPromotion';
import Society from './page/Story/Society/Society';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
        <Route path='/crew' element={<Crew/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/recruit' element={<Recruit/>}></Route>
        {/* <Route path='/test' element={<Test></Test>}></Route> */}
        <Route path='/promotion' element={<Promotion />}></Route>
        <Route path='/promotion/detail/:prodNum' element={<DetailPromotion />}></Route>
        <Route path='/society' element={<Society />}></Route>
      </Routes>
      <NavLink to={"/promotion"}>프로모션</NavLink>
      <Footer />
    </div>
  );
}

export default App;
