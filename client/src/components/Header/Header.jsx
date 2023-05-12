import { Container } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import '../../style/header.css';

const nav_links = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Foods',
    path: '/foods',
  },
  {
    display: 'About',
    path: '/about',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${darkMode ? 'dark_mode' : ''}`}>
      <Container>
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <h5>Fooddo</h5>
          </div>
          {/* menu */}
          <div className='navigation' ref={menuRef}>
            <div className={`menu d-flex align-items-center gap-5 ${darkMode ? 'dark_mode' : ''}`}>
              {nav_links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={navClass => navClass.isActive ? 'active_menu' : ""}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right icon */}
          <div className='nav_right d-flex align-items-center gap-4'>
            <span className='user'>
              <Link to='/login'><i className="ri-user-line"></i></Link>
            </span>
            <span className='mobile_menu' onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
