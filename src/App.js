import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
