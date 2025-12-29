import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const navItems = [
  { name: "Home", link: "hero" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <header className={isScrolled ? "fixed-top shadow-sm" : ""}>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          {/* Logo */}
          <a href="#hero" className="navbar-brand logo">
            <span>{"<"}</span>
            <span className="logo-name">Daniyal Javadia</span>
            <span>{"/>"}</span>
          </a>

          {/* Desktop Nav */}
          <div className="collapse navbar-collapse d-none d-md-flex">
            <ul className="navbar-nav ms-auto nav-underline">
              {navItems.map((item, i) => (
                <li className="nav-item" key={i}>
                  <a href={`#${item.link}`} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Button */}
          <button
            className="btn border-0 me-2"
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
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Mobile Offcanvas */}
          <div
            className="offcanvas offcanvas-end d-md-none"
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {navItems.map((item, i) => (
                  <li
                    className="nav-item"
                    key={i}
                    data-bs-dismiss="offcanvas"
                  >
                    <a href={`#${item.link}`} className="nav-link">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
