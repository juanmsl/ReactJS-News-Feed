import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({items}) => (
  <nav className="aca-navbar">
    {items.map((item, i) => (
      <Link
        key={i}
        to={item.href}
        className="aca-navbar__item"
      >
        {item.text}
      </Link>
    ))}
  </nav>
);

export default Navbar;