import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Crew from './page/Story/People/Crew/Crew';
import Work from './page/Story/People/Work/Work';
import Recruit from './page/Story/People/Recruit/Recruit';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
