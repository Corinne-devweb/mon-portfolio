import { Container, Row, Col } from "react-bootstrap";
import mobile from "../images-portfolio/mobile.svg";
import pointeur from "../images-portfolio/pointeur.svg";
import map from "../images-portfolio/map.svg";
import email from "../images-portfolio/email.png";
import globe from "../images-portfolio/globe.svg";

function Mentionslegales() {
  return (
    <main className="contact-page">
      <Container className="pt-5 pb-4">
        {/* Titre, sous-titre et trait */}
        <Row className="justify-content-center">
          <div className="titres mb-5 text-center">
            <h1 className="mb-3">Mentions légales</h1>
            <hr
              className="mx-auto custom-hr"
              style={{
                width: "120%",
                maxWidth: "600px",
                border: "0",
                height: "3px",
                backgroundColor: "black",
                marginLeft: "-10%",
              }}
            />
          </div>
        </Row>

        {/* Menu accordeon */}

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="text-center">
                  <div className="adress text-start">
                    <p className="d-flex align-items-center mb-0 mt-1">
                      <h3 className="name">John Doe</h3>
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <img
                        className="icones me-2"
                        src={map}
                        alt="Icône de carte routière en papier"
                      />
                      40 rue Laure Diebold
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <img
                        className="icones me-2"
                        src={pointeur}
                        alt="Icône d'un pointeur de localisation sur une carte"
                      />
                      69009 Lyon, France
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <img
                        className="icones me-2"
                        src={mobile}
                        alt="Icône d'un téléphone mobile"
                      />
                      10 20 30 40 50
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <img
                        className="icones me-2"
                        src={email}
                        alt="Icône d'email"
                      />
                      john.doe@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-start">
                <h3 className="d-flex align-items-center mb-1">alwaysdata</h3>
                <p className="d-flex align-items-center mb-1">
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                </p>
                <p className="d-flex align-items-center mb-1 text-start">
                  <a
                    href="https://www.alwaysdata.com/fr/"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center"
                  >
                    <img
                      className="me-2"
                      src={globe}
                      alt="Icône de globe"
                      style={{ width: "24px", height: "24px" }}
                    />
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-start">
                <h3>Crédits</h3>
                <p>
                  Ce site a été réalisé par John Doe, étudiant au{" "}
                  <span className="centre-lien">
                    Centre Européen de formation
                  </span>
                  .
                </p>
                <p className="fst-italic">
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site {""}
                  <a href="https://pixabay.com/fr/" rel="noopener noreferrer">
                    Pixabay
                  </a>
                </p>
                <p className="fst-italic">
                  La favicon de ce site a été fournie par {""}
                  <a href="https://www.flaticon.com/" rel="noopener noreferrer">
                    John doe Icons erstellt von Freepik - Flaticon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Mentionslegales;
