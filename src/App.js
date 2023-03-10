import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Industry from "pages/Industry/Industry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry" element={<Industry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
