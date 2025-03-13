import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, About, Cart, ServicePage, Contact, Products } from "@pages/index.js";
import { Navbar, Topbar, Footer } from "@components/index.js";

const AppRoutes = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
