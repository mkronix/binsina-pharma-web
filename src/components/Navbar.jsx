import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiArrowDownSLine, RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Contact from "../models/Contact";
import Button from "./Button/Button";
import data from "../data/data.json";
import { HiOutlinePhone } from "react-icons/hi2"
import { MdOutlineMail } from "react-icons/md";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { common } = data.binsinaPharma;
  // Navigation links and submenus
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/news-and-media", label: "News And Media" },
    { path: "/quality-assurance", label: "Quality Assurance" },
    // {
    //   title: "Our Moto",
    //   subMenuItems: [
    //     { path: "/mission", label: "Mission" },
    //     { path: "/vision", label: "Vision" },
    //   ],
    // },
  ];

  // Toggle menu
  const handleChange = () => {
    setMenu(!menu);
  };

  // Open form
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  // Close form
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      {/* Social Media Bar */}
      <div className="max-lg:hidden flex flex-row justify-between p-4 border-b border-gray-200 lg:px-16 px-8 bg-gradient-to-r from-brightColor to-[#1a1b26]">
        <div className='flex md:items-center md:flex-row flex-col md:gap-10 gap-2'>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:border-white hover:border hover:shadow-lg transition-all cursor-pointer'>
              <MdOutlineMail size={15} />
            </div>
            <a href={`mailto:${common.email}`}>{common.email}</a>
          </div>
          <div className='flex items-center gap-2'>
            <div className='p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:border-white hover:shadow-lg transition-all cursor-pointer'>
              <HiOutlinePhone size={15} />
            </div>
            <a href={`tel:${common.contact}`}>{common.contact}</a>
          </div>
        </div>
        <div className="flex items-center gap-4 max-md:mt-3">
          <div className="p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:border-white hover:shadow-lg transition-all cursor-pointer">
            <FaFacebook size={15} />
          </div>
          <div className="p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:border-white hover:shadow-lg transition-all cursor-pointer">
            <FaInstagram size={15} />
          </div>
          <div className="p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:border-white hover:shadow-lg transition-all cursor-pointer">
            <FaLinkedin size={15} />
          </div>
          <div className="p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:border-white hover:shadow-lg transition-all cursor-pointer">
            <RiTwitterXLine size={15} />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="">
        <div className="relative flex flex-row lg:justify-around justify-between items-center p-4 md:px-10 bg-bgHead shadow-md">
          <Link
            to="/"
            className="flex flex-row lg:w-[22rem] w-60 items-center cursor-pointer"
          >
            <img src={logo} alt="Logo" className="object-contain w-full h-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.subMenuItems ? (
                  <SubMenu title={link.title} subMenuItems={link.subMenuItems} />
                ) : (
                  <Link
                    to={link.path}
                    duration={500}
                    className="hover:text-hoverColor text-gray-700 transition-all cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Reach Us Button */}
          <div className="hidden lg:flex items-center justify-center">
            <Button title={"Reach us"} onClick={openForm} />
          </div>

          {/* Contact Form */}
          {showForm && <Contact closeForm={closeForm} />}

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center absolute right-5 top-5 z-50">
            {menu ? (
              <AiOutlineClose
                className="text-brightColor transition duration-700 ease-in-out"
                size={28}
                onClick={handleChange}
              />
            ) : (
              <AiOutlineMenu
                className="text-brightColor transition duration-700 ease-in-out"
                size={28}
                onClick={handleChange}
              />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-gradient-to-r from-brightColor to-[#1a1b26]  text-gray-700 left-0 top-[4rem] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-[calc(100vh-4rem)] transition-transform duration-300`}
        >
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.subMenuItems ? (
                <SubMenu title={link.title} subMenuItems={link.subMenuItems} />
              ) : (
                <Link
                  to={link.path}
                  duration={500}
                  className="hover:text-hoverColor text-white text-2xl transition-all cursor-pointer"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Reach Us Button */}
          <div className="lg:hidden flex justify-center">
            <Button title={"Reach us"} onClick={openForm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// SubMenu Component
const SubMenu = ({ title, subMenuItems }) => {
  return (
    <div className="relative group flex justify-center">
      {/* Parent Item */}
      <button className="cursor-pointer text-gray-700 flex items-center justify-center hover:text-hoverColor">
        <span>{title}</span>
        <RiArrowDownSLine className="text-2xl pt-[3px]" />
      </button>

      {/* Submenu */}
      <div className="absolute w-max pr-10 left-1/2 transform -translate-x-1/2 lg:mt-8 mt-2 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg overflow-hidden origin-top">
        <ul className="py-2">
          {subMenuItems.map((item, index) => (
            <li key={index} className="px-4 py-2">
              <Link to={item.path} className="block text-gray-800 hover:text-brightColor">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
