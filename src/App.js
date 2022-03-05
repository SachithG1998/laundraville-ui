import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";

AOS.init();

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row position-relative">
          <Navbar />
        </div>
        <div className="row position-relative">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="row position-relative">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
