import React from "react";
import SkipSize from "../Components/SkipSize/SkipSize";
import Hero from "../Components/Hero/Hero";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import ContactUs from "../Components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <SkipSize />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
}

export default Home;
