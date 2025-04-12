import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
