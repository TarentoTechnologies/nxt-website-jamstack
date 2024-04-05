import React from "react";
import { useRecoilState } from "recoil";

import ThorLogo from "../../../../static/images/Thor-i-logo.png";
import { themeState } from "../../../states/atoms";
import { thorLogo } from "../../../styles/style-guide/Typography.module.css";
import {
  dark,
  light,
  moonIcon,
  navbarDark,
  navbarLight,
  sliderOff,
  sliderOn,
  sunIcon,
  toggleButton,
} from "./Navbar.module.css";

export const Navbar = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme === "dark" ? navbarDark : navbarLight}`}>
      <div className={`ms-5 d-flex align-items-center`}>
        <img src={ThorLogo} alt="Thor Logo" className="pe-2" />
        <span className={`${thorLogo} ${theme === "dark" ? "text-white" : ""}`}>
          THOR
        </span>
      </div>
      <label
        className={`${toggleButton} ${theme === "dark" ? dark : light} me-5`}
      >
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className={`${theme === "dark" ? sunIcon : moonIcon}`}></span>
        <span className={`${theme === "dark" ? sliderOn : sliderOff}`}></span>
      </label>
    </div>
  );
};
