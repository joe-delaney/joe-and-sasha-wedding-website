import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/tofu-blue-logo.png';

const Header = () => {
  return (
    <header className="bg-light-blue-100">
      <nav className="container mx-auto flex justify-between">
        <div className="flex gap-6 justify-items-center items-center">
          <div className="w-24 h-40">
            <img alt="Tofu and Blue Logo" src={logo} className="w-full" />
          </div>
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
            to="/photos" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
          >
            Photos
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
            to="/things-to-do" 
            className={({ isActive }) => 
              `text-light-blue-500 font-semibold text-2xl ${isActive ? 'underline' : ''}`
            }
          >
            Things to Do
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
      </nav>
    </header>
  );
};

export default Header;