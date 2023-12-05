import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './page/Login/Login';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
