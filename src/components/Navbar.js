import logo from "../images/logo.svg";
import Menu from "./Menu";
import Social from "./Social";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          <Menu />
        </ul>

        <ul className="nav-icons">
          <Social />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
