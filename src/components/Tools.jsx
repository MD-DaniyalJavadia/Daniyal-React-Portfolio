import React from 'react'

function Tools() {
  return (
    <>
     <section id="tools">
        <div class="container">
            <h6 class="text-center"><span class="btn btn-sm theme-button theme-text">What I use?</span></h6>
            <h2 class="section-heading text-center">Tools</h2>
            <p class="text-center muted-text mt-3 mb-4">Tech stack known? Here are tools that I run:</p>

            <div class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 tools-container"
                data-aos="fade-down" data-aos-delay="200">

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/tools/vscode.svg" alt="VSCode"/>
                        <p class="tool-name">VS Code</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/tools/github.svg" alt="GitHub"/>
                        <p class="tool-name">GitHub</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/tools/git.svg" alt="Git"/>
                        <p class="tool-name">Git</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
                            alt="Visual Studio 2022"/>
                        <p class="tool-name text-center">Visual Studio 2022</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="Postman"/>
                        <p class="tool-name">Postman</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/skills/microsoft-sql-server-logo.svg"
                            alt="SQL Server"/>
                        <p class="tool-name">SQL Server</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                            alt="MySQL"/>
                        <p class="tool-name">MySQL</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg"
                            alt="RStudio"/>
                        <p class="tool-name">RStudio</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/Github-desktop-logo-symbol.svg.png"
                            alt="GitHub Desktop"/>
                        <p class="tool-name text-center">GitHub Desktop</p>
                    </div>
                </div>



                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/tools/Figma.svg" alt="Figma"/>
                        <p class="tool-name">Figma</p>
                    </div>
                </div>

                <div class="col">
                    <div class="tool">
                        <img class="tool-image" src="assets/images/skills/crystalreport.PNG" alt="Crystal Reports"/>
                        <p class="tool-name text-center">Crystal Reports</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
)
}

export default Tools