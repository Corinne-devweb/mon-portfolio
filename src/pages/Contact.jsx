import { Container, Row, Col } from "react-bootstrap";
import "../styles/Contact.css";
import carte from "../images-portfolio/carte.png";
import mobile from "../images-portfolio/mobile.svg";
import pointeur from "../images-portfolio/pointeur.svg";
import map from "../images-portfolio/map.svg";
import email from "../images-portfolio/email.png";

function Contact() {
  return (
    <main className="contact-page">
      <Container className="pt-4 pb-4">
        <Row className="justify-content-center">
          <div className="titres mb-5 text-center">
            <h1 className="mb-3">Contact</h1>
            <small className="d-block mb-4">
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact
            </small>
            <hr
              className="mx-auto"
              style={{
                width: "100%",
                maxWidth: "600px",
                border: "0",
                height: "4px",
                backgroundColor: "darkblue",
                marginLeft: "-10%",
              }}
            />
          </div>
        </Row>

        {/* Section with two blocks */}

        <Row className="justify-content-center contact-container">
          {/* Left block : "Formulaire" */}
          <Col md={5} className="mb-4 mb-md-0 mt-1 pt-2">
            <div className="form-section">
              <h5 className="text-start mb-3">Formulaire de contact</h5>
              <hr
                className="mb-4"
                style={{
                  width: "100%",
                  border: "0",
                  height: "2px",
                  backgroundColor: "darkblue",
                }}
              />
              <form>
                <div className="mb-2 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Votre adresse email"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="10"
                    placeholder="Votre message"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 btn-contact"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </Col>

          {/* Right block : Mes Coordonnées */}
          <Col md={5}>
            <div className="contact-section">
              <h5 className="text-start mb-3 mt-1 pt-2">Mes coordonnées</h5>
              <hr
                className="mb-4"
                style={{
                  width: "100%",
                  border: "0",
                  height: "2px",
                  backgroundColor: "darkblue",
                }}
              />
              <div className="text-center">
                <div className="adress text-start">
                  <p className="d-flex align-items-center mb-1 mt-4">
                    <span className="name">John Doe</span>
                  </p>
                  <p className="d-flex align-items-center mb-1">
                    <img
                      className="icones me-2"
                      src={map}
                      alt="Icône de carte routière en papier"
                    />
                    40 rue Laure Diebold
                  </p>
                  <p className="d-flex align-items-center mb-1">
                    <img
                      className="icones me-2"
                      src={pointeur}
                      alt="Icône d'un pointeur de localisation sur une carte"
                    />
                    69009 Lyon, France
                  </p>
                  <p className="d-flex align-items-center mb-1">
                    <img
                      className="icones me-2"
                      src={mobile}
                      alt="Icône d'un téléphone mobile"
                    />
                    10 20 30 40 50
                  </p>
                  <p className="d-flex align-items-center mb-2">
                    <img
                      className="icones me-2"
                      src={email}
                      alt="Icône d'email"
                    />
                    john.doe@gmail.com
                  </p>
                </div>
                <img
                  src={carte}
                  alt="Coordonnees"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contact;
