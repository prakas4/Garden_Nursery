import React from "react";
import { About, ServicePage } from "@pages/index";
import {
  Carousal,
  Categories,
  ChooseUs,
  Facts,
  FaqSection,
  Feature,
  OfferProducts,
  Quote,
  Team,
  Testimonial,
  VideoContent,
  CompletedProjects
} from "@components/index.js";


const index = () => {
  return (
    <>
      <Carousal />
      <Feature />
      <Categories />
      <About />
      <Facts />
      <ChooseUs />
      <OfferProducts />
      <ServicePage />
      <Quote />
      <CompletedProjects />
      <Team />
      <Testimonial />
      <VideoContent />
      <FaqSection />
    </>
  );
};

export default index;
