import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-2">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 p-8 max-md:gap-5 items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="flex w-40 items-center cursor-pointer max-md:mx-auto"
        >
          <img src={logo} alt="Logo" className="object-contain w-full h-auto" />
        </Link>
        <p className="text-sm text-gray-700">
          At Binsina Pharma, we specialize in the global export of high-quality pharmaceutical products,
          catering to diverse healthcare needs.
        </p>

        <div className="flex flex-row justify-center gap-2">
          <nav className="flex flex-col items-end gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all text-gray-700 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all text-gray-700 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="media"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all text-gray-700 cursor-pointer"
            >
              Media
            </Link>
          </nav>

          <nav className="flex items-start flex-col gap-2">
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all text-gray-700 cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="media"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all text-gray-700 cursor-pointer"
            >
              Media
            </Link>
            <Link
              to="certifications"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all text-gray-700 cursor-pointer"
            >
              Certifications
            </Link>
          </nav>
        </div>

      </div> */}

      <div className="bg-gray-900 text-gray-500">
        <p className="text-center py-4">
          Developed by
          <a
            href="https://www.mkronix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hoverColor mx-2"
          >
            MKronix
          </a>
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
