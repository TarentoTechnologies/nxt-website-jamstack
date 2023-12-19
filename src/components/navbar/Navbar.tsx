import { navBarStyles } from "./Navbar.module.css";

interface NavbarProps {
  imgSrc: any;
  imgAltText: any;
  link: any;
}

export const Navbar = ({ imgSrc, imgAltText, link }: NavbarProps) => {
  return (
    <div className={`${navBarStyles}`}>
      <a href={link} rel="canonical">
        <img src={imgSrc} alt={imgAltText} title={imgAltText} />
      </a>
    </div>
  );
};
