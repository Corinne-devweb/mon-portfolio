import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Première colonne - 6 lignes d'informations alignées */}

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">John Doe</h5>
            <div className="d-flex flex-column">
              <p className="mb-2">40 rue Laure Diebold </p>
              <p className="mb-2">69009 Lyon, France</p>
              <p className="mb-2">10 20 30 40 50</p>
              <p className="mb-2">john.doe@gmail.com</p>

              <div className="d-flex mb-4">
                <a
                  href="https://github.com/Corinne-devweb"
                  className="text-white me-3 fs-5"
                  target="_blanck"
                >
                  <img className="logo" alt="lien GITHUB" src="./github" />
                </a>
                <a
                  href="https://x.com/home"
                  className="text-white me-3 fs-5"
                  target="_blanck"
                >
                  <img className="logo" alt="lien TWITTER" src="./twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/corinne-p-0098162a0/"
                  className="text-white me-3 fs-5"
                  target="_blanck"
                >
                  <img className="logo" alt="lien LINKEDIN" src="./linkedin" />
                </a>
              </div>
            </div>
          </div>

          {/* Deuxième colonne - Liens rapides */}

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Liens Utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
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

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Fresh Food
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Restaurant Akira
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Espace bien-être
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  SEO
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Création d'une API
                </Link>
              </li>
              <li className="mb-2">
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
};

export default Footer;
