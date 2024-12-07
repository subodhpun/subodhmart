import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropDownOpen, setIsProductDropDownOpen]= useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleProductDropDown=()=>{
    setIsProductDropDownOpen(!isProductDropDownOpen);
  };

  return (
    <div className="bg-white shadow-lg flex flex-row w-full p-3 mt-1 justify-around items-center h-auto md:space-x-2">
      <div className="flex flex-col items-center sm:flex-row relative">
        {/* Logo */}
        <div className="relative flex flex-row items-center gap-6"> 
          <NavLink to='/'><img
            src="/assets/images/logo1.png"
            alt="no img"
            className="w-full h-20 md:h-14 ml-0 p-0 md:ml-2"
          /></NavLink>
          <NavLink to='/'><h1 className="font-custonFont font-bold text-4xl">Subodh Mart</h1></NavLink>
        </div>

        {/* Hamburger */}
        <div className="md:hidden relative">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            className="h-8 md:h-10 lg:h-12"
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addCart"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  <i className="fas fa-shopping-cart"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  <i className="fas fa-user"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <nav className="w-auto hidden md:block">
        <ul className="flex uppercase items-center space-x-10">
          <li className="font-extrabold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              } 
              end
            >
              Home
            </NavLink>
          </li>
          <li className="flex flex-row items-center gap-2">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              Products
            </NavLink>
            {/* toggle */}
            <div
            onClick={toggleProductDropDown}
            className="relative cursor-pointer"
            >
            {isProductDropDownOpen? <i className={`fas fa-angle-double-up ${isProductDropDownOpen ? "text-customRed" : "text-black"}`}></i>: <i class='fas fa-angle-double-down'></i>}

            {/* dropdown menu */}
              {isProductDropDownOpen &&(
                <div className="absolute top-7 left-0 p-3  z-20 w-56 bg-white">
                <ul className="flex flex-col justify-center bg-blue-50 bg-opacity-20 backdrop-blur-sm font-custonFont text-lg">
                  <NavLink to="/electronics" className={({isActive})=> `${isActive? "text-customRed": "text-black"}`}><li>Electronics</li></NavLink>
                  <NavLink to="/jewelery" className={({isActive})=> `${isActive? "text-customRed": "text-black"}`}><li>Jewelery</li></NavLink>
                  <NavLink to="/men's clothing" className={({isActive})=> `${isActive? "text-customRed": "text-black"}`}><li>Men's Clothing</li></NavLink>
                  <NavLink to="/women's clothing" className={({isActive})=> `${isActive? "text-customRed": "text-black"}`}><li>Women's clothing</li></NavLink>
                </ul>
              </div>
              )}
            </div>

            
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              <i className="fas fa-shopping-cart text-xl"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              <i className="fas fa-user text-xl"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
