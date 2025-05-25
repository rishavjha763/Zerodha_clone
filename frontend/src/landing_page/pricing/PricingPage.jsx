import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Navebar from "../Navbar";
import Footer from "../Footer";


function PricingPage() {
  return (
    <>
      <Navebar/>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Footer/>
    </>
  );
}

export default PricingPage;
