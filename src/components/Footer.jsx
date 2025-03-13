import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logoLinkedin from "../images-portfolio/linkedin.svg";
import logoTwitter from "../images-portfolio/twitter.svg";
import logoGithub from "../images-portfolio/github.svg";

function Footer() {
  return (
    <footer className="bg-dark text-white py-1 small">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* First column - Informations */}
          <div className="col-md-3 mb-4 mb-md-0 text-start mx-3">
            <h6 className="mb-2">John Doe</h6>
            <div className="d-flex flex-column">
              <p className="mb-1">40 rue Laure Diebold </p>
              <p className="mb-1">69009 Lyon, France</p>
              <p className="mb-1">10 20 30 40 50</p>
              <p className="mb-1">john.doe@gmail.com</p>

              <div className="d-flex mb-1">
                <a
                  href="https://github.com/Corinne-devweb"
                  className="text-white me-3 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo social-icon"
                    alt="lien GITHUB"
                    src={logoGithub}
                  />
                </a>
                <a
                  href="https://x.com/home"
                  className="text-white me-3 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo social-icon"
                    alt="lien TWITTER"
                    src={logoTwitter}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/corinne-p-0098162a0/"
                  className="text-white me-3 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo social-icon"
                    alt="lien LINKEDIN"
                    src={logoLinkedin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Second column - links */}
          <div className="col-md-3 mb-4 mb-md-0 text-start mx-3">
            <h6 className="mb-2">Liens Utiles</h6>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link
                  to="/"
                  className="text-white text-decoration-none link-hover"
                >
                  Accueil
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/services"
                  className="text-white text-decoration-none link-hover"
                >
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none link-hover"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/mentionslegales"
                  className="text-white text-decoration-none link-hover"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Third column - My projects */}
          <div className="col-md-3 mb-4 mb-md-0 text-start mx-3 pt-2">
            <h6 className="mb-2">Mes dernières réalisations</h6>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  Fresh Food
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  Restaurant Akira
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  Espace bien-être
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  SEO
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  Création d'une API
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none link-hover"
                >
                  Maquette d'un site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
