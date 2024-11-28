import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Aboutus from "./pages/aboutUs";
import Footer from "./components/Footer";
import Products from "./pages/products";
import NewsAndMedia from "./pages/newsAndMedia";
import QualityAssurance from "./pages/qualityAssurance";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/products' element={<Products />} />
        <Route path='/news-and-media' element={<NewsAndMedia />} />
        <Route path='/quality-assurance' element={<QualityAssurance />} />
        {/* <Route path='/services' element={<Services />} /> */}
        {/* <Route path='/media' element={<Media />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
