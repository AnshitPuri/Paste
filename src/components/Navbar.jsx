import { Outlet, Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  return (
    <div className="main">
      <nav className="navArea">
        <div className="logoArea">
          <h1>Paste</h1>
        </div>
        <div className="nav-links">
          <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "navLink-active" : "")}
        >
          Home
        </NavLink>
          <NavLink
          to={"/PasteEditor"}
          className={({ isActive }) => (isActive ? "navLink-active" : "")}
        >
          + New Paste
        </NavLink>
        <NavLink
          to={"/pastes"}
          className={({ isActive }) => (isActive ? "navLink-active" : "")}
        >
          All Pastes
        </NavLink>
        </div>
      </nav>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
    </div>
  );
};

export default Navbar;
