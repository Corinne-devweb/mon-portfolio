import { Link } from "react-router-dom";
import logoLinkedin from "../images-portfolio/linkedin.svg";
import logoTwitter from "../images-portfolio/twitter.svg";
import logoGithub from "../images-portfolio/github.svg";

function Footer() {
  return (
    <footer className="bg-dark text-white py-1 small">
      <div className="container-fluid footer">
        <div className="row justify-content-around mx-auto small align-items-center">
          {/* Première colonne - 6 lignes d'informations alignées */}

          <div className="col-md-3 mb-4 mb-md-0 text-start justify-content-center">
            <h7 className="text-uppercase mb-2">John Doe</h7>
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
                    className="logo"
                    alt="lien GITHUB"
                    src={logoGithub}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
                <a
                  href="https://x.com/home"
                  className="text-white me-3 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo"
                    alt="lien TWITTER"
                    src={logoTwitter}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/corinne-p-0098162a0/"
                  className="text-white me-3 fs-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo"
                    alt="lien LINKEDIN"
                    src={logoLinkedin}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Deuxième colonne - Liens rapides */}

          <div className="col-md-3 mb-4 mb-md-0 text-start justify-content-center">
            <h7 className="text-uppercase mb-2">Liens Utiles</h7>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link to="/" className="text-white text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/mentionslegales"
                  className="text-white text-decoration-none"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Troisième colonne - Mes réalisations */}

          <div className="col-md-3 mb-4 mb-md-0 text-start d-flex flex-column justify-content-center">
            <h7 className="text-uppercase mb-2">Mes dernières réalisations</h7>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Fresh Food
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Restaurant Akira
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Espace bien-être
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  SEO
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Création d'une API
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
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
