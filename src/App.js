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
import DynamicIndustry from "pages/DynamicIndustry";
import NotFound from "./components/NotFound";



function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_industries" element={<BufferPage />} />
          <Route path="/industry" element={<NotFound />} />
          <Route path="/all_data_&_AI_Industry_use_cases" element={<Catalyst />} />
          <Route path="/connected_vehicle" element={<IndustryDetail />} />
          <Route exact  path="/industry/:industry" element={<DynamicIndustry />} />
          <Route path="/industry/:industry/:piller/:cases" element={<IndustryCasesPage />} />
          <Route element={<NotFound/>} />
          <Route path="/coming_soon" element={<NotFound />} />
          <Route  path={"/industry/energy"} element={<NotFound/> } />
          <Route exact path={"/industry/energy/undefined/After-Market%20Sales%20Operations%20(Auto)"} element={<NotFound/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
