import "./App.css";
import logoText from "./logo-text.png";
import bannerStack from "./banner-stack.png";

function App() {
  const technologies = [
    {
      name: "React",
      icon: "⚛",
      badge: "Popular",
      badgeType: "purple",
      description:
        "A declarative, component-based JavaScript library for building modern user interfaces.",
      category: "Frontend",
      level: "Beginner-Friendly",
      rating: "4.7",
    },
    {
      name: "Vue.js",
      icon: "V",
      badge: "Versatile",
      badgeType: "green",
      description:
        "An approachable, performant, and versatile framework for building user interfaces.",
      category: "Frontend",
      level: "Beginner-Friendly",
      rating: "4.8",
    },
    {
      name: "Svelte",
      icon: "S",
      badge: "Fast",
      badgeType: "orange",
      description:
        "A cybernetically enhanced web application compiler that creates efficient applications.",
      category: "Frontend",
      level: "Intermediate",
      rating: "4.8",
    },
    {
      name: "Next.js",
      icon: "N",
      badge: "Full-Stack",
      badgeType: "pink",
      description:
        "The React framework for the web with powerful features and great developer experience.",
      category: "Framework",
      level: "Beginner-Friendly",
      rating: "4.9",
    },
    {
      name: "Node.js",
      icon: "N",
      badge: "Standard",
      badgeType: "green",
      description:
        "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
      category: "Backend",
      level: "Beginner-Friendly",
      rating: "4.8",
    },
    {
      name: "PostgreSQL",
      icon: "P",
      badge: "Top 5%",
      badgeType: "blue",
      description:
        "A powerful open-source object-relational database system with reliability and performance.",
      category: "Database",
      level: "Intermediate",
      rating: "4.9",
    },
    {
      name: "Redis",
      icon: "R",
      badge: "Cache",
      badgeType: "red",
      description:
        "An in-memory data structure store used for caching and high-performance applications.",
      category: "Database",
      level: "Intermediate",
      rating: "4.8",
    },
    {
      name: "JavaScript",
      icon: "JS",
      badge: "Ubiquitous",
      badgeType: "yellow",
      description:
        "The versatile scripting language powering dynamic web applications.",
      category: "Language",
      level: "Beginner-Friendly",
      rating: "4.9",
    },
    {
      name: "TypeScript",
      icon: "TS",
      badge: "Essential",
      badgeType: "blue",
      description:
        "A strongly typed programming language that builds on JavaScript.",
      category: "Language",
      level: "Intermediate",
      rating: "4.9",
    },
    {
      name: "Java",
      icon: "J",
      badge: "Robust",
      badgeType: "red",
      description:
        "A popular object-oriented programming language designed for portability and scalability.",
      category: "Language",
      level: "Intermediate",
      rating: "4.6",
    },
    {
      name: "Tailwind CSS",
      icon: "T",
      badge: "Modern",
      badgeType: "cyan",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces.",
      category: "Styling",
      level: "Beginner-Friendly",
      rating: "4.9",
    },
    {
      name: "Docker",
      icon: "D",
      badge: "Containers",
      badgeType: "blue",
      description:
        "A platform designed to build, share, and run applications anywhere.",
      category: "DevOps",
      level: "Intermediate",
      rating: "4.9",
    },
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="navbar-inner">

          <a href="#" className="logo">
            <img src={logoText} alt="Dev Stack" />
          </a>

          <div className="nav-links">
            <a href="#" className="active">
              Home
            </a>

            <a href="#technologies">
              Technologies
            </a>

            <a href="#">
              Projects
            </a>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>
          </div>

          <div className="nav-actions">

            <a href="#" className="sign-in">
              Sign In
            </a>

            <button className="sign-up">
              Sign Up
            </button>

          </div>

        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-inner">

          <div className="hero-left">

            <h1>
              Build Your Ideal
              <span>Development Stack</span>
            </h1>

            <p>
              Explore frontend, backend, database, and tooling options.
              Compare them side by side, and put together the stack that
              fits your next project.
            </p>

            <div className="hero-buttons">

              <button className="explore-button">
                Explore Technologies
              </button>

              <button className="learn-button">
                Learn More
              </button>

            </div>

          </div>


          <div className="hero-right">

            <img
              src={bannerStack}
              alt="Development Stack"
            />

          </div>

        </div>

      </section>


      {/* ================= TECHNOLOGIES SECTION ================= */}

      <section
        className="technologies-section"
        id="technologies"
      >

        <div className="section-title">

          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>

        </div>


        <div className="technology-area">

          {/* ================= TECHNOLOGY CARDS ================= */}

          <div className="technology-grid">

            {technologies.map((technology) => (

              <div
                className="technology-card"
                key={technology.name}
              >

                <div className="card-top">

                  <div className="technology-icon">
                    {technology.icon}
                  </div>

                  <span
                    className={`technology-badge ${technology.badgeType}`}
                  >
                    {technology.badge}
                  </span>

                </div>


                <h3>
                  {technology.name}
                </h3>


                <p className="card-description">
                  {technology.description}
                </p>


                <div className="card-details">

                  <span>
                    {technology.category}
                  </span>

                  <span>
                    {technology.level}
                  </span>

                  <span className="rating">
                    ★ {technology.rating}
                  </span>

                </div>


                <button className="add-stack-button">
                  Add to Stack
                </button>

              </div>

            ))}

          </div>


          {/* ================= YOUR STACK ================= */}

          <div className="your-stack">

            <h3>
              Your Stack
            </h3>

            <p className="your-stack-subtitle">
              Currently Selected
            </p>


            <div className="selected-item">

              <div className="selected-icon react">
                ⚛
              </div>

              <div className="selected-info">

                <strong>
                  React
                </strong>

                <span>
                  Frontend
                </span>

              </div>

              <button className="remove-button">
                ×
              </button>

            </div>


            <div className="selected-item">

              <div className="selected-icon node">
                N
              </div>

              <div className="selected-info">

                <strong>
                  Node.js
                </strong>

                <span>
                  Backend
                </span>

              </div>

              <button className="remove-button">
                ×
              </button>

            </div>


            <button className="remove-all-button">
              Remove All
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          {/* BRAND */}

          <div className="footer-brand">

            <img
              src={logoText}
              alt="Dev Stack"
              className="footer-logo"
            />

            <p className="footer-description">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="footer-socials">

              <a href="#">
                GitHub
              </a>

              <a href="#">
                Twitter
              </a>

              <a href="#">
                LinkedIn
              </a>

            </div>

          </div>


          {/* PRODUCT */}

          <div className="footer-column">

            <h4>
              PRODUCT
            </h4>

            <a href="#">
              Home
            </a>

            <a href="#">
              Technologies
            </a>

            <a href="#">
              Projects
            </a>

          </div>


          {/* COMPANY */}

          <div className="footer-column">

            <h4>
              COMPANY
            </h4>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>

            <a href="#">
              Careers
            </a>

          </div>


          {/* LEGAL */}

          <div className="footer-column">

            <h4>
              LEGAL
            </h4>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>


        {/* ================= FOOTER BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            ©️ 2026 Dev Stack. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>

      </footer>


    </div>
  );
}

export default App;