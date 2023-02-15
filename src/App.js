
import React from 'react';
import logo from './img/logo.png';
import './App.css';
import './slide.css'
import Carousel from './slide';
import  Navbar from './Components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Carousel />
     {/* bonjour */}
    </div>
  );
}

export default App;
