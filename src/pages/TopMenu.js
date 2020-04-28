import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  const [open, setOpen] = useState(false);
  const [altura, setHeight] = useState(300);

  const menuOpen = () => {
    setOpen(!open);
  };

  const menuLateral = () => {
    return (
      <div className="menu_abrido" onClick={() => setOpen(false)}>
        <div className="menu-bar-principal"></div>
        <div className="menu-bar-abrido">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="menuzao">
        {open && menuLateral()}
        <div onClick={menuOpen} className="pauzin3">
          <ul className="quadrado-pauzin">
            <li className="pauzin1"></li>
            <li className="pauzin1"></li>
            <li className="pauzin1"></li>
          </ul>
        </div>
        <ul className="menu-topo-ul">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <nav className="menu-topo"></nav>
      </div>
    </>
  );
};

export default TopMenu;
