import React from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Topnav from "../../shared/topnav/Topnav";
import About from "../about/About";
import Homeclient from "./Homeclient";
import Hometestimonial from "./Hometestimonial";
import Homewhoweare from "./Homewhoweare";
const Home = () => {
  return (
    <div>
      <Topnav></Topnav>
      <Header></Header>
      
      <h1>Home Page Content</h1>
      <About></About>
    <Homewhoweare></Homewhoweare>
    <Hometestimonial></Hometestimonial>
    <Homeclient></Homeclient>
      <Footer></Footer>
    </div>
  );
};

export default Home;
