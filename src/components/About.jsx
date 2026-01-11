import React from 'react';

function About() {
    return (
        <>
            <section id="about">
                <div className="container">
                    <h6 className="text-center">
                        <span className="btn btn-sm theme-button theme-text">But who am I?</span>
                    </h6>
                    <h2 className="section-heading text-center">About Me</h2>

                    <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="200">
                        {/* Profile Image */}
                        <div className="col-lg-5 about-portrait mb-4 mb-lg-0">
                            <img src="assets/images/DaniyalJavadia.JPG" className="img-fluid pic" alt="About Me Portrait" />
                        </div>

                        {/* Bio + Tabs */}
                        <div className="col-lg-7">
                            <p className="bio">
                                Hello! I'm Daniyal Javadia, a passionate Full Stack Web Developer with expertise in HTML, CSS,
                                JavaScript, jQuery, React (with Vite), PHP, Laravel, C#, ASP.NET Core MVC, Node.js, MySQL, SQL,
                                MongoDB, Bootstrap, Git, and UI/UX design. I also have experience in mobile app development
                                using Dart and Flutter, along with basic knowledge of Angular, Firebase, and Crystal Reports.
                                <br />
                                I specialize in building intuitive, scalable web and mobile applications that deliver
                                exceptional user experiences. With a strong foundation in UI/UX design and proficiency in tools
                                like Figma and Canva, I blend creativity with functionality to craft solutions that not only
                                meet but exceed client expectations.
                                <br />
                                Beyond development, I bring office automation expertise to enhance productivity and streamline
                                workflows. Whether you need a full stack developer to bring a complex idea to life, or a
                                front-end/mobility expert to refine your product, I’m here to help turn your vision into
                                reality.
                                <br />
                                If you’d like to collaborate on creating innovative, impactful digital experiences, let’s
                                connect and make it happen.
                            </p>

                            {/* Tabs Navigation */}
                            <ul className="nav nav-tabs mt-4" id="aboutTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab-skills-btn" data-bs-toggle="tab"
                                        data-bs-target="#tab-skills" type="button" role="tab" aria-controls="tab-skills"
                                        aria-selected="true">Skills</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-education-btn" data-bs-toggle="tab"
                                        data-bs-target="#tab-education" type="button" role="tab" aria-controls="tab-education"
                                        aria-selected="false">Education</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab-experience-btn" data-bs-toggle="tab"
                                        data-bs-target="#tab-experience" type="button" role="tab" aria-controls="tab-experience"
                                        aria-selected="false">Experience</button>
                                </li>
                            </ul>

                            {/* Tabs Content */}
                            <div className="tab-content mt-3" id="aboutTabsContent">
                                {/* Skills Tab */}
                                <div className="tab-pane fade show active" id="tab-skills" role="tabpanel"
                                    aria-labelledby="tab-skills-btn">
                                    <h4>Skills</h4>
                                    <ul>
                                        <li><strong>Frontend Development:</strong> Crafting responsive and interactive web
                                            interfaces that elevate user experiences.</li>
                                        <li><strong>Backend Development:</strong> Building robust server-side solutions to
                                            ensure seamless functionality and scalability.</li>
                                        <li><strong>Technologies:</strong> HTML, CSS, JavaScript, jQuery, React (with Vite),
                                            PHP, Laravel, C#, ASP.NET Core MVC, Node.js, MySQL, SQL, MongoDB, Bootstrap, Git,
                                            Dart, Flutter.</li>
                                        <li><strong>UI/UX Design:</strong> Proficient in Figma and Canva, blending creativity
                                            with functionality.</li>
                                        <li><strong>Other:</strong> Basic knowledge of Angular, Firebase, Crystal Reports, and
                                            office automation expertise.</li>
                                    </ul>
                                </div>

                                {/* Education Tab */}
                                <div className="tab-pane fade" id="tab-education" role="tabpanel"
                                    aria-labelledby="tab-education-btn">
                                    <h4>Education</h4>
                                    <ul>
                                        <li>
                                            <strong>2023-2026</strong><br />
                                            ADSE (Software Engineering) Diploma<br />
                                            Aptech Computer Education, Garden, Karachi (In-Progress)
                                        </li>
                                        <li>
                                            <strong>2023</strong><br />
                                            Intermediate in Commerce<br />
                                            Government College of Commerce & Economics, Karachi
                                        </li>
                                        <li>
                                            <strong>2021</strong><br />
                                            Matriculation in Computer Science<br />
                                            The Smart School, Garden West Campus, Karachi
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Tab */}
                                <div className="tab-pane fade" id="tab-experience" role="tabpanel"
                                    aria-labelledby="tab-experience-btn">
                                    <h4>Experience</h4>
                                    <ul>
                                        <li>
                                            <strong>.NET Core Developer</strong><br />
                                            TechnoCom Development<br />
                                            <em>October 2024 - Present</em><br />
                                            Currently working as a .NET Developer, contributing to the enhancement and
                                            maintenance of cloud-based software applications. Collaborating closely with senior
                                            developers to implement updates and optimize functionality and performance. Working
                                            with emerging technologies to ensure applications remain innovative and up-to-date.
                                            Actively involved in new projects, helping bring fresh ideas to life while ensuring
                                            high standards of quality and reliability.
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
