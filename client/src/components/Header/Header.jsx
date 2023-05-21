import React, { useState, useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../../style/header.css";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Favorite",
    path: "/favorite",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk menangani login
  const handleLogin = () => {
    // Navigasikan pengguna ke halaman Login
    navigate("/login");
  };

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Lakukan logika logout di sini
    // Jika berhasil logout, atur state isLoggedIn menjadi false dan reset username
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Fooddo</h5>
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right icon */}
          <div className="nav_right d-flex align-items-center gap-4 ">
            {isLoggedIn ? (
              <span className="user">
                Signed in as: {username}
              </span>
            ) : (
              <span className="user">
                <Link to="/login" onClick={handleLogin}>
                  Login
                </Link>
              </span>
            )}
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
