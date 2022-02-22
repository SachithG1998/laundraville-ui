import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles.css";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
