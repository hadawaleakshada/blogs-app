
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Display from './Components/Display/Display';
import BlogsTitle from './Components/BlogsTitle/BlogsTitle';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Display" element={<Display/>}/>
        <Route path='/BlogsTitle' element={<BlogsTitle/>}/>




      </Routes>
    </BrowserRouter>

  );
}

export default App;
