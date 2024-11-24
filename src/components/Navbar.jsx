import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Contact from "../models/Contact";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../assets/img/logo.png";
import data from "../data/data.json";
import Button from "./Button/Button";

const Navbar = () => {
  const { common } = data.binsinaPharma;

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
    <div className='fixed w-full z-10 text-white'>
      <div className='max-md:hidden flex flex-row justify-between p-2 border-b border-gray-200 lg:px-16 px-8 bg-backgroundColor'>
        <div className='flex md:items-center md:flex-row flex-col md:gap-10 gap-2'>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-backgroundColor rounded-full shadow-md hover:bg-hoverColor hover:shadow-lg transition-all cursor-pointer'>
              <MdOutlineMail size={15} />
            </div>
            <a href={`mailto:${common.email}`}>{common.email}</a>
          </div>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-backgroundColor rounded-full shadow-md hover:bg-hoverColor hover:shadow-lg transition-all cursor-pointer'>
              <HiOutlinePhone size={15} />
            </div>
            <a href={`tel:${common.contact}`}>{common.contact}</a>
          </div>
        </div>
        <div className='flex items-center gap-4 max-md:mt-3'>
          <div className='p-2 bg-backgroundColor rounded-full shadow-md hover:bg-hoverColor hover:shadow-lg transition-all cursor-pointer'>
            <FaFacebook size={15} />
          </div>
          <div className='p-2 bg-backgroundColor rounded-full shadow-md hover:bg-hoverColor hover:shadow-lg transition-all cursor-pointer'>
            <FaInstagram size={15} />
          </div>
          <div className='p-2 bg-backgroundColor rounded-full shadow-md hover:bg-hoverColor hover:shadow-lg transition-all cursor-pointer'>
            <FaLinkedin size={15} />
          </div>
          <div className='p-2 bg-backgroundColor rounded-full shadow-md hover:bg-hoverColor hover:shadow-lg transition-all cursor-pointer'>
            <RiTwitterXLine size={15} />
          </div>
        </div>
      </div>

      <div className=''>
        <div className='relative flex flex-row justify-between py-2 lg:px-16 px-8 bg-bgHead shadow-md'>
          <Link
            to='/'
            duration={500}
            className='flex flex-row md:w-44 w-32 items-center cursor-pointer'
          >
            <img src={logo} alt='' className='object-contain w-full h-full ' />
            {/* <h2 className="text-2xl uppercase font-semibold text-gray-700">Binisana</h2> */}
          </Link>
          <nav className=' hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
            <Link
              to='/'
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Home
            </Link>
            <Link
              to='/about'
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              About Us
            </Link>
            <Link
              to='/doctors'
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Product
            </Link>
            <Link
              to='/blog'
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Blog
            </Link>
            <Link
              to='/services'
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Certifications
            </Link>
            <Link
              to='/media'
              duration={500}
              className=' hover:text-hoverColor text-gray-700 transition-all cursor-pointer'
            >
              Media
            </Link>
          </nav>

          <div className='hidden lg:flex items-center justify-center'>
            <Button title={'Reach us'} />
          </div>
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
          className={`${menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-backgroundColor text-gray-700 left-0 top-[4.5rem] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to='/'
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Home
          </Link>
          <Link
            to='/about'
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            About Us
          </Link>
          <Link
            to='/doctors'
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Product
          </Link>
          <Link
            to='/blog'
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Blog
          </Link>
          <Link
            to='/services'
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Certifications
          </Link>
          <Link
            to='/media'
            duration={500}
            className=' hover:text-hoverColor text-gray-700 text-lg transition-all cursor-pointer'
          >
            Media
          </Link>

          <div className=' lg:hidden'>
            <Button title={'Reach us'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
