import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Test from './page/Test';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
      </Routes>
    </div>
  );
}

export default App;
