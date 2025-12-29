import React from 'react'

function Projects() {
  return (
    <>
        <section id="projects">
  <div className="container">
    <h6 className="text-center">
      <span className="btn btn-sm theme-button theme-text">
        What I've done?
      </span>
    </h6>
    <h2 className="section-heading text-center">Projects</h2>
    <div
      className="row justify-content-center mt-4 gy-4"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      {/* FreshShop */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://github.com/MD-Aptech/FreshShoop.git"
                  className="card-title title"
                  target="_blank"
                >
                  FreshShop
                </a>
                <p className="stacks m-0">ASP.NET Core MVC | SQL Server</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://github.com/MD-Aptech/FreshShoop.git"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Source Code <i className="bi bi-github" />
                </a>
                <a href="assets/images/Certificates/Istronix.jpg" />
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              An e-commerce platform with product browsing, cart, secure
              checkout, search, authentication, and admin panel for inventory
              management.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://github.com/MD-Aptech/FreshShoop.git"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/image2.png"
              className="card-img-top banner"
              alt="FreshShop Banner"
            />
          </div>
        </div>
      </div>
      {/* E-Vaccination Booking System */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://github.com/MD-DaniyalJavadia/E-VaccineMangment"
                  className="card-title title"
                  target="_blank"
                >
                  E-Vaccination Booking
                </a>
                <p className="stacks m-0">Laravel | MySQL</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://github.com/MD-DaniyalJavadia/E-VaccineMangment"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Source Code <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Online vaccination slot booking system with user registration,
              login, and booking management features built with Laravel.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://github.com/MD-DaniyalJavadia/E-VaccineMangment"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/E-VaccineMangment.png"
              className="card-img-top banner"
              alt="E-Vaccination Banner"
            />
          </div>
        </div>
      </div>
      {/* Admin Dashboard */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://github.com/MD-DaniyalJavadia/Admin-Dashboard-Php"
                  className="card-title title"
                  target="_blank"
                >
                  Admin Dashboard
                </a>
                <p className="stacks m-0">PHP | MySQL</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://github.com/MD-DaniyalJavadia/Admin-Dashboard-Php"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Source Code <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Dashboard to manage users, reports, and activities with full CRUD
              operations and secure backend using PHP &amp; MySQL.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/admindashboard.png"
              className="card-img-top banner"
              alt="Admin Dashboard Banner"
            />
            {/* Add Vimeo video iframe here */}
            <iframe
              src="https://player.vimeo.com/video/1149323552?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="admin dashboard php"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Student Portal Clone */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://aptech-student-portal.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Student Portal
                </a>
                <p className="stacks m-0">Laravel | MySQL</p>
              </div>
              <div className="col-3">
                <a
                  href="https://aptech-student-portal.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A Laravel-based Student Portal for managing attendance, marks,
              profiles, and complaints with real-time updates.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/aptechclone.png"
              className="banner"
              alt="Student Portal"
            />
            <iframe
              src="https://player.vimeo.com/video/1146309292?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Student Portal"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Netflix Clone */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://netflix-clone-theta-eight-90.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Netflix Clone
                </a>
                <p className="stacks m-0">HTML | CSS</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://netflix-clone-theta-eight-90.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A Netflix-inspired responsive layout with header, movie sections,
              and footer — fully customizable for any project.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://netflix-clone-theta-eight-90.vercel.app/"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/netflixclone.PNG"
              className="card-img-top banner"
              alt="Netflix Clone Banner"
            />
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://daniyal-portfolio-three.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Portfolio
                </a>
                <p className="stacks m-0">HTML | CSS | JavaScript</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://daniyal-portfolio-three.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A responsive portfolio showcasing skills and projects with clean,
              interactive UI design.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://daniyal-portfolio-three.vercel.app/"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/portfolio.PNG"
              className="card-img-top banner"
              alt="Portfolio Banner"
            />
          </div>
        </div>
      </div>
      {/* Nail Art */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://nail-art-e-project.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Nail Art
                </a>
                <p className="stacks m-0">HTML | CSS</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://nail-art-e-project.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
            A responsive gallery-style website designed to showcase a variety of nail art designs in an attractive and organized layout. The website is optimized for all devices, ensuring smooth performance and a visually appealing user experience across mobile, tablet, and desktop screens.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/NailArtEPorject.png"
              className="banner"
              alt="Nail Art"
            />
            <iframe
              src="https://player.vimeo.com/video/1146310054?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Nail-Art"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Simple Counter */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://counter-ebon-psi.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Simple Counter
                </a>
                <p className="stacks m-0">Angular</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://counter-ebon-psi.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
             A dynamic counter application built with Angular, featuring increment, decrement, and reset functionalities. The app demonstrates two-way data binding for real-time updates and interactive user experience, making it a simple yet effective example of Angular's core features and component-based architecture.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/image.png"
              className="banner"
              alt="Simple Counter"
            />
            <iframe
              src="https://player.vimeo.com/video/1146310123?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Simple Counter"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Online Mobile Recharge */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a href="/" className="card-title title" target="_blank">
                  Online Mobile Recharge
                </a>
                <p className="stacks m-0">
                  HTML | CSS | JavaScript | .NET Core MVC | SQL
                </p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="#"
                  className="btn btn-sm btn-secondary rounded-5 disabled"
                  target="_blank"
                >
                  Coming Soon <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Mobile recharge platform with plan browsing and secure
              transactions, including an admin dashboard for plan and
              transaction management.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a href="/" className="btn" target="_blank">
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/onlinemobilerechaege.PNG"
              className="card-img-top banner"
              alt="Online Mobile Recharge Banner"
            />
          </div>
        </div>
      </div>
      {/* API with ASP.NET Core MVC and Swagger */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://github.com/MD-DaniyalJavadia/WebApi"
                  className="card-title title"
                  target="_blank"
                >
                  API with Swagger
                </a>
                <p className="stacks m-0">
                  ASP.NET Core MVC | SQL Server | Swagger
                </p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://github.com/MD-DaniyalJavadia/WebApi"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Source Code <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              RESTful API with GET &amp; POST operations connected to SQL
              Server, documented and tested using Swagger.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/Capture.PNG"
              className="banner"
              alt="API with Swagger"
            />
            <iframe
              src="https://player.vimeo.com/video/1146309894?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="API with Swagger"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Student Management API */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://github.com/MD-DaniyalJavadia/Mongodb_Connect_Nodejs"
                  className="card-title title"
                  target="_blank"
                >
                  Student Management API
                </a>
                <p className="stacks m-0">Node.js | Express.js | MongoDB</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://github.com/MD-DaniyalJavadia/Mongodb_Connect_Nodejs"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Source Code <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Backend API for managing student records with full CRUD
              functionality, tested using Postman.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/nodejs.png"
              className="banner"
              alt="Student Management API"
            />
            <iframe
              src="https://player.vimeo.com/video/1146309810?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Student Management API"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Green Living Hub */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://github.com/MD-DaniyalJavadia/GreenLivingHubApp"
                  className="card-title title"
                  target="_blank"
                >
                  Green Living Hub
                </a>
                <p className="stacks m-0">Flutter | Firebase | Dart</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://github.com/MD-DaniyalJavadia/GreenLivingHubApp"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Source Code <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Sustainable lifestyle mobile app with carbon footprint calculator,
              green events, community features, and Firebase authentication.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://github.com/MD-DaniyalJavadia/GreenLivingHubApp"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/flutter.png"
              className="card-img-top banner"
              alt="Green Living Hub Banner"
            />
          </div>
        </div>
      </div>
      {/* Guarder */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://guarder-ebon.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Gurder Guard Service
                </a>
                <p className="stacks m-0">HTML | CSS | Bootstrap 5</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://guarder-ebon.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A responsive static website for a security service provider, built using HTML, CSS, and Bootstrap 5. It showcases security services, company information, and includes a user-friendly contact form, with a modern and mobile-first design.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://guarder-ebon.vercel.app/"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/Guarder.png"
              className="card-img-top banner"
              alt="Gurder Guard Service Banner"
            />
          </div>
        </div>
      </div>
      {/* React Vite Movie API */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="http://movie-api-five-beige.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  Movie API React App
                </a>
                <p className="stacks m-0">React | Vite | Movie API</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="http://movie-api-five-beige.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
           A fast React app built with Vite that fetches movie data from a Movie API. It includes a movie search feature along with dark and light mode toggles for an improved user experience. The app is fully responsive and easy to use.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/MovieApiReact.png"
              className="banner"
              alt="Movie API React App"
            />
            <iframe
              src="https://player.vimeo.com/video/1146310000?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="Movie Api"
            ></iframe>
          </div>
        </div>
      </div>
      {/* API Token Generation and Authentication */}
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a href="#" className="card-title title" target="_blank">
                  API Token Generation and Authentication
                </a>
                <p className="stacks m-0">
                  ASP.NET Core MVC | SQL Server | API Security
                </p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="#"
                  className="btn btn-sm danger-bg-btn rounded-5 disabled rounded-5"
                  target="_blank"
                >
                  Private <i className="bi bi-lock-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A secure API built using ASP.NET Core MVC for token-based
              authentication. The system generates time-sensitive tokens,
              specific to selected modules, and stores them in a SQL Server
              database for better security.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/Aspdotnetcoremvcapi.png"
              className="banner"
              alt="API Token Generation and Authentication"
            />
            <iframe
              src="https://player.vimeo.com/video/1146309469?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="API Token Generation"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a
                  href="https://project-show-case-lemon.vercel.app/"
                  className="card-title title"
                  target="_blank"
                >
                  ProjectShowcase Pro
                </a>
                <p className="stacks m-0">HTML | CSS | JavaScript</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://project-show-case-lemon.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A modern, interactive portfolio built with glassmorphism design,
              dark/light theme toggle, project filtering, video modals, and
              responsive layout. Showcases all my projects with thumbnails, tech
              stacks, GitHub links, live demos, and embedded video
              demonstrations.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://project-show-case-lemon.vercel.app/"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/ProjectShowCase.png"
              className="card-img-top banner"
              alt="ProjectShowcase Pro - Modern Portfolio"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a href="#" className="card-title title" target="_blank">
                  Portfolio
                </a>
                <p className="stacks m-0">HTML | CSS | JavaScript</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://dani-works-portfolio.vercel.app/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
            A sleek, responsive portfolio that showcases your skills and projects with a clean, interactive design. It adapts seamlessly across devices, offering a smooth user experience. The UI is intuitive, ensuring easy navigation and highlighting your work in a professional, engaging way.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a
                href="https://dani-works-portfolio.vercel.app/"
                className="btn"
                target="_blank"
              >
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/daniportfolio.png"
              className="card-img-top banner"
              alt="Portfolio Banner"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a href="#" className="card-title title" target="_blank">
                  MERN Authentication System
                </a>
                <p className="stacks m-0">
                  MongoDB | Express | React | Node.js
                </p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="#"
                  className="btn btn-sm btn-secondary rounded-5 disabled"
                  target="_blank"
                >
                  Coming Soon <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A MERN stack based authentication system featuring user
              registration, login, and logout. JWT tokens are generated on login
              for secure authentication, with complete frontend and backend
              integration.
            </p>
          </div>
          <div className="banner-container video-card">
            <img
              src="assets/images/projects/Mern.png"
              className="card-img-top banner"
              alt="MERN Authentication System Banner"
            />
            <iframe
              src="https://player.vimeo.com/video/1149330653?autoplay=1&muted=1&loop=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              title="API Token Generation"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a href="#" className="card-title title" target="_blank">
                  MERN Fitness Tracker
                </a>
                <p className="stacks m-0">
                  MongoDB | Express | React | Node.js
                </p>
              </div>
              <div className="col-3 align-middle text-end">
                <a
                  href="#"
                  className="btn btn-sm btn-secondary rounded-5 disabled"
                  target="_blank"
                >
                  Coming Soon <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              A fitness tracking web application built with the MERN stack.
              Track your cardio, monitor workouts, and manage your fitness goals
              efficiently.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a href="#" className="btn" target="_blank">
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/mernfitnesstracker.png"
              className="card-img-top banner"
              alt="MERN Fitness Tracker Banner"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-7 p-0">
                <a href="#" className="card-title title" target="_blank">
                  Hexa Shop
                </a>
                <p className="stacks m-0">
                  MongoDB | Express | React | Node.js
                </p>
              </div>
              <div className="col-3 align-middle text-end">
                <span className="badge bg-warning text-dark">In Progress</span>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Hexa Shop offers trendy clothing for men, women, and kids. Browse
              our collection online for stylish outfits, accessories, and more.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a href="#" className="btn" target="_blank">
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="assets/images/projects/Hexashop.png"
              className="card-img-top banner"
              alt="MERN Fitness Tracker Banner"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Projects