import React, { useEffect, useRef } from "react";

const ProjectShowcase = () => {
    const cardRef = useRef(null);

    useEffect(() => {
        // Set current year (if you still need it somewhere)
        const yearEl = document.getElementById("year");
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
        };

        const handleMouseLeave = () => {
            card.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup (important in React)
        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section
            id="project-showcase"
            className="py-5"
            style={{ background: "transparent", borderRadius: "34px" }}
        >
            <div className="container">
                {/* Small Heading */}
                <h6 className="text-center">
                    <span className="btn btn-sm theme-button theme-text">
                        My Work
                    </span>
                </h6>

                {/* Main Heading */}
                <div className="container text-center my-5">
                    <h2 className="text-center mb-1 section-heading">
                        <span className="section-heading position-relative fw-extrabold z-1">
                            Featured Projects
                            <img
                                src="assets/images/section-title-icon.png"
                                alt="project showcase"
                                className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
                            />
                        </span>{" "}
                        Crafted with Passion
                    </h2>
                </div>

                {/* Showcase Card */}
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">           <div
                        ref={cardRef}
                        id="projectTiltCard"
                        className="card shadow-lg border-0 overflow-hidden h-100 bg-transparent sneat-card-hover"
                    >
                        <img
                            src="assets/images/projects/ProjectShowCase.png"
                            className="card-img-top sneat-card-image"
                            alt="Project Showcase"
                        />

                        <div className="text-center p-4 p-sm-5">
                            <h3 className="card-title mb-3">
                                Project Showcase
                            </h3>

                            <p className="stacks text-muted mb-3">
                                HTML | CSS | JavaScript
                            </p>

                            <p className="text-muted lead">
                                A modern, interactive portfolio built with glassmorphism design, dark/light theme toggle, project filtering, video modals, and a responsive layout.
                                Showcases all my projects with thumbnails, tech stacks, GitHub links, live demos, and embedded video demonstrations.


                            </p>

                            <a
                                href="https://project-show-case-lemon.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm primary-bg-btn rounded-5"
                            >
                                Visit{" "}
                                <i className="bi bi-arrow-up-right-circle-fill"></i>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
