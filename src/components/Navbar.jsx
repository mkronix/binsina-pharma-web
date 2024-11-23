import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../models/Contact";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=' fixed w-full z-10 text-white'>
      <div className='max-md:hidden flex flex-row justify-between p-5 border-b border-gray-200 lg:px-32 px-5 bg-backgroundColor'>
        <div className='flex md:items-center md:flex-row flex-col md:gap-10 gap-2'>
          <a href='mailto:info@binsinapharma.com'>info@binsinapharma.com</a>
          <a href='tel:+919892146706'>+91 98921 46706</a>
        </div>
        <div className='flex items-center gap-2 max-md:mt-3'>
          <FaFacebook size={20} className=' cursor-pointer' />
          <FaInstagram size={20} className=' cursor-pointer' />
          <FaLinkedin size={20} className=' cursor-pointer' />
          <RiTwitterXLine size={20} className=' cursor-pointer' />
        </div>
      </div>
      <div className=''>
        <div className='relative flex flex-row justify-between p-2 lg:px-24 px-5 bg-bgHead shadow-md'>
          <Link
            to='/'
            spy={true}
            smooth={true}
            duration={500}
            className='flex flex-row lg:w-56 md:w-48 w-32 items-center cursor-pointer'
          >
            <img src={logo} alt='' className='object-contain w-full h-full' />
            {/* <h2 className="text-2xl uppercase font-semibold text-gray-700">Binisana</h2> */}
          </Link>
          <nav className=' hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
            <Link
              to='/'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Home
            </Link>
            <Link
              to='/about'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              About Us
            </Link>
            <Link
              to='/doctors'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Product
            </Link>
            <Link
              to='/blog'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Blog
            </Link>
            <Link
              to='/services'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Certifications
            </Link>
            <Link
              to='/media'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Media
            </Link>
          </nav>

          <div className='hidden lg:flex items-center justify-center'>
            <button
              className='bg-brightColor h-14 flex items-center justify-center text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'
              onClick={openForm}
            >
              Reach us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className='lg:hidden flex items-center absolute right-6 top-6 z-50'>
            {menu ? (
              <AiOutlineClose
                className='text-backgroundColor transition duration-700 ease-in-out '
                size={28}
                onClick={handleChange}
              />
            ) : (
              <AiOutlineMenu
                className='text-backgroundColor transition duration-700 ease-in-out'
                size={28}
                onClick={handleChange}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-gray-700 left-0 top-[4.5rem] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to='/'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Home
          </Link>
          <Link
            to='/about'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            About Us
          </Link>
          <Link
            to='/doctors'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Product
          </Link>
          <Link
            to='/blog'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Blog
          </Link>
          <Link
            to='/services'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Certifications
          </Link>
          <Link
            to='/media'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Media
          </Link>

          <div className=' lg:hidden'>
            <button
              className='bg-brightColor text-white px-4 py-2 rounded-tl-lg rounded-br-lg text-xl hover:bg-hoverColor transition duration-300 ease-in-out'
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
