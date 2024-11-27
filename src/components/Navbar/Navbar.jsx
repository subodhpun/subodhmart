import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white shadow-lg flex flex-row w-full p-3 mt-1 justify-around items-center h-auto md:space-x-2">
      <div className="flex flex-col items-center sm:flex-row relative">
        {/* Logo */}
        <div>
          <img
            src="public\assets\images\logo.png"
            alt="no img"
            className="h-10 md:h-14 ml-0 p-0 md:ml-2"
          />
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
                  to="/pages"
                  className={({ isActive }) =>
                    `${isActive ? "text-customRed" : "text-black"} font-extrabold`
                  }                   onClick={handleNavClick}
                >
                  Pages
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
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${isActive ? "text-customRed" : "text-black"} font-extrabold`
              }
            >
              Products
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
              to="/addCart"
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
