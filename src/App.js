import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import LostPage from "./pages/LostPage"
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/pics" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path ="*" element={<LostPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
