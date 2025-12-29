import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme switch effect
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect for fixed header & back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const backToTopBtn = document.getElementById("backToTopButton");
      if (backToTopBtn) {
        backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header id="header" className={isScrolled ? "fixed-top" : ""}>
      <nav id="navbar" className="navbar navbar-expand-md">
        <div className="container">
          {/* Logo */}
          <a href="/" className="navbar-brand logo">
            <span>{"<"}</span>
            <span className="logo-name">Daniyal Javadia</span>
            <span>{"/>"}</span>
          </a>

          {/* Desktop Navbar Links */}
          <div className="collapse navbar-collapse d-none d-md-flex">
            <ul className="navbar-nav ms-auto nav-underline">
              {navItems.map((item, i) => (
                <li className="nav-item" key={i}>
                  <a href={`#${item.toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Offcanvas */}
          <div
            className="offcanvas offcanvas-end d-md-none"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a href="/" className="offcanvas-title navbar-brand logo" id="offcanvasNavbarLabel">
                <span>{"<"}</span>
                <span className="logo-name">Daniyal Javadia</span>
                <span>{"/>"}</span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-dismiss="offcanvas"
                aria-label="Close Navigation Menu"
              >
                <i className="bi bi-x toggle-icon"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline justify-content-end flex-grow-1">
                {navItems.map((item, i) => (
                  <li className="nav-item" key={i} data-bs-dismiss="offcanvas">
                    <a href={`#${item.toLowerCase()}`} className="nav-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Theme Switch */}
          <button
            className="btn border-0"
            id="switchTheme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <i className="bi bi-sun-fill"></i>
            ) : (
              <i className="bi bi-moon-stars-fill"></i>
            )}
          </button>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler border-0 d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle Navigation Menu"
          >
            <i className="bi bi-list toggle-icon"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
