import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="grid navbar-grid">

          {/* LOGO */}
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          {/* NAV */}
          <nav className={open ? "nav open" : "nav"}>
            <ul>
              <li><NavLink onClick={() => setOpen(false)} to="/">Home</NavLink></li>
              <li><NavLink onClick={() => setOpen(false)} to="/about">About</NavLink></li>
              <li><NavLink onClick={() => setOpen(false)} to="/country">Country</NavLink></li>
              <li><NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* MOBILE MENU ICON */}
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </div>
    </header>
  );
};
