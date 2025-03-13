import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import imageBanner from "../images-portfolio/hero-bg.jpg";
import photoProfil from "../images-portfolio/john-doe-about.jpg";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const skills = [
    { name: "HTML.5", percentage: 90, color: "var(--danger-color)" },
    { name: "CSS3", percentage: 80, color: "var(--turquoise-blue)" },
    { name: "JAVASCRIPT", percentage: 70, color: "var(--warning-color)" },
    { name: "PHP", percentage: 60, color: "var(--success-color)" },
    { name: "REACT", percentage: 50, color: "var(--primary-color)" },
  ];

  useEffect(() => {
    // Cette fonction ne s'exécute que lorsque la modale est ouverte
    if (isOpen && !profile) {
      const fetchGitHubProfile = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            "https://api.github.com/users/github-johndoe"
          );

          if (!response.ok) {
            throw new Error(
              "Impossible de récupérer les données du profil GitHub"
            );
          }

          const data = await response.json();
          setProfile(data);
          setError(null);
        } catch (err) {
          setError(err.message);
          console.error("Erreur lors de la récupération du profil:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchGitHubProfile();
    }
  }, [isOpen, profile]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
            {/* Bouton "En savoir plus" ajouté sous le titre h2 */}
            <button onClick={openModal} className="savoir-plus-btn mt-3">
              En savoir plus
            </button>
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

        {/* Fenêtre modale */}
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={closeModal} className="modal-close-btn">
                &times;
              </button>

              <h3>Profil GitHub de John Doe</h3>

              {loading && <p>Chargement des données...</p>}

              {error && <p className="error">Erreur: {error}</p>}

              {profile && (
                <div className="github-profile">
                  <img
                    src={profile.avatar_url}
                    alt="Avatar GitHub"
                    className="github-avatar"
                  />
                  <h4>{profile.name || profile.login}</h4>
                  <p className="github-bio">
                    {profile.bio || "Aucune biographie disponible"}
                  </p>
                  <div className="github-stats">
                    <div className="stat">
                      <strong>Repos:</strong> {profile.public_repos}
                    </div>
                    <div className="stat">
                      <strong>Followers:</strong> {profile.followers}
                    </div>
                    <div className="stat">
                      <strong>Following:</strong> {profile.following}
                    </div>
                  </div>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    Voir le profil complet
                  </a>
                  <button
                    onClick={closeModal}
                    className="modal-footer-close-btn mt-4 text-white"
                  >
                    Fermer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
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
