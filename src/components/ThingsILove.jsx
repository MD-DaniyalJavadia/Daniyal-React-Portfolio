import React from "react";

const thingsILoveData = [
  {
    icon: "bi bi-droplet-half",
    title: "UI/UX Design",
    text: "I love crafting visually appealing and intuitive designs using tools like Figma and Canva. From color schemes to typography, I enjoy blending creativity with functionality to enhance user experiences.",
  },
  {
    icon: "bi bi-code-slash",
    title: "Web & Mobile Development",
    text: "Turning ideas into reality through coding is my passion. I enjoy building scalable web apps with React, PHP, and ASP.NET, as well as mobile apps with Dart and Flutter, focusing on clean and efficient solutions.",
  },
  {
    icon: "bi bi-cup-hot",
    title: "Learning & Innovation",
    text: "I’m thrilled to explore new technologies like Angular, Firebase, and emerging tools. Continuous learning fuels my growth and helps me bring innovative ideas to my development and design projects.",
  },
];

const ThingsILove = () => {
  return (
    <section id="things-i-love">
      <div className="container">
        <h6 className="text-center">
          <span className="btn btn-sm theme-button theme-text">Interests</span>
        </h6>
        <h2 className="section-heading text-center">Things I Love</h2>
        <div className="row justify-content-center pt-3 gy-4">
          {thingsILoveData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up">
              <div className="card">
                <div className="circle-container">
                  <div className="circle">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-title">{item.title}</p>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsILove;
