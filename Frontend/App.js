import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import VolunteerApplication from './Components/VolunteerApplication';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import AdminLogin from './Components/AdminLogin';


function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/s' element={<Signup />}></Route>
      <Route path='/l' element={<Login />}></Route>
      <Route path='/v' element={<VolunteerApplication />}></Route>
      <Route path='/a' element={<AdminLogin />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App;
