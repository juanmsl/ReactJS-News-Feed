import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({items}) => (
  <nav>
    {items.map((item, i) => (
      <Link
        key={i}
        to={item.href}
      >
        {item.text}
      </Link>
    ))}
  </nav>
);

export default Navbar;