import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDownSLine, RiTwitterXLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Contact from "../models/Contact";
import Button from "./Button/Button";
import data from "../data/common.json";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { PropTypes } from "prop-types";
import { RiYoutubeLine } from "react-icons/ri";

const Navbar = ({ menu, setMenu, showForm, openForm, closeForm }) => {
  const [hideTopBar, setHideTopBar] = useState(false);
  const location = useLocation();

  const { common } = data.binsinaPharma;
  // Navigation links and submenus
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/product-details", label: "Pharamacy" },
    // {
    //   title: "Products",
    //   subMenuItems: [
    //     { path: "/products", label: "All Products" },
    //   ],
    // },
    { path: "/news-and-media", label: "News And Media" },
    { path: "/quality-assurance", label: "Quality Assurance" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down, hide the top bar
        setHideTopBar(true);
      } else if (currentScrollY <= 50) {
        // User is at the top, show the top bar
        setHideTopBar(false);
      } else {
        // User is scrolling up, show the top bar
        setHideTopBar(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Toggle menu
  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <nav className='fixed w-full z-10 text-white'>
      {/* top Bar */}
      <aside
        className={`transition-transform duration-300 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } flex md:flex-row flex-col max-md:items-end md:justify-between p-4 border-b border-gray-200 lg:px-16 px-8 bg-gradient-to-r from-brightColor to-[#1a1b26]`}
      >
        <div className='md:flex hidden md:items-center md:flex-row flex-col md:gap-10 gap-2'>
          <div className='flex items-center gap-2'>
            <div className='group p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'>
              <MdOutlineMail
                size={15}
                className='text-white group-hover:text-hoverColor transition-colors'
              />
            </div>

            <a href={`mailto:${common.email}`}>{common.email}</a>
          </div>
          <div className='flex items-center gap-2'>
            <div className='group  p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'>
              <HiOutlinePhone
                size={15}
                className='text-white group-hover:text-hoverColor transition-colors'
              />
            </div>
            <a href={`tel:${common.contact}`}>{common.contact}</a>
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <a
            href={common.socialMedia.facebook}
            className='group p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF
              size={15}
              className='text-white group-hover:text-hoverColor transition-colors'
              target='_blank'
              rel='noreferrer'
            />
          </a>

          <a
            href={common.socialMedia.instagram}
            className='group p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram
              size={15}
              className='text-white group-hover:text-hoverColor transition-colors'
            />
          </a>

          <a
            href={common.socialMedia.linkedin}
            className='group p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'
            target='_blank'
            rel='noreferrer'
          >
            <GrLinkedinOption
              size={15}
              className='text-white group-hover:text-hoverColor transition-colors'
            />
          </a>

          <a
            href={common.socialMedia.twitter}
            className='group p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'
            target='_blank'
            rel='noreferrer'
          >
            <RiTwitterXLine
              size={15}
              className='text-white group-hover:text-hoverColor transition-colors'
            />
          </a>

          <a
            href={common.socialMedia.youtube}
            className='group p-2 bg-hoverColor rounded-full shadow-md border-hoverColor border hover:bg-white hover:shadow-lg transition-all cursor-pointer'
            target='_blank'
            rel='noreferrer'
          >
            <RiYoutubeLine
              size={15}
              className='text-white group-hover:text-hoverColor transition-colors'
            />
          </a>
        </div>
      </aside>

      {/* Navbar */}
      <header
        className={`transition-transform duration-300 ${
          hideTopBar ? "-translate-y-[75%]" : "translate-y-0"
        }`}
      >
        <div className='relative flex flex-row justify-between items-center p-4 md:px-16 bg-bgHead shadow-md'>
          <Link
            to='/'
            className='flex flex-row lg:w-[350px] w-72 items-center cursor-pointer'
          >
            <img
              src={logo}
              alt='Logo'
              className='object-contain w-[300px] h-full'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='max-lg:hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
            {navLinks.map((link, index) => (
              <div key={index} className='group relative'>
                {link.subMenuItems ? (
                  <SubMenu
                    title={link.title}
                    subMenuItems={link.subMenuItems}
                  />
                ) : (
                  <Link
                    to={link.path}
                    className={`text-black text-base transition-all duration-300 ease-in-out cursor-pointer group-hover:text-hoverColor ${
                      location.pathname === link.path ? "text-hoverColor" : ""
                    }`}
                  >
                    <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-hoverColor after:transition-all after:duration-300 after:ease-in-out after:transform after:origin-center group-hover:after:w-full group-hover:after:left-0">
                      {link.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Reach Us Button */}
          <div className='max-lg:hidden lg:flex items-center justify-center'>
            <Button title={"Reach us"} onClick={openForm} />
          </div>

          {/* Contact Form */}
          {showForm && <Contact closeForm={closeForm} />}

          {/* Mobile Menu Button */}
          <div className='lg:hidden flex items-center absolute right-5 top-8 z-50'>
            {menu ? (
              <AiOutlineClose
                className='text-brightColor transition duration-700 ease-in-out'
                size={28}
                onClick={handleChange}
              />
            ) : (
              <AiOutlineMenu
                className='text-brightColor transition duration-700 ease-in-out'
                size={28}
                onClick={handleChange}
              />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-gradient-to-r from-brightColor to-[#1a1b26] text-gray-700 left-0 top-[5rem] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-[calc(100vh-4rem)] transition-transform duration-300`}
        >
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.subMenuItems ? (
                <SubMenu title={link.title} subMenuItems={link.subMenuItems} />
              ) : (
                <Link
                  to={link.path}
                  className='relative text-white text-xl transition-all duration-300 ease-in-out cursor-pointer group'
                  onClick={handleChange}
                >
                  <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:transform after:origin-center group-hover:after:w-full group-hover:after:left-0">
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Reach Us Button */}
          <div className='lg:hidden flex justify-center'>
            <Button title={"Reach us"} onClick={openForm} />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

// SubMenu Component
const SubMenu = ({ title, subMenuItems }) => {
  return (
    <article className='relative group flex justify-center'>
      {/* Parent Item */}
      <button className='cursor-pointer text-black flex text-base items-center justify-center hover:text-hoverColor'>
        <span>{title}</span>
        <RiArrowDownSLine className='text-2xl pt-[3px]' />
      </button>

      {/* Submenu */}
      <div className='absolute w-max pr-10 left-1/2 transform -translate-x-1/2 lg:mt-8 mt-2 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg overflow-hidden origin-top'>
        <ul className='py-2'>
          {subMenuItems.map((item, index) => (
            <li
              key={index}
              className={`text-black text-base ease-in-out cursor-pointer hover:text-hoverColor px-4 py-2 transition-all duration-300 relative group`}
            >
              <Link
                to={item.path}
                className="block text- text-base relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:transform after:origin-center group-hover:after:w-full group-hover:after:left-0"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

SubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  subMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Navbar.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  openForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};
