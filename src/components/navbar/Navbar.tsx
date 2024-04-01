import { Link } from "gatsby";
import React from "react";

import { navBarStyles } from "./Navbar.module.css";

interface NavbarProps {
  imgSrc: any;
  imgAltText: any;
  link: any;
}

export const Navbar = ({ imgSrc, imgAltText, link }: NavbarProps) => {
  return (
    <div className={`${navBarStyles}`} data-testid="navbar">
      <Link to={link} rel="canonical">
        <img src={imgSrc} alt={imgAltText} title={imgAltText} />
      </Link>
    </div>
  );
};
