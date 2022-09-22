import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx"
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>


      </Routes>
    </div>
  );
}

export default App;
