import shoe from "../logo/shoe.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav-header">
        <img src={shoe} alt="React Logo" className="nav-logo" />
        <h1 className="nav-h1">ShoeHub</h1>
        <ul className="nav-items">
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/e-portal">E-portal</Link>
          <Link to="/advertisement">Advertisement</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
