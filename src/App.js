import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Industry from "pages/Industry/Industry";
import Catalyst from "pages/Catalyst/Catalyst";
import IndustryDetail from "pages/IndustryDetail/IndustryDetail";
import BufferPage from "pages/BufferPage/BufferPage";
import IndustryCasesPage from "pages/IndustryCasesPage/IndustryCasesPage";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry_grid" element={<BufferPage />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/additional_resources" element={<Catalyst />} />
          <Route path="/connected_vehicle" element={<IndustryDetail />} />
          <Route path="/industry/:industry/:cases" element={<IndustryCasesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
