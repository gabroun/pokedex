import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Pokedex</h1>
      </Link>
    </header>
  );
};

export default Header;
