import { Outlet, Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ToastContainer } from "react-toastify";
import { ClipboardPaste } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="main">
      <nav className="navArea">
        <div className="logoArea">
          <div className="logoandtitle">
            <ClipboardPaste />
            <h1> PasteIt </h1>
          </div>
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
