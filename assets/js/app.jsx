const { useEffect, useRef, useState } = React;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Ochogwu Prince Home">
          <span className="logo-mark">OP</span>
          <span className="brand-text">Ochogwu Prince</span>
        </a>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`site-nav ${open ? 'open' : ''}`} role="navigation" onClick={() => setOpen(false)}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Section({ id, className, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} className={`section reveal ${className || ''}`.trim()}>
      {children}
    </section>
  );
}

function Hero() {
  const [photoSrc] = useState('assets/img/ochogwu.jpg');
  return (
    <Section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="profile-wrap">
            <img
              src={photoSrc}
              alt="Ochogwu Prince"
              className="profile-photo"
              onError={(e) => {
                if (!e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = '1';
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ochogwu+Prince&background=1f3a8a&color=fff&rounded=true&size=256';
                }
              }}
            />
          </div>
          <h1>Backend Developer</h1>
          <p className="subtitle"> I design robust APIs, orchestrate services, and ship clean, reliable code. Focused on performance, security, and developer-friendly architectures.</p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Get in Touch</a>
          </div>
          <div className="socials">
            <a className="action-chip" href="mailto:ochogwuprince92@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i><span>Email</span>
            </a>
            <a className="action-chip" href="https://www.linkedin.com/in/ochogwuprince" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i><span>LinkedIn</span>
            </a>
            <a className="action-chip" href="https://github.com/ochogwuprince92" target="_blank" rel="noopener" aria-label="GitHub">
              <i className="fa-brands fa-github"></i><span>GitHub</span>
            </a>
            <a className="action-chip" href="https://wa.me/2348157278277" target="_blank" rel="noopener" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
            </a>
            <a className="action-chip" href="tel:+2348157278277" aria-label="Call">
              <i className="fa-solid fa-phone"></i><span>Call</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="blob"></div>
          <div className="grid"></div>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="container narrow">
        <h2>About Me</h2>
        <p>
          I’m Ochogwu Prince, a Backend Developer with a background in Chemistry. My journey from scientific analysis to software engineering sharpened my attention to detail and love for problem‑solving. Today, I build backend systems that are secure, scalable, and a joy to maintain.
        </p>
        <p>
          I enjoy turning product goals into well‑designed services — from authentication and authorization to data modeling, CI/CD, and cloud deployments. When I’m not shipping APIs, I’m optimizing queries, writing tests, or improving developer workflows. I am open to explore new challenges and opportunities to grow.
        </p>
      </div>
    </Section>
  );
}

