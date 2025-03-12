import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import imageBanner from "../images-portfolio/hero-bg.jpg";
import photoProfil from "../images-portfolio/john-doe-about.jpg";

function Home() {
  const skills = [
    { name: "HTML.5", percentage: 90, color: "var(--danger-color)" },
    { name: "CSS3", percentage: 80, color: "var(--turquoise-blue)" },
    { name: "JAVASCRIPT", percentage: 70, color: "var(--warning-color)" },
    { name: "PHP", percentage: 60, color: "var(--success-color)" },
    { name: "REACT", percentage: 50, color: "var(--primary-color)" },
  ];

  return (
    <div className="home-page">
      <div
        className="banner-section position-relative text-white "
        style={{
          backgroundImage: `url(${imageBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
        }}
      >
        <div className="text-overlay position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-white" style={{ zIndex: 2 }}>
            <h1 className="display-3 fw-bold">Bonjour, je suis John Doe</h1>
            <h2 className="display-6">Développeur Web full stack</h2>
          </div>
        </div>
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      </div>

      {/* Section avec deux blocs côte à côte */}
      <Container className="py-5">
        <Row className="justify-content-center">
          {/* Bloc À Propos */}
          <Col md={5} className="mb-4 mb-md-0">
            <div className="about-section">
              <h3 className="text-start mb-3">A propos</h3>
              <hr className="custom-hr mb-4" />
              <div className="text-center mb-3">
                <img
                  src={photoProfil}
                  alt="John Doe"
                  className="img-fluid w-100 mb-3"
                />
              </div>
              <p className="text-start">
                Lorem ipsum odor sit amet consectetuer adipiscing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat ? Natus, neque
                at ?
              </p>
              <p className="text-start">
                Lorem ipsum odor sit amet consectetuer adipiscing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat ? Natus, neque
                at ?
              </p>
              <p className="text-start">
                Lorem ipsum odor sit amet consectetuer adipiscing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat ? Natus, neque
                at ?
              </p>
            </div>
          </Col>

          {/* Bloc Mes Compétences */}
          <Col md={5}>
            <div className="skills-section">
              <h3 className="text-start mb-3">Mes compétences</h3>
              <hr className="custom-hr mb-4" />
              <div className="mt-4">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>

                    <ProgressBar
                      now={skill.percentage}
                      style={{
                        height: "10px",
                        backgroundColor: "#f0f0f0",
                      }}
                    >
                      <ProgressBar
                        now={skill.percentage}
                        style={{ backgroundColor: skill.color }}
                      />
                    </ProgressBar>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
