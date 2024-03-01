import React from "react"
import Navbar from "./components/Navbar";

import './css/style.css'
import './css/responsive.css'
import Banner from "./components/Banner";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonel from "./components/Testimonel";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backtotop from "./components/Backtotop";


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Features/>
      <Portfolio/>
      <Resume/>
      <Testimonel/>
      <Client/>
      <Contact/>
      <Footer/>
      <Backtotop/>
      
    </>
  );
}

export default App;