const skills = [
  { icon: 'fa-brands fa-python', label: 'Python' },
  { icon: 'fa-solid fa-leaf', label: 'Django' },
  { icon: 'fa-solid fa-link', label: 'REST / DRF' },
  { icon: 'fa-solid fa-diagram-project', label: 'GraphQL' },
  { icon: 'fa-brands fa-docker', label: 'Docker' },
  { icon: 'fa-solid fa-rocket', label: 'CI/CD' },
  { icon: 'fa-solid fa-database', label: 'PostgreSQL' },
  { icon: 'fa-solid fa-database', label: 'MySQL' },
  { icon: 'fa-solid fa-cloud-arrow-up', label: 'Render' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-brands fa-Linux', label: 'Linux' },
  { icon: 'fa-brands fa-Java', label: 'Learning Java' },
  { icon: 'fa-solid fa-puzzle-piece', label: 'Problem‑solving', subtle: true },
  { icon: 'fa-solid fa-people-group', label: 'Teamwork', subtle: true },
  { icon: 'fa-solid fa-comments', label: 'Communication', subtle: true },
];

function Skills() {
  return (
    <Section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.label} className={`skill-card ${s.subtle ? 'subtle' : ''}`}>
              <i className={s.icon}></i>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <article className="timeline-item">
            <div className="time">Skynet Inc.</div>
            <div className="details">
              <h3>Backend Developer</h3>
              <p className="meta">Lagos, Nigeria</p>
              <ul>
                <li>Implemented JWT authentication and role‑based access control across microservices.</li>
                <li>Designed RESTful APIs with Django REST Framework; improved response times by 35%.</li>
                <li>Containerized services with Docker and orchestrated CI/CD pipelines.</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="time">ALX</div>
            <div className="details">
              <h3>Software Engineering Fellow</h3>
              <p className="meta">Remote</p>
              <ul>
                <li>Collaborated on distributed systems projects and API integrations.</li>
                <li>Built monitoring and logging around core services for actionable insights.</li>
                <li>Applied best practices in testing, code reviews, and documentation.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">

          {/* Job Board Platform */}
          <article className="project-card">
            <div className="project-header">
              <h3>Job Board Platform</h3>
              <span className="badge accent">Case Study</span>
            </div>
            <p>
              Engineered a role-based job marketplace with listings, applications, and real-time 
              notifications. Integrated background task processing with Celery, containerized 
              services for portability, and automated CI/CD pipelines to streamline deployment 
              workflows.
            </p>
            <ul className="tags">
              <li>Python</li>
              <li>Django / DRF</li>
              <li>RBAC</li>
              <li>JWT/Email AUthentication</li>
              <li>Redis</li>
              <li>Celery</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>PostgreSQL</li>
              <li>Swagger</li>
              <li>Render</li>
            </ul>
            <div className="project-actions">
              <a className="btn small" href="#contact">Discuss</a>
            </div>
          </article>

          {/* Bespoke Rental Service */}
          <article className="project-card">
            <div className="project-header">
              <h3>Bespoke Rental Service</h3>
              <span className="badge accent">Case Study</span>
            </div>
            <p>
              Built a scalable platform for tailored rental workflows, including authentication, 
              booking pipelines, and payment integrations. Adopted a service-oriented approach with 
              containerization, background task processing, and CI/CD pipelines to support fast, 
              reliable feature delivery.
            </p>
            <ul className="tags">
              <li>Python</li>
              <li>Django / DRF</li>
              <li>RBAC</li>
              <li>CI/CD</li>
              <li>AWS/Heroku</li>
            </ul>
            <div className="project-actions">
              <a className="btn small" href="#contact">Discuss</a>
            </div>
          </article>

        </div>
      </div>
    </Section>
  );
}


function Education() {
  return (
    <Section id="education">
      <div className="container">
        <h2>Education &amp; Certifications</h2>
        <div className="edu-list">
          <div className="edu-item">
            <h3>B.Sc in Chemistry</h3>
            <p className="meta">Federal University of Agriculture Makurdi</p>
          </div>
          <div className="edu-item">
            <h3>Certifications</h3>
            <ul>
              <li>ALX — Software Engineering</li>
              <li>3MTT — Backend Development</li>
              <li>Coursera — Python, Databases, and Cloud Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  useEffect(() => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
  }, []);
  return (
    <Section id="contact">
      <div className="container narrow">
        <h2>Contact</h2>
        <p>Open to collaborations, roles, and impactful backend challenges. Email me or use the form below.</p>
        <div className="contact-grid">
          <div className="contact-card">
            <ul className="contact-links">
              <li>
                <a className="action-chip" href="mailto:ochogwuprince92@gmail.com" aria-label="Email">
                  <i className="fa-solid fa-envelope"></i><span>Email</span>
                </a>
              </li>
              <li>
                <a className="action-chip" href="https://www.linkedin.com/in/ochogwuprince" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i><span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a className="action-chip" href="https://github.com/ochogwuprince92" target="_blank" rel="noopener" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i><span>GitHub</span>
                </a>
              </li>
              <li>
                <a className="action-chip" href="https://wa.me/2348157278277" target="_blank" rel="noopener" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a className="action-chip" href="tel:+2348157278277" aria-label="Call">
                  <i className="fa-solid fa-phone"></i><span>Call</span>
                </a>
              </li>
            </ul>
          </div>
          <form className="contact-form" action="https://formspree.io/f/xbjvjqly" method="POST">
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="How can I help?"></textarea>
            </div>
            <button className="btn primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© <span id="year"></span> Ochogwu Prince. Built with care and clean code.</p>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


