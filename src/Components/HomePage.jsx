import Carousel from "../Components/Carousel";
import React from "react";
import Feature from "./Feature";
import Categories from "../Components/Categories";
import About from "./About";
import Product from "./Product";
import Facts from "../Components/Facts";
import FeatureChoose from "../Components/FeatureChoose";
import Service from "./Service";
import Quote from "./Quote";
import Projects from "./Projects";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Video from "./Video";
import FAQ from "./FAQ";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Feature />
      <Categories />
      <About />
      <Facts />
      <FeatureChoose />
      <Product />
      <Service />
      <Quote />
      <Projects />
      <Team />
      <Testimonial />
      <Video />
      <FAQ />
    </>
  );
};

export default HomePage;
