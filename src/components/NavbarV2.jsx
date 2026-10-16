
import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import "../styles/navbarV2.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* BRAND */}
        <a href="/" className="brand">
          <div className="brand-logo-box">
            <img
              src={logo}
              alt="The Cyber Trap"
              className="brand-logo"
            />
          </div>

          <div className="brand-name">
            <span>THE</span>
            <strong>
              <span className="brand-cyber">CYBER</span> TRAP
            </strong>
          </div>
        </a>

       
{/* NAVIGATION */}
<nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={closeMenu}
  >
    HOME
  </NavLink>

  <NavLink
    to="/play"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={closeMenu}
  >
    PLAY
  </NavLink>

  <NavLink
    to="/safety-hub"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={closeMenu}
  >
    SAFETY HUB
  </NavLink>

  <NavLink
    to="/meet-byte"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={closeMenu}
  >
    BYTE
  </NavLink>

  <NavLink
    to="/parents-teachers"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={closeMenu}
  >
    PARENTS
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={closeMenu}
  >
    ABOUT
  </NavLink>

  {/* SAFETY LINK INSIDE MOBILE MENU */}
  {/* <NavLink
    to="/safety"
    className="mobile-safety-link"
    onClick={closeMenu}
  >
    <Shield size={17} />
    <span>SAFETY</span>
  </NavLink> */}


  
<div className="mobile-safety-link">
  <Shield size={17} />
  <span>SAFETY</span>
</div>

</nav>

{/* DESKTOP SAFETY BUTTON */}
{/* <NavLink to="/safety" className="safety-button">
  <Shield size={18} strokeWidth={2} />
  <span>SAFETY</span>
</NavLink> */}

{/* DESKTOP SAFETY BUTTON — NOT CLICKABLE */}
<div className="safety-button" aria-disabled="true">
  <Shield size={18} strokeWidth={2} />
  <span>SAFETY</span>
</div>

{/* MOBILE HAMBURGER BUTTON */}
<button
  type="button"
  className={`hamburger ${menuOpen ? "is-open" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
>
  {menuOpen ? <X size={25} /> : <Menu size={25} />}
</button>


      </div>
    </header>
  );
}

export default Navbar;