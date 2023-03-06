
import React from 'react';
import logo from './img/logo.png';
import './App.css';
import './Components/slide'
import Carousel from './Components/slide';
import  Navbar from './Components/navbar';
import { Menu, Slide } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/navbar";
import Home from "./Components/slide";
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Plat from "./Components/Plat";
import Menus from "./Components/Menus"




const App = () => {
    return (
      <>
      < Navbar/>
      <Home />
      <Menus/>
  </>
      
    );
  }


export default App;
