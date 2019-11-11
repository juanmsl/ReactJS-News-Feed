import React from 'react';
import {Link, withRouter} from "react-router-dom";

const Navbar = ({items, location}) => (
  <nav className="aca-navbar">
    {items.map((item, i) => (
      <Link
        key={i}
        to={item.href}
        className={`aca-navbar__item ${item.href === location.pathname ? "selected" : ""}`}
      >
        {item.text}
      </Link>
    ))}
  </nav>
);

export default withRouter(Navbar);