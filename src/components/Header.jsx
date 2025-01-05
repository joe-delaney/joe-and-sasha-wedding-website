import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/tofu-blue-logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import Heroicons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-light-blue-100">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-40">
            <img alt="Tofu and Blue Logo" src={logo} className="w-full" />
          </div>
          {/* Nav Links for large screens */}
          <div className="hidden md:flex gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/schedule" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
            >
              Schedule
            </NavLink>
            <NavLink 
              to="/our-story" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/faqs" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
            >
              FAQs
            </NavLink>
            <NavLink 
              to="/travel" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
            >
              Travel
            </NavLink>
            <NavLink 
              to="/registry" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
            >
              Registry
            </NavLink>
          </div>
        </div>

        {/* Hamburger Icon (only visible on mobile) */}
        <button 
          className="md:hidden flex items-center justify-center p-2" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="h-8 w-8 text-light-blue-500" />
          ) : (
            <MenuIcon className="h-8 w-8 text-light-blue-500" />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Slides over content */}
      <div 
        className={`fixed inset-0 bg-light-blue-100 z-50 transition-transform transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-center gap-4 pt-20">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={closeMenu} // Close the menu when clicked
          >
            Home
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={closeMenu} // Close the menu when clicked
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/our-story" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={closeMenu} // Close the menu when clicked
          >
            Our Story
          </NavLink>
          <NavLink 
            to="/faqs" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={closeMenu} // Close the menu when clicked
          >
            FAQs
          </NavLink>
          <NavLink 
            to="/travel" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={closeMenu} // Close the menu when clicked
          >
            Travel
          </NavLink>
          <NavLink 
            to="/registry" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={closeMenu} // Close the menu when clicked
          >
            Registry
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;



