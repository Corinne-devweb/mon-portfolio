import { Container, Row, Col } from "react-bootstrap";
import carte from "../images-portfolio/carte.png";
import mobile from "../images-portfolio/mobile.svg";
import pointeur from "../images-portfolio/pointeur.svg";
import map from "../images-portfolio/map.svg";
import email from "../images-portfolio/email.png";

function Contact() {
  return (
    <main className="contact-page">
      <Container className="pt-4 pb-4">
        {/* Titre, sous-titre et trait */}
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
                width: "120%",
                maxWidth: "600px",
                border: "0",
                height: "3px",
                backgroundColor: "var(--primary-color)",
                marginLeft: "-10%",
              }}
            />
          </div>
        </Row>

        {/* Section avec deux blocs côte à côte */}
        <Row className="justify-content-center">
          {/* Bloc de gauche : Formulaire */}
          <Col md={5} className="mb-4 mb-md-0">
            <div className="form-section">
              <h5 className="text-start mb-3">Formulaire de contact</h5>
              <hr
                className="custom-hr mb-4"
                style={{
                  width: "100%",
                  border: "0",
                  height: "2px",
                  backgroundColor: "var(--primary-color)",
                }}
              />
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Votre email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
          </Col>

          {/* Bloc de droite : Mes Coordonnées */}
          <Col md={5}>
            <div className="contact-section">
              <h5 className="text-start mb-3">Mes coordonnées</h5>
              <hr
                className="custom-hr mb-4"
                style={{
                  width: "100%",
                  border: "0",
                  height: "2px",
                  backgroundColor: "var(--primary-color)",
                }}
              />
              <div className="text-center">
                <div className="adress text-start">
                  <p className="d-flex align-items-center mb-1">
                    <img className="icones me-2" src={map} alt="carte-papier" />
                    John Doe
                  </p>
                  <p className="d-flex align-items-center mb-1">
                    <img
                      className="icones me-2"
                      src={pointeur}
                      alt="image-pointeur"
                    />
                    40 rue Laure Diebold
                  </p>
                  <p className="d-flex align-items-center mb-1">
                    <img
                      className="icones me-2"
                      src={mobile}
                      alt="image-mobile"
                    />
                    10 20 30 40 50
                  </p>
                  <p className="d-flex align-items-center mb-3">
                    <img className="icones me-2" src={email} alt="email" />
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
