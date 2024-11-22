import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Testimonals from "./components/Testimonals";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id='home' className="md:pt-36 pt-16">
          <Home />
        </div>

        <div id='about'>
          <About />
        </div>

        <div id='services'>
          <Services />
        </div>

        <div id='media'>
          <Testimonals />
        </div>

        <div id='blog'>
          <Blogs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
