import React from "react";
import HeroSection from "../components/home/HeroSection";
import VehicleTypeSection from "../components/home/VehicleTypeSection";
import GetStarted from "../components/home/GetStarted";
import ExploreVehicles from "../components/home/ExploreVehicles";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurTeam from "../components/home/OurTeam";
import CustomerView from "../components/home/CustomerView";
import LoanCalculator from "../components/home/LoanCalculator";
import Footer from "../components/home/Footer";
import BlogPosts from "../components/home/BlogPosts";

function Home() {
  return (
    <div className="">
      <HeroSection />
      <VehicleTypeSection />
      <GetStarted />

      {/* <ExploreVehicles />      remove from home*/}

      <WhyChooseUs />
      <OurTeam />

      {/* <CustomerView /> */}
      {/* <BlogPosts /> */}

      <LoanCalculator />
      <Footer />
    </div>
  );
}

export default Home;
