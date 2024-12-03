import Navbar from "./components/Navbar";
import Aboutus from "./pages/aboutUs";
import Home from "./pages/home";
import NewsAndMedia from "./pages/newsAndMedia";
import Products from "./pages/products";
import QualityAssurance from "./pages/qualityAssurance";
import { Route, Routes } from "react-router-dom";
import FooterOne from "./components/Foooter1";
import { useState } from "react";

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
    <div>
      <Navbar menu={menu} setMenu={setMenu} openForm={openForm} closeForm={closeForm} showForm={showForm} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/products' element={<Products openForm={openForm} />} />
        <Route path='/news-and-media' element={<NewsAndMedia />} />
        <Route path='/quality-assurance' element={<QualityAssurance />} />
      </Routes>

      <FooterOne />
    </div>
  );
};

export default App;
