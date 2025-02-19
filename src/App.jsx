import Navbar from "./components/Navbar";
import Aboutus from "./pages/aboutUs";
import Home from "./pages/home";
import NewsAndMedia from "./pages/newsAndMedia";
import Products from "./pages/products";
import QualityAssurance from "./pages/qualityAssurance";
import { Route, Routes } from "react-router-dom";
import FooterOne from "./components/Foooter";
import { useState } from "react";
import Terms from "./pages/terms";
import Disclaimer from "./pages/disclaimer";
import Policy from "./pages/policy";
import BlogDetails from "./pages/blogDetails";
import ProductDetails from "./pages/productDetails/productDetails";

const App = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  // Close form
  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <Navbar
        menu={menu}
        setMenu={setMenu}
        openForm={openForm}
        closeForm={closeForm}
        showForm={showForm}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/products' element={<Products openForm={openForm} />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/news-and-media' element={<NewsAndMedia />} />
        <Route path='/quality-assurance' element={<QualityAssurance />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>

      <FooterOne />
    </>
  );
};

export default App;
