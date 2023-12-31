import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./navbarComponent.scss";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand className="nav-brand" href="">
        Sri Matha trust
      </Navbar.Brand>
      <div className="nav-link-container">
        <Link className="nav-link-text" to=".">
          Home
        </Link>
        <Link className="nav-link-text" to="aboutus">
          About us
        </Link>
        <Link className="nav-link-text" to="">
          What We Do
        </Link>
        <Link className="nav-link-text" to="media">
          Media
        </Link>
        <Link className="nav-link-text" to="">
          Moment Matters
        </Link>
        <Link className="nav-link-text" to="">
          About Cancer
        </Link>
        <Link className="nav-link-text" to="contactus">
          Contact
        </Link>
      </div>
      <Link className="donate-button" to="/donation">
        Donate
      </Link>
    </Navbar>
  );
};

export default NavbarComponent;
