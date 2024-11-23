import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Footer from "./components/Footer";
import Products from "./pages/products";
import Blogs from "./pages/blogs";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Blogs' element={<Blogs />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
