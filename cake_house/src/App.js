import HomeSlide from "./components/HomeSlide";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import './App.css';
import Navbar from "./components/Navbar";
import CategoryTitle from "./components/CategoryTitle";
import CategoryCake from "./pages/CategoryCake";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <CategoryTitle />
      <Home/>
      <CategoryCake/>
      
      
      
      
       
      <Footer/>
    </div>
  
  );
}

export default App;
