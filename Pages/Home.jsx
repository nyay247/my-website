import React from "react";
import Clients from "../Components/Clients/Clients";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SectionEight from "../Components/SectionEight";
import SectionFive from "../Components/SectionFive";
import SectionFour from "../Components/SectionFour";
import SectionSeven from "../Components/SectionSeven";
import SectionSix from "../Components/SectionSix";
import Panelist from "../Components/Panelist";
import SectionThird from "../Components/SectionThird";
import SectionTwo from "../Components/SectionTwo";
import SectionNine from "../Components/SectionNine";

const Home = () => {
  return (
    <div className="bg-light-background    w-full ">
      <Header />
      <Hero />
      {/* <Clients /> */}
      <SectionTwo />
      <SectionThird />
      <SectionNine />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      {/* <SectionEight /> */}

      <Panelist />
      <Footer />
    </div>
  );
};

export default Home;
