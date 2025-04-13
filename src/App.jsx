import React from "react";

import Home from "./pages/homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SharedLayout from "./layout/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
