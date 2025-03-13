import { Container, Row, Col } from "react-bootstrap";
import "../styles/Portfolio.css";
import imageServices from "../images-portfolio/banner.jpg";
import freshFood from "../images-portfolio/fresh-food.jpg";
import restaurantAkira from "../images-portfolio/restaurant-japonais.jpg";
import espaceBienetre from "../images-portfolio/espace-bien-etre.jpg";
import seo from "../images-portfolio/seo.jpg";
import creationAPI from "../images-portfolio/coder.jpg";
import maquetteSiteweb from "../images-portfolio/screens.jpg";

function Portfolio() {
  const iconStyle = {
    height: "auto",
    width: "100%",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    display: "block",
    width: "auto",
    margin: "0 auto",
    padding: "0.375rem 1.5rem",
  };

  return (
    <main className="services-page">
      <section
        className="banner-section position-relative"
        style={{
          backgroundImage: `url(${imageServices})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
          width: "100%",
        }}
      ></section>

      {/* Contenu sous la bannière */}
      <Container className="pt-4 pb-4">
        <Row className="justify-content-center">
          <div className="titres mb-5 text-center">
            <h1 className="mb-3">Portfolio</h1>
            <small className="d-block mb-4">
              Voici quelques unes de mes réalisations
            </small>
            <hr
              className="mx-auto"
              style={{
                width: "120%",
                maxWidth: "600px",
                border: "0",
                height: "4px",
                backgroundColor: "darkblue",
                marginLeft: "-10%",
              }}
            />
          </div>

          {/* Grille de cartes */}
          <Row>
            {/* Carte 1 */}
            <Col md={4} className="mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={freshFood}
                  className="card-img-top mx-auto d-block"
                  alt="fresh-food"
                  style={iconStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Fresh Food</h5>
                  <p className="card-text">
                    Site de vente de produits en ligne
                  </p>
                  <div className="mt-auto mb-3 text-center">
                    <button
                      className="btn btn-primary btn-sm portfolio-btn"
                      style={buttonStyle}
                    >
                      Voir le site
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Site réalisé avec PHP et MySQL
                    </small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Carte 2 */}
            <Col md={4} className="mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={restaurantAkira}
                  className="card-img-top mx-auto d-block"
                  alt="restaurant-atika"
                  style={iconStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Restaurant Akira</h5>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <div className="mt-auto mb-3 text-center">
                    <button
                      className="btn btn-primary btn-sm portfolio-btn"
                      style={buttonStyle}
                    >
                      Voir le site
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Site réalisé avec WordPress
                    </small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Carte 3 */}
            <Col md={4} className="mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={espaceBienetre}
                  className="card-img-top mx-auto d-block"
                  alt="espace-bien-etre"
                  style={iconStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Espace bien-être</h5>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <div className="mt-auto mb-3 text-center">
                    <button
                      className="btn btn-primary btn-sm portfolio-btn"
                      style={buttonStyle}
                    >
                      Voir le site
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Site réalisé avec LARAVEL
                    </small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Carte 4 */}
            <Col md={4} className="mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={seo}
                  className="card-img-top mx-auto d-block"
                  alt="seo"
                  style={iconStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">SEO</h5>
                  <p className="card-text">
                    Amélioration du référencement d'un site e-commerce
                  </p>
                  <div className="mt-auto mb-3 text-center">
                    <button
                      className="btn btn-primary btn-sm portfolio-btn"
                      style={buttonStyle}
                    >
                      Voir le site
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Utilisation des outils SEO
                    </small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Carte 5 */}
            <Col md={4} className="mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={creationAPI}
                  className="card-img-top mx-auto d-block"
                  alt="creation-api"
                  style={iconStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Création d'une API</h5>
                  <p className="card-text">
                    Création d'une API RESTFULL publique
                  </p>
                  <div className="mt-auto mb-3 text-center">
                    <button
                      className="btn btn-primary btn-sm portfolio-btn"
                      style={buttonStyle}
                    >
                      Voir le site
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">PHP - SYMFONY</small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Carte 6 */}
            <Col md={4} className="mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={maquetteSiteweb}
                  className="card-img-top mx-auto d-block"
                  alt="maquette-site-web"
                  style={iconStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Maquette d'un site web</h5>
                  <p className="card-text">Création du prototype d'un site</p>
                  <div className="mt-auto mb-3 text-center">
                    <button
                      className="btn btn-primary btn-sm portfolio-btn"
                      style={buttonStyle}
                    >
                      Voir le site
                    </button>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Réalisé avec FIGMA
                    </small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </main>
  );
}

export default Portfolio;
