import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/tofu-blue-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (flag) => {
    setIsMenuOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    let intervalId;

    if (count < 25) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 25);
    }

    return () => clearInterval(intervalId);
  }, [location, count]);

  return (
    <header className="bg-light-blue-500">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="w-24 h-40">
            <img alt="Tofu and Blue Logo" src={logo} className="w-full" />
        </div>
        <div className="flex items-center gap-6">
          {/* Nav Links for large screens */}
          <div className="hidden md:flex gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/schedule" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
            >
              Schedule
            </NavLink>
            <NavLink 
              to="/our-story" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/faqs" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
            >
              FAQs
            </NavLink>
            <NavLink 
              to="/travel" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
            >
              Travel
            </NavLink>
            <NavLink 
              to="/registry" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
            >
              Registry
            </NavLink>
            <NavLink 
              to="/rsvp" 
              className={({ isActive }) => 
                `text-light-blue-100 font-semibold text-l ${isActive ? 'underline' : ''}`
              }
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
              <rect x="5" y="6" width="20" height="3" rx="1.5" fill="#E8FAFF" />
              <rect x="5" y="13" width="20" height="3" rx="1.5" fill="#E8FAFF" />
              <rect x="5" y="20" width="20" height="3" rx="1.5" fill="#E8FAFF" />
            </svg>
        </button>
      </nav>

      {/* Mobile Menu - Slides over content */}
      <div 
        className={`fixed inset-0 bg-light-blue-500 z-50 transition-transform transform duration-100 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col items-center gap-4 pt-20">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/our-story" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Our Story
          </NavLink>
          <NavLink 
            to="/faqs" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            FAQs
          </NavLink>
          <NavLink 
            to="/travel" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Travel
          </NavLink>
          <NavLink 
            to="/registry" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
            onClick={() => closeMenu("")}
          >
            Registry
          </NavLink>
          <NavLink 
            to="/rsvp" 
            className={({ isActive }) => 
              `text-light-blue-100 font-semibold text-2xl ${isActive ? 'underline' : ''}`
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



