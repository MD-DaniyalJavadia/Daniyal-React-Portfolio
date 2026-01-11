import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [active, setActive] = useState("hero");

  // Apply theme
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Update active nav item on scroll
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header">
      <nav id="navbar" className="navbar navbar-expand-md">
        <div className="container">
          {/* Logo */}
          <a href="/" className="navbar-brand logo">
            <span>{"<"}</span>
            <span className="logo-name">Daniyal Javadia</span>
            <span>{"/>"}</span>
          </a>

          {/* Offcanvas for mobile */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarMenu"
          >
            <div className="offcanvas-header">
              <a
                href="/"
                className="offcanvas-title navbar-brand logo"
                id="offcanvasNavbarMenu"
                data-aos="fade-down"
                data-aos-delay="600"
              >
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
                {sections.map(({ id, label }) => (
                  <li
                    key={id}
                    className="nav-item"
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-bs-dismiss="offcanvas"
                  >
                    <a
                      href={`#${id}`}
                      className={`nav-link ${active === id ? "active" : ""}`}
                      aria-current={active === id ? "page" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Theme toggle */}
          <button
            className="btn border-0"
            id="switchTheme"
            data-aos="fade-down"
            data-aos-delay="600"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <i
              className={`bi ${
                theme === "dark"
                  ? "bi-brightness-high-fill"
                  : "bi-moon-fill"
              }`}
            ></i>
          </button>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle Navigation Menu"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <i className="bi bi-list toggle-icon"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
