import React from 'react';

function Contact() {
  return (
    <>
      {/* Contact */}
      <section id="contact">
        <div className="container">
          <h6 className="text-center">
            <span className="btn btn-sm theme-button theme-text">What's next!</span>
          </h6>
          <h2 className="section-heading text-center">Get In Touch</h2>
          <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="500">
            <div className="col-lg-8">
              <div className="contact-form">
              <form action="https://formspree.io/f/xjkynvkp" method="POST">
                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          style={{ resize: 'none' }}
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          placeholder="Your message *"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn primary-bg-btn mt-2">
                        Send Message <i className="bi bi-arrow-up-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact-info mt-5 text-center">
               <p><strong>Primary Phone:</strong>
                            <a href="tel:+92 332 3782768">+92 332 3782768</a> |
                            <a href="https://wa.me/923323782768" style={{ paddingLeft: "1px" }} target="_blank" rel="noopener noreferrer">
                                WhatsApp Chat
                            </a>
                        </p>
                <p><strong>Alternate Phone:</strong> <a href="tel:+923202101259">+92 320 2101259</a></p>
                <p><strong>Email:</strong> <a href="mailto:daniyaljavadiaworks@gmail.com">daniyaljavadiaworks@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
