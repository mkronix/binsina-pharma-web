import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import { FiPhone } from "react-icons/fi";

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
      <div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap items-center justify-between py-2'>
            {/* Left Section */}
            <div className='w-full md:w-2/3 lg:w-3/4 text-center md:text-left'>
              <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6'>
                <li>
                  <a
                    href='#'
                    className='flex items-center text-gray-700 hover:text-blue-600'
                  >
                    <FiPhone />
                    +463281626556
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center text-gray-700 hover:text-blue-600'
                  >
                    <i className='lni lni-envelope mr-2'></i>{" "}
                    hellomedic@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className='hidden md:flex md:w-1/3 lg:w-1/4 justify-end space-x-4'>
              <a href='#' className='text-gray-700 hover:text-blue-600'>
                <i className='lni lni-facebook-filled'></i>
              </a>
              <a href='#' className='text-gray-700 hover:text-blue-600'>
                <i className='lni lni-twitter-filled'></i>
              </a>
              <a href='#' className='text-gray-700 hover:text-blue-600'>
                <i className='lni lni-linkedin-original'></i>
              </a>
            </div>
          </div>
        </div>
        <div className=' flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          <div className=' flex flex-row items-center cursor-pointer'>
            <Link to='home' spy={true} smooth={true} duration={500}>
              <h1 className=' text-2xl font-semibold'>Binsina Pharma</h1>
            </Link>
          </div>

          <nav className=' hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
            <Link
              to='home'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor transition-all cursor-pointer'
            >
              Home
            </Link>
            <Link
              to='about'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor transition-all cursor-pointer'
            >
              About Us
            </Link>
            <Link
              to='services'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor transition-all cursor-pointer'
            >
              Services
            </Link>
            <Link
              to='doctors'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor transition-all cursor-pointer'
            >
              Doctors
            </Link>
            <Link
              to='blog'
              spy={true}
              smooth={true}
              duration={500}
              className=' hover:text-hoverColor transition-all cursor-pointer'
            >
              Blog
            </Link>
          </nav>

          <div className=' hidden lg:flex'>
            <button
              className='bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=' lg:hidden flex items-center'>
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor transition-all cursor-pointer'
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor transition-all cursor-pointer'
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to='services'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor transition-all cursor-pointer'
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to='doctors'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor transition-all cursor-pointer'
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to='blog'
            spy={true}
            smooth={true}
            duration={500}
            className=' hover:text-hoverColor transition-all cursor-pointer'
            onClick={closeMenu}
          >
            Blog
          </Link>

          <div className=' lg:hidden'>
            <button
              className='bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'
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
