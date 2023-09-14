import HomeSlide from "./components/HomeSlide";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
       <HomeSlide /> 
      <Footer/>
    </div>
  
  );
}

export default App;
