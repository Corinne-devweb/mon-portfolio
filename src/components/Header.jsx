import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand">JOHN DOE</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active custom-nav-link"
                    : "nav-link custom-nav-link"
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active custom-nav-link"
                    : "nav-link custom-nav-link"
                }
                to="/Services"
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active custom-nav-link"
                    : "nav-link custom-nav-link"
                }
                to="/Portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active custom-nav-link"
                    : "nav-link custom-nav-link"
                }
                to="/Contact"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active custom-nav-link"
                    : "nav-link custom-nav-link"
                }
                to="/Mentionslegales"
              >
                MENTIONS LEGALES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
