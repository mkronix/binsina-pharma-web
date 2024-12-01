import Navbar from "./components/Navbar";
import Aboutus from "./pages/aboutUs";
import Home from "./pages/home";
import NewsAndMedia from "./pages/newsAndMedia";
import Products from "./pages/products";
import QualityAssurance from "./pages/qualityAssurance";
import { Route, Routes } from "react-router-dom";
import FooterOne from "./components/Foooter1";

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
      </Routes>

      <FooterOne />
    </div>
  );
};

export default App;
