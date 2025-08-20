import { Outlet, Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="main">
      <nav className="navArea">
        <NavLink
        to="/"
        >
            Home
        </NavLink>
        <NavLink
        to={"/pastes"}
        >
            Paste
        </NavLink>
      </nav>
      <Outlet /> 
    </div>
  );
};

export default Navbar;
