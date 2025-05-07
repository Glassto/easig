import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
    </main>
  );
}

export default App;
