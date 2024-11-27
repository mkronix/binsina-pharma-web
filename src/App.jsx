import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/Footer";
import Products from "./pages/products";
import Blogs from "./pages/blogs";
import Media from "./pages/media";
import Certification from "./pages/certifications";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/blog' element={<Blogs />} />
        <Route path='/media' element={<Media />} />
        <Route path='/certification' element={<Certification />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
