import shoe from "../logo/shoe.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav-header">
        <Link to="/">
          <img src={shoe} alt="React Logo" className="nav-logo" />
        </Link>
        <h1 className="nav-h1">ShoeHub</h1>
        <ul className="nav-items">
          <NavLink
            to="pricing"
            className={({ isActive }) => isActive && "my-link"}
          >
            Pricing
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => isActive && "my-link"}
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) => isActive && "my-link"}
          >
            Contact
          </NavLink>
          <NavLink
            to="e-portal"
            className={({ isActive }) => isActive && "my-link"}
          >
            E-portal
          </NavLink>
          <NavLink
            to="advertisement"
            className={({ isActive }) => isActive && "my-link"}
          >
            Advertisement
          </NavLink>
          <NavLink
            to="person"
            className={({ isActive }) => isActive && "my-link"}
          >
            Person
          </NavLink>
          <NavLink
            to="host"
            className={({ isActive }) => isActive && "my-link"}
          >
            Host
          </NavLink>
          <NavLink
            to="billing"
            className={({ isActive }) => isActive && "my-link"}
          >
            Billing
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
