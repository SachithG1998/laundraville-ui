import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Signup from "./pages/signup/SignUp";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";

AOS.init();

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
