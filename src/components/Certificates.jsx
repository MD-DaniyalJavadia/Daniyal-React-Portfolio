import React from 'react'

function Certificates() {
  return (
    <>

       <section id="timelines">
        <div class="container">
            <h6 class="text-center">
                <span class="btn btn-sm theme-button theme-text">Certifications & Achievements</span>
            </h6>
            <h2 class="section-heading text-center mb-4">Certificates</h2>

            <div class="row justify-content-center">

                {/* Certificate 1 */}
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card certificate-card h-100 clickable-card" data-bs-toggle="modal"
                        data-bs-target="#certificateModal1">
                        <div class="row g-0 align-items-center">
                            <div class="col-4 certificate-img-wrapper">
                                <img src="assets/images/Certificates/Istronix.jpg" class="img-fluid certificate-img"
                                    alt="Microsoft SQL Server Certificate"/>
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">Microsoft SQL Server</h5>
                                    <p class="card-text">
                                        Microsoft SQL Server Certification – Completed from Istronix Solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificate 2 */}
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card certificate-card h-100 clickable-card" data-bs-toggle="modal"
                        data-bs-target="#certificateModal2">
                        <div class="row g-0 align-items-center">
                            <div class="col-4 certificate-img-wrapper">
                                <img src="assets/images/Certificates/tesdom.png" class="img-fluid certificate-img"
                                    alt="Microsoft SQL Server TestDome Certificate"/>
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">Microsoft SQL Server</h5>
                                    <p class="card-text">
                                        Microsoft SQL Server Certification – Completed from TestDome.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificate 3 */}
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card certificate-card h-100 clickable-card" data-bs-toggle="modal"
                        data-bs-target="#certificateModal3">
                        <div class="row g-0 align-items-center">
                            <div class="col-4 certificate-img-wrapper">
                                <img src="assets/images/Certificates/pafla.png" class="img-fluid certificate-img"
                                    alt="Google Soft Skills Program Certificate"/>
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">Google Soft Skills Program</h5>
                                    <p class="card-text">
                                        Google Soft Skills Program – Completed from PAFLA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* Modals for Certificates */}

    {/* Modal 1 */}
    <div class="modal fade" id="certificateModal1" tabindex="-1" aria-labelledby="certificateModal1Label"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="certificateModal1Label">Microsoft SQL Server - Istronix Solutions</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img src="assets/images/Certificates/Istronix.jpg" class="img-fluid"
                        alt="Microsoft SQL Server Certificate"/>
                </div>
            </div>
        </div>
    </div>

    {/* Modal 2 */}
    <div class="modal fade" id="certificateModal2" tabindex="-1" aria-labelledby="certificateModal2Label"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="certificateModal2Label">Microsoft SQL Server - TestDome</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img src="assets/images/Certificates/tesdom.png" class="img-fluid"
                        alt="Microsoft SQL Server TestDome Certificate"/>
                </div>
            </div>
        </div>
    </div>

    {/* Modal 3 */}
    <div class="modal fade" id="certificateModal3" tabindex="-1" aria-labelledby="certificateModal3Label"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="certificateModal3Label">Google Soft Skills Program - PAFLA</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img src="assets/images/Certificates/pafla.png" class="img-fluid"
                        alt="Google Soft Skills Program Certificate"/>
                </div>
            </div>
        </div>
    </div>



    </>
  )
}

export default Certificates