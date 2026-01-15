import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Fresh Shop",
    stack: "ASP.NET Core MVC | SQL Server",
    desc: "An e-commerce platform with product browsing, cart, secure checkout, authentication, and admin panel.",
    image: "assets/images/projects/image2.png",
    link: "https://github.com/MD-Aptech/FreshShoop.git",
    type: "github",
  },
  {
    title: "E-Vaccination Booking",
    stack: "Laravel | MySQL",
    desc: "Online vaccination slot booking system with user registration, login, and booking management.",
    image: "assets/images/projects/E-VaccineMangment.png",
    link: "https://github.com/MD-DaniyalJavadia/E-VaccineMangment",
    type: "github",
  },
  {
    title: "Admin Dashboard",
    stack: "PHP | MySQL",
    desc: "Dashboard to manage users, reports, and activities with full CRUD operations.",
    image: "assets/images/projects/admindashboard.png",
    link: "https://github.com/MD-DaniyalJavadia/Admin-Dashboard-Php",
    type: "github",
  },
  {
    title: "Student Portal",
    stack: "Laravel | MySQL",
    desc: "Student portal for attendance, marks, profiles, and complaints with real-time updates.",
    image: "assets/images/projects/aptechclone.png",
    link: "https://aptech-student-portal.vercel.app/",
    type: "visit",
  },
  {
    title: "Netflix Clone",
    stack: "HTML | CSS",
    desc: "Netflix-inspired responsive layout with header, movie sections, and footer.",
    image: "assets/images/projects/netflixclone.PNG",
    link: "https://netflix-clone-theta-eight-90.vercel.app/",
    type: "visit",
  },
  {
    title: "Portfolio",
    stack: "HTML | CSS | JavaScript",
    desc: "Responsive portfolio showcasing skills and projects with clean UI design.",
    image: "assets/images/projects/portfolio.PNG",
    link: "https://daniyal-portfolio-three.vercel.app/",
    type: "visit",
  },
  {
    title: "Nail Art",
    stack: "HTML | CSS",
    desc: "Responsive gallery-style website displaying nail art designs.",
    image: "assets/images/projects/NailArtEPorject.png",
    link: "https://nail-art-e-project.vercel.app/",
    type: "visit",
  },
  {
    title: "Simple Counter",
    stack: "Angular",
    desc: "Angular counter app with increment, decrement, and reset features.",
    image: "assets/images/projects/image.png",
    link: "https://counter-ebon-psi.vercel.app/",
    type: "visit",
  },
  {
    title: "Online Mobile Recharge",
    stack: "HTML | CSS | JS | .NET Core MVC | SQL",
    desc: "Mobile recharge platform with plan browsing and secure transactions.",
    image: "assets/images/projects/onlinemobilerechaege.PNG",
    type: "coming",
  },
  {
    title: "API with Swagger",
    stack: "ASP.NET Core MVC | SQL Server | Swagger",
    desc: "RESTful API with GET & POST operations documented and tested using Swagger.",
    image: "assets/images/projects/Capture.PNG",
    link: "https://github.com/MD-DaniyalJavadia/WebApi",
    type: "github",
  },
  {
    title: "Student Management API",
    stack: "Node.js | Express.js | MongoDB",
    desc: "Backend API for managing student records with full CRUD functionality.",
    image: "assets/images/projects/nodejs.png",
    link: "https://github.com/MD-DaniyalJavadia/Mongodb_Connect_Nodejs",
    type: "github",
  },
  {
    title: "Green Living Hub",
    stack: "Flutter | Firebase | Dart",
    desc: "Sustainable lifestyle mobile app with carbon footprint calculator and community features.",
    image: "assets/images/projects/flutter.png",
    link: "https://github.com/MD-DaniyalJavadia/GreenLivingHubApp",
    type: "github",
  },
  {
    title: "Flutter Authentication UI",
    stack: "Flutter | Dart",
    desc: "A Flutter-based UI project featuring a Splash Screen along with professionally designed Sign In and Sign Up pages. Focused on clean layouts, responsive design, and smooth screen navigation.",
    image: "assets/images/projects/FlutterAuthentication.png",
    link: "https://github.com/MD-DaniyalJavadia/FlutterApp",
    type: "github",
  },
  
  {
    title: "Guarder Guard Service",
    stack: "HTML | CSS | Bootstrap 5",
    desc: "Static website for security service provider with services and contact information.",
    image: "assets/images/Guarder.png",
    link: "https://guarder-ebon.vercel.app/",
    type: "visit",
  },
  {
    title: "Movie API React App",
    stack: "React | Vite | Movie API",
    desc: "React application fetching movie data with search and dark/light mode toggle.",
    image: "assets/images/projects/MovieApiReact.png",
    link: "https://movie-api-five-beige.vercel.app/",
    type: "visit",
  },
  {
    title: "API Token Generation & Authentication",
    stack: "ASP.NET Core MVC | SQL Server",
    desc: "Secure API with time-sensitive token generation and module-based authentication.",
    image: "assets/images/projects/Aspdotnetcoremvcapi.png",
    type: "coming", // or "private" if you want to distinguish it
  },
  {
    title: "Portfolio",
    stack: "HTML | CSS | JavaScript",
    desc: "Modern responsive portfolio with clean and interactive design.",
    image: "assets/images/projects/daniportfolio.png",
    link: "https://dani-works-portfolio.vercel.app/",
    type: "visit",
  },
  {
    title: "Dynamic DataTable with Load More & Filters",
    stack: "JavaScript | jQuery | DataTables | Bootstrap | C# ASP.NET | SQL Server",
    desc: "DataTable utility with server-side processing, filter badges, multi-level grouping, and Load More functionality.",
    image: "assets/images/projects/ReportFilterGroup.png",
    type: "coming"
  },
  {
    title: "MERN Authentication System",
    stack: "MongoDB | Express | React | Node.js",
    desc: "Complete authentication system with registration, login, logout and JWT.",
    image: "assets/images/projects/Mern.png",
    type: "coming",
  },
  {
    title: "Dynamic Reporting Engine",
    stack: "ASP.NET Core | SQL Server",
   desc: "Flexible reporting API with dynamic stored procedure execution, JSON parameters, server-side pagination & filtering, integrated with DataTables.",
    image: "assets/images/projects/Dynamic Reporting Engine.png",
    type: "coming", 
    tags: ["API Development", "Reporting", "SQL", "DataTables", "Performance Optimization"]
  },
  {
    title: "MERN Fitness Tracker",
    stack: "MongoDB | Express | React | Node.js",
    desc: "Fitness tracking application to monitor workouts and goals.",
    image: "assets/images/projects/mernfitnesstracker.png",
    type: "coming",
  },
  {
    title: "Hexa Shop",
    stack: "MongoDB | Express | React | Node.js",
    desc: "Modern e-commerce clothing store for men, women and kids.",
    image: "assets/images/projects/Hexashop.png",
    type: "progress",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
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
          data-aos-delay="200"
        >
          {projects.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card project-card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="col-7 p-0">
                      {p.link ? (
                        <a
                          href={p.link}
                          className="card-title title"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {p.title}
                        </a>
                      ) : (
                        <span className="card-title title">{p.title}</span>
                      )}
                      <p className="stacks m-0">{p.stack}</p>
                    </div>

                    <div className="col-5 text-end">
                      {p.type === "github" && (
                        <a
                          href={p.link}
                          className="btn btn-sm primary-bg-btn rounded-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source <i className="bi bi-github"></i>
                        </a>
                      )}

                      {p.type === "visit" && (
                        <a
                          href={p.link}
                          className="btn btn-sm primary-bg-btn rounded-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit <i className="bi bi-arrow-up-right-circle-fill"></i>
                        </a>
                      )}

                      {p.type === "coming" && (
                        <span className="badge bg-secondary rounded-5">
                          Coming Soon
                        </span>
                      )}

                      {p.type === "progress" && (
                        <span className="badge bg-warning text-dark rounded-5">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="description-container">
                  <p className="description">{p.desc}</p>
                </div>

                <div className="banner-container">
                  <div className="overlay">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                    )}
                  </div>
                  <img
                    src={p.image}
                    className="card-img-top banner"
                    alt={`${p.title} preview`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;