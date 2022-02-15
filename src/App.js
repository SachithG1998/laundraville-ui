import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
