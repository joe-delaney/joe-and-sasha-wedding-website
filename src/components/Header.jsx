import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/tofu-blue-logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  const removeRSVPForm = () => {
    const form = document.getElementById("widget-oursvp")
    if(form) form.classList.add("hidden")
  }

  const addRSVPForm = () => {
    const form = document.getElementById("widget-oursvp")
    if(form) form.classList.remove("hidden")
  }

  const toggleMenu = () => {
    if(!isMenuOpen) {
      removeRSVPForm()
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (flag) => {
    setIsMenuOpen(false);
    if(flag === "RSVP") {
      addRSVPForm()
    }
  };

  const location = useLocation();

  useEffect(() => {
    let intervalId;

    if (count < 25) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        if (location.pathname !== '/rsvp') {
          removeRSVPForm()
        }
      }, 25);
    }

    return () => clearInterval(intervalId);
  }, [location, count]);

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
              onClick={removeRSVPForm}
            >
              Home
            </NavLink>
            <NavLink 
              to="/schedule" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
              onClick={removeRSVPForm}
            >
              Schedule
            </NavLink>
            <NavLink 
              to="/our-story" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
              onClick={removeRSVPForm}
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/faqs" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
              onClick={removeRSVPForm}
            >
              FAQs
            </NavLink>
            <NavLink 
              to="/travel" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
              onClick={removeRSVPForm}
            >
              Travel
            </NavLink>
            <NavLink 
              to="/registry" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
              onClick={removeRSVPForm}
            >
              Registry
            </NavLink>
            <NavLink 
              to="/rsvp" 
              className={({ isActive }) => 
                `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
              }
              onClick={addRSVPForm}
            >
              RSVP
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
            onClick={() => closeMenu("")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/our-story" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Our Story
          </NavLink>
          <NavLink 
            to="/faqs" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            FAQs
          </NavLink>
          <NavLink 
            to="/travel" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Travel
          </NavLink>
          <NavLink 
            to="/registry" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Registry
          </NavLink>
          <NavLink 
            to="/rsvp" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("RSVP")}
          >
            RSVP
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;



