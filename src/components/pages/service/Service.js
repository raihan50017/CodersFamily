import React from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Topnav from "../../shared/topnav/Topnav";
import OurServices from "./OurServices";
import ServiceBanner from "./ServiceBanner";

const Service = () => {
  return (
    <div>
      <Topnav></Topnav>
      <Header></Header>
      <ServiceBanner></ServiceBanner>
      <OurServices></OurServices>
      <Footer></Footer>
    </div>
  );
};

export default Service;
