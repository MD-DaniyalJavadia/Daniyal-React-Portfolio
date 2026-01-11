import React from "react";

const Hero = () => {
  const handleDownloadCV = () => {
    const fileUrl = "/pdf/DaniyalJavadia.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "DaniyalJavadia.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="hero">
      <div className="container">
        <div className="row about-content">
          <div className="col-lg-7 order-lg-1 hero-content">
            <span className="h3" data-aos="fade-up" data-aos-delay="0">
              Hi, I'm
            </span>
            <h1 className="name" data-aos="fade-up" data-aos-delay="200">
              <span>Daniyal Javadia</span>
            </h1>

            <div className="mt-3 mb-3" data-aos="fade-up" data-aos-delay="400">
              <button type="button" className="btn btn-sm me-2 btn-showcase">
                <i className="bi bi-stars"></i> Frontend Developer
              </button>
              <button type="button" className="btn btn-sm me-2 btn-showcase">
                <i className="bi bi-server"></i> Backend Developer
              </button>
              <button type="button" className="btn btn-sm btn-showcase">
                <i className="bi bi-wordpress"></i> WordPress Developer
              </button>
            </div>

            <p className="mb-3" data-aos="fade-up" data-aos-delay="650">
              I'm a passionate Full Stack Web Developer specializing in creating responsive,
              user-friendly websites and mobile apps. Skilled in modern web technologies,
              I blend creativity and functionality to bring ideas to life.
            </p>

            <div className="social-icons pb-2 pt-2 mb-2">
              <a
                href="https://github.com/MD-DaniyalJavadia/"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
                data-aos="fade-up"
                data-aos-delay="620"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/daniyal-javadia-a8b941379/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
                data-aos="fade-up"
                data-aos-delay="690"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://linktr.ee/daniyaljavadia?utm_source=linktree_profile_share&ltsid=f7eb9fa4-5502-438c-a117-a63834570fb9"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
                data-aos="fade-up"
                data-aos-delay="620"
              >
                <i className="fa-brands fa-linktree"></i>
              </a>
            </div>

            <div className="d-flex call-to-action">
              <a
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="700"
                className="btn me-4 primary-bg-btn"
              >
                <i className="bi bi-envelope"></i> Contact Me
              </a>

            <a
  href="/assets/pdf/DaniyalJavadia.pdf"
  download="DaniyalJavadia.pdf"
  className="btn btn-success"
  data-aos="fade-up"
  data-aos-delay="900"
>
  <i className="bi bi-download"></i> Download CV
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
