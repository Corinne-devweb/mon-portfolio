import { Container, Row } from "react-bootstrap";
import "../styles/Services.css";
import imageServices from "../images-portfolio/banner.jpg";
import brush from "../images-portfolio/brush.svg";
import brackets from "../images-portfolio/brackets.svg";
import loupe from "../images-portfolio/search.svg";

function Services() {
  const iconStyle = {
    filter:
      "invert(44%) sepia(95%) saturate(1354%) hue-rotate(190deg) brightness(91%) contrast(98%)",
    marginTop: "2rem",
    marginBottom: "1rem",
    height: "24px",
    width: "24px",
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
            <h1 className="mb-3">Mon offre de services</h1>
            <small className="d-block mb-4">
              Voici les prestations sur lesquelles je peux intervenir
            </small>
            <hr
              className="mx-auto"
              style={{
                width: "120%",
                maxWidth: "600px",
                border: "0",
                height: "4px",
                marginLeft: "-10%",
                backgroundColor: "darkblue",
              }}
            />
          </div>

          {/* Les cards */}
          <div className="card-group">
            <div className="card">
              <img
                src={brush}
                className="card-img-top mx-auto d-block"
                alt="pinceau"
                style={iconStyle}
              />
              <div className="card-body">
                <h5 className="card-title">UX Design</h5>
                <p className="card-text">
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={brackets}
                className="card-img-top mx-auto d-block crochets"
                alt="crochets-fermants"
                style={iconStyle}
              />
              <div className="card-body">
                <h5 className="card-title">Développement web</h5>
                <p className="card-text">
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.)
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={loupe}
                className="card-img-top mx-auto d-block"
                alt="loupe"
                style={iconStyle}
              />
              <div className="card-body">
                <h5 className="card-title">Référencement</h5>
                <p className="card-text">
                  Le référencement naturel (SEO) set une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo, etc.)
                  L'objectif est d'attirer un maximum de visiteurs qualifiés sur
                  le site.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default Services;
