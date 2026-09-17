import profilePhoto from "./assets/profile-photo.jpeg";

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          FA<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-status">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-intro">Hello, I'm</p>

            <h1>
              Fauzan Alvin
              <br />
              <span>Mubarok.</span>
            </h1>

            <h2>
              IT Programmer <span>/</span> Web Developer
            </h2>

            <p className="hero-description">
              Lulusan S1 Informatika Universitas Siliwangi dengan pengalaman
              dalam pengembangan aplikasi web, analisis kebutuhan sistem,
              dokumentasi, serta keamanan informasi.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                View My Projects
                <span>↗</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>3.57</strong>
                <span>GPA</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>Graduate</span>
              </div>

              <div>
                <strong>3+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="image-decoration"></div>

            <div className="hero-image">
              <img src={profilePhoto} alt="Fauzan Alvin Mubarok" />

              <div className="image-caption">
                <div>
                  <strong>FAUZAN ALVIN MUBAROK</strong>
                  <span>IT PROGRAMMER · WEB DEVELOPER</span>
                </div>

                <span className="caption-number">01</span>
              </div>
            </div>

            <div className="availability-card">
              <span className="availability-dot"></span>

              <div>
                <strong>Available for work</strong>
                <span>Software · Web · IT</span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="section-number">
            <span>02</span>
            <div></div>
          </div>

          <div className="about-grid">
            <div className="section-heading">
              <p>ABOUT ME</p>

              <h2>
                Turning ideas into
                <br />
                <span>digital solutions.</span>
              </h2>
            </div>

            <div className="about-content">
              <p className="about-highlight">
                Saya adalah lulusan S1 Informatika Universitas Siliwangi yang
                memiliki ketertarikan pada pengembangan web, software
                development, dan keamanan informasi.
              </p>

              <p>
                Saya memiliki pengalaman dalam mengembangkan aplikasi berbasis
                web, menganalisis kebutuhan sistem, membuat dokumentasi, serta
                melakukan penelitian terkait Smart QR Code. Saya juga memiliki
                pengalaman dalam bidang cybersecurity dan organisasi.
              </p>

              <p>
                Saya senang mempelajari teknologi baru, menyelesaikan
                permasalahan secara terstruktur, serta berkolaborasi dalam tim
                untuk menghasilkan solusi yang bermanfaat.
              </p>

              <div className="about-info">
                <div>
                  <span>EDUCATION</span>
                  <strong>S1 Informatika</strong>
                  <p>Universitas Siliwangi</p>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Web Development</strong>
                  <p>Software & Information Security</p>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>Indonesia</strong>
                  <p>Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-number light">
            <span>03</span>
            <div></div>
          </div>

          <div className="skills-header">
            <div>
              <p className="section-label">TECHNICAL SKILLS</p>

              <h2>
                Technologies &amp;
                <br />
                <span>capabilities.</span>
              </h2>
            </div>

            <p className="skills-description">
              Teknologi dan kemampuan yang saya gunakan dalam pengembangan
              sistem, penelitian, dan analisis keamanan informasi.
            </p>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-number">01</span>

              <div className="skill-icon">&lt;/&gt;</div>

              <h3>Web Development</h3>

              <p>
                Pengembangan aplikasi dan antarmuka web yang responsif serta
                terstruktur.
              </p>

              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-number">02</span>

              <div className="skill-icon">{"{ }"}</div>

              <h3>Programming</h3>

              <p>
                Pemrograman untuk pengembangan aplikasi, otomatisasi, serta
                penyelesaian permasalahan.
              </p>

              <div className="skill-tags">
                <span>JavaScript</span>
                <span>Python</span>
                <span>Node.js</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-number">03</span>

              <div className="skill-icon">⌁</div>

              <h3>Cyber Security</h3>

              <p>
                Pemahaman keamanan informasi, threat intelligence, dan analisis
                keamanan sistem.
              </p>

              <div className="skill-tags">
                <span>Security Analysis</span>
                <span>Threat Intelligence</span>
                <span>Cryptography</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-number">04</span>

              <div className="skill-icon">↗</div>

              <h3>Development Tools</h3>

              <p>
                Tools yang mendukung proses pengembangan, version control, dan
                deployment aplikasi.
              </p>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Vite</span>
              </div>
              <section className="experience-section" id="experience">
                <div className="section-number">
                  <span>04</span>
                  <div></div>
                </div>

                <div className="experience-header">
                  <div>
                    <p className="section-label">EXPERIENCE</p>

                    <h2>
                      Experience &
                      <br />
                      <span>professional journey.</span>
                    </h2>
                  </div>

                  <p>
                    Pengalaman dalam pengembangan sistem, penelitian, keamanan
                    informasi, serta kolaborasi dalam lingkungan profesional dan
                    akademik.
                  </p>
                </div>

                <div className="experience-list">
                  <article className="experience-item">
                    <div className="experience-date">
                      <span>MAR 2026</span>
                      <span>APR 2026</span>
                    </div>

                    <div className="experience-content">
                      <span className="experience-type">RESEARCH</span>

                      <h3>Asisten Penelitian Dosen</h3>

                      <h4>Universitas Siliwangi</h4>

                      <p>
                        Terlibat dalam penelitian Smart QR Code berbasis web
                        dengan fokus pada pengembangan sistem, implementasi
                        fitur, pengujian, serta dokumentasi penelitian.
                      </p>

                      <div className="experience-tags">
                        <span>Web Development</span>
                        <span>Research</span>
                        <span>QR Code</span>
                        <span>Documentation</span>
                      </div>
                    </div>

                    <span className="experience-index">01</span>
                  </article>

                  <article className="experience-item">
                    <div className="experience-date">
                      <span>JAN 2026</span>
                      <span>MAR 2026</span>
                    </div>

                    <div className="experience-content">
                      <span className="experience-type">CYBER SECURITY</span>

                      <h3>Cyber Security Analyst</h3>

                      <h4>NOOSC</h4>

                      <p>
                        Melakukan analisis terkait keamanan informasi dan threat
                        intelligence serta mempelajari identifikasi potensi
                        ancaman dan risiko keamanan pada sistem digital.
                      </p>

                      <div className="experience-tags">
                        <span>Security Analysis</span>
                        <span>Threat Intelligence</span>
                        <span>Cyber Security</span>
                      </div>
                    </div>

                    <span className="experience-index">02</span>
                  </article>

                  <article className="experience-item">
                    <div className="experience-date">
                      <span>JUN 2025</span>
                      <span>AUG 2025</span>
                    </div>

                    <div className="experience-content">
                      <span className="experience-type">INTERNSHIP</span>

                      <h3>Kerja Praktik — Web Developer</h3>

                      <h4>ATR/BPN Kabupaten Pangandaran</h4>

                      <p>
                        Mengembangkan sistem pengarsipan Buku Tanah berbasis web
                        untuk membantu proses pengelolaan dan pencarian data
                        menjadi lebih terstruktur dan efisien.
                      </p>

                      <div className="experience-tags">
                        <span>Web Development</span>
                        <span>System Analysis</span>
                        <span>Database</span>
                        <span>Documentation</span>
                      </div>
                    </div>

                    <span className="experience-index">03</span>
                  </article>
                </div>
              </section>

              <section className="projects-section" id="projects">
                <div className="section-number light">
                  <span>05</span>
                  <div></div>
                </div>

                <div className="projects-header">
                  <div>
                    <p className="section-label">SELECTED PROJECTS</p>

                    <h2>
                      Things I've
                      <br />
                      <span>built & explored.</span>
                    </h2>
                  </div>

                  <p>
                    Beberapa project yang saya kerjakan dalam kegiatan akademik,
                    penelitian, dan pengembangan aplikasi web.
                  </p>
                </div>

                <div className="projects-list">
                  <article className="project-card">
                    <div className="project-top">
                      <span className="project-number">01</span>

                      <span className="project-category">
                        WEB APPLICATION · INTERNSHIP
                      </span>
                    </div>

                    <div className="project-body">
                      <div className="project-info">
                        <h3>
                          Sistem Pengarsipan
                          <br />
                          Buku Tanah
                        </h3>

                        <p>
                          Sistem berbasis web yang dikembangkan saat kerja
                          praktik di ATR/BPN Kabupaten Pangandaran untuk
                          membantu pengelolaan, pengarsipan, dan pencarian data
                          Buku Tanah.
                        </p>

                        <div className="project-tags">
                          <span>Web Development</span>
                          <span>Database</span>
                          <span>System Analysis</span>
                        </div>
                      </div>

                      <div className="project-actions">
                        <a
                          href="https://arsy-alpha.vercel.app/login"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LIVE PROJECT
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="project-card">
                    <div className="project-top">
                      <span className="project-number">02</span>

                      <span className="project-category">
                        WEB APPLICATION · RESEARCH
                      </span>
                    </div>

                    <div className="project-body">
                      <div className="project-info">
                        <h3>
                          Smart Secure
                          <br />
                          QR Code
                        </h3>

                        <p>
                          Aplikasi Smart QR Code berbasis web yang dikembangkan
                          dalam penelitian bersama dosen dengan fokus pada
                          keamanan dan pengelolaan informasi melalui QR Code.
                        </p>

                        <div className="project-tags">
                          <span>QR Code</span>
                          <span>Web Development</span>
                          <span>Information Security</span>
                          <span>Research</span>
                        </div>
                      </div>

                      <div className="project-actions">
                        <a
                          href="https://smart-secure-qrcode.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LIVE PROJECT
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="project-card project-card-coming">
                    <div className="project-top">
                      <span className="project-number">03</span>

                      <span className="project-category">CYBER SECURITY</span>
                    </div>

                    <div className="project-body">
                      <div className="project-info">
                        <h3>
                          Cyber Security
                          <br />
                          Analysis
                        </h3>

                        <p>
                          Kumpulan eksplorasi dan analisis terkait keamanan
                          informasi, threat intelligence, serta pemahaman
                          terhadap berbagai risiko keamanan pada sistem digital.
                        </p>

                        <div className="project-tags">
                          <span>Cyber Security</span>
                          <span>Threat Intelligence</span>
                          <span>Security Analysis</span>
                        </div>
                      </div>

                      <div className="project-actions">
                        <span className="coming-soon">DOCUMENTATION</span>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            </article>
          </div>
        </section>
        {/* =========================
    EDUCATION & CREDENTIALS
========================== */}
        <section className="credentials-section" id="education">
          <div className="section-number">
            <span>06</span>
            <div></div>
          </div>

          <div className="credentials-header">
            <div>
              <p className="section-label">EDUCATION & CREDENTIALS</p>

              <h2>
                Academic background &
                <br />
                <span>professional growth.</span>
              </h2>
            </div>

            <p>
              Pendidikan, sertifikasi, dan pengalaman kepemimpinan yang
              mendukung perjalanan saya di bidang teknologi informasi.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="education-card">
            <div className="education-year">
              <strong>2022</strong>
              <span>—</span>
              <strong>2026</strong>
            </div>

            <div className="education-main">
              <span className="education-label">BACHELOR DEGREE</span>

              <h3>Universitas Siliwangi</h3>

              <h4>S1 Informatika</h4>

              <p>
                Menempuh pendidikan Informatika dengan fokus pada pengembangan
                perangkat lunak, teknologi web, sistem informasi, serta keamanan
                informasi.
              </p>
            </div>

            <div className="education-meta">
              <div>
                <span>GPA</span>
                <strong>3.57 / 4.00</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Tasikmalaya, Indonesia</strong>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="certification-wrapper">
            <div className="subsection-title">
              <span>01</span>

              <div>
                <p>CERTIFICATIONS</p>
                <h3>Professional Certifications</h3>
              </div>
            </div>

            <div className="certification-grid">
              <article className="certification-card">
                <div className="certification-code">CCEP</div>

                <div>
                  <h4>Cybersecurity Educator Professional</h4>

                  <p>Red Team Leaders</p>

                  <span>Jan 2026</span>
                </div>
              </article>

              <article className="certification-card">
                <div className="certification-code">CTIGA</div>

                <div>
                  <h4>
                    Certified Threat Intelligence &amp;
                    <br />
                    Governance Analyst
                  </h4>

                  <p>Red Team Leaders</p>

                  <span>Jan 2026</span>
                </div>
              </article>

              <article className="certification-card">
                <div className="certification-code">GCSB</div>

                <div>
                  <h4>Google Cloud Skills Boost Participants</h4>

                  <p>Google Cloud Skills Boost</p>

                  <span>Dec 2024 — Dec 2028</span>
                </div>
              </article>
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="leadership-wrapper">
            <div className="subsection-title">
              <span>02</span>

              <div>
                <p>LEADERSHIP</p>
                <h3>Organization & Leadership</h3>
              </div>
            </div>

            <article className="leadership-card">
              <div className="leadership-year">2025</div>

              <div className="leadership-content">
                <span>ACHIEVEMENT &amp; LEADERSHIP</span>

                <h3>Ketua Himpunan Mahasiswa Informatika</h3>

                <h4>Universitas Siliwangi</h4>

                <p>
                  Memimpin kegiatan organisasi tingkat jurusan dan
                  mengoordinasikan anggota dalam perencanaan serta pelaksanaan
                  berbagai program kerja. Pengalaman ini memperkuat kemampuan
                  komunikasi, koordinasi tim, kepemimpinan, dan problem solving.
                </p>
              </div>

              <div className="leadership-mark">LEAD</div>
            </article>
          </div>
        </section>

        {/* =========================
    CONTACT
========================== */}
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="section-number light contact-number">
              <span>07</span>
              <div></div>
            </div>

            <div className="contact-grid">
              <div className="contact-heading">
                <p>LET'S WORK TOGETHER</p>

                <h2>
                  Let's build
                  <br />
                  something <span>great.</span>
                </h2>
              </div>

              <div className="contact-content">
                <p>
                  Saya terbuka untuk kesempatan sebagai IT Programmer, Web
                  Developer, Software Developer, maupun posisi lain di bidang
                  teknologi informasi yang sesuai dengan pengalaman dan
                  kemampuan saya.
                </p>

                <div className="contact-links">
                  <a
                    href="mailto:fauzanalvin5@gmail.com"
                    className="contact-link contact-link-primary"
                  >
                    <div>
                      <span>EMAIL</span>
                      <strong>fauzanalvin5@gmail.com</strong>
                    </div>

                    <span className="contact-arrow">↗</span>
                  </a>

                  <a href="tel:087802784601" className="contact-link">
                    <div>
                      <span>PHONE</span>
                      <strong>0878 0278 4601</strong>
                    </div>

                    <span className="contact-arrow">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fauzanalvinmubarok"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <span>LINKEDIN</span>
                      <strong>Fauzan Alvin Mubarok</strong>
                    </div>

                    <span className="contact-arrow">↗</span>
                  </a>
                  <a
                    href="https://github.com/fauzanalvinmubarok"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div>
                      <span>GITHUB</span>
                      <strong>github.com/fauzanalvinmubarok</strong>
                    </div>

                    <span className="contact-arrow">↗</span>
                  </a>
                </div>

                <div className="contact-buttons">
                  <a
                    href={`${import.meta.env.BASE_URL}Fauzan-Alvin-Mubarok-CV.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-button primary"
                  >
                    VIEW CV
                    <span>↗</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}Fauzan-Alvin-Mubarok-CV.pdf`}
                    download
                    className="contact-button secondary"
                  >
                    DOWNLOAD CV
                    <span>↓</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}Fauzan-Alvin-Mubarok-Portfolio.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-button primary"
                  >
                    VIEW PORTFOLIO
                    <span>↗</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}Fauzan-Alvin-Mubarok-Portfolio.pdf`}
                    download
                    className="contact-button secondary"
                  >
                    DOWNLOAD PORTFOLIO
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>© 2026 Fauzan Alvin Mubarok</span>

        <a href="#home">
          Back to top
          <span>↑</span>
        </a>
      </footer>
    </>
  );
}

export default App;
