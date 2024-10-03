
import './App.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import axios from 'axios';
import LoginPopup from './components/loginCompo/LoginPopup';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LoginPopup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
