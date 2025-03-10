import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="./pages/Home">
          JOHN DOE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Services">
                SERVICES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contact">
                CONTACT
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Mentionslegales">
                MENTIONS LEGALES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
