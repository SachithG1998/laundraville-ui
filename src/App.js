import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Signup from "./pages/signup/SignUp";
import Login from "./components/customerEntry/login/Login";
import Services from "./pages/services/Services";
import Dashboard from "./pages/dashboard/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AOS from "aos";

AOS.init();

function App() {
  return (
    <>
      {/* Dynamically renders the navigation bar based on the current path */}
      {window.location.pathname === "/dashboard" ? <></> : <Navbar />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      {/* Dynamically renders the footer based on the current path */}
      {window.location.pathname === "/dashboard" ? <></> : <Footer />}

      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
