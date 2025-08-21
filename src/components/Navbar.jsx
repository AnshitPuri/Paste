import { Outlet, Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <nav className="navArea">
        <div class="glow-orb"></div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navLink-active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/pastes"}
          className={({ isActive }) => (isActive ? "navLink-active" : "")}
        >
          Paste
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
