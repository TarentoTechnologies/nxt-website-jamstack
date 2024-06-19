import React, { useState } from "react";
import { useRecoilState } from "recoil";

import menuDark from "../../../../static/icons/hamburger-dark.png";
import menuLight from "../../../../static/icons/hamburger-light.png";
import { industrySelected, themeState } from "../../../states/atoms";
import { thorSubtext } from "../../../styles/style-guide/Typography.module.css";
import {
  activeIndustry,
  hamburgerMenu,
  hamburgerMenuOpen,
  industryCardDark,
  industryCardLight,
  industryDropdownDark,
  industryDropdownLight,
  industryIcons,
  industrySectionDark,
  industrySectionLight,
  slideIn1,
  slideOut1,
  smallScreenMenuDark,
  smallScreenMenuLight,
} from "../ThorDemo.module.css";

interface IndustriesProps {
  data: any;
}

export const Industries = ({ data }: IndustriesProps) => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [selectedIndustry, setSelectedIndustry] =
    useRecoilState(industrySelected);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 750);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      {/* For Large screens */}
      <div
        className={`${
          theme === "dark" ? industrySectionDark : industrySectionLight
        }`}
      >
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className={`${
              theme === "dark" ? industryCardDark : industryCardLight
            } mb-3 ${selectedIndustry === item.Title ? activeIndustry : ""}`}
            onClick={() => {
              setSelectedIndustry(item.Title);
              setIsMenuOpen(false);
            }}
          >
            <img src={item?.Logo} alt="Industry Icon" height={40} width={40} />
            <div
              className={`${
                theme === "dark" ? "text-white" : ""
              } ps-3 ${thorSubtext}`}
            >
              {item?.Title}
            </div>
          </div>
        ))}
      </div>

      {/* For Small screens */}
      <div
        className={`${
          theme === "dark" ? smallScreenMenuDark : smallScreenMenuLight
        } d-none`}
      >
        <div className={`${hamburgerMenu}`} onClick={handleMenuToggle}>
          <center>
            {theme === "dark" ? (
              <img src={menuDark} alt="Hamburger Menu" height={30} width={30} />
            ) : (
              <img
                src={menuLight}
                alt="Hamburger Menu"
                height={30}
                width={30}
              />
            )}
          </center>
        </div>
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className={`${industryIcons} mb-3 ${
              selectedIndustry === item.Title ? activeIndustry : ""
            }`}
            onClick={() => {
              setSelectedIndustry(item.Title);
              setIsMenuOpen(false);
            }}
          >
            <img src={item?.Logo} alt="Industry Icon" height={25} width={25} />
          </div>
        ))}
        {(isMenuOpen || isClosing) && (
          <div
            className={`${
              theme === "dark" ? industryDropdownDark : industryDropdownLight
            } ${isClosing ? slideOut1 : slideIn1}`}
          >
            <div className={`${hamburgerMenuOpen}`} onClick={handleMenuToggle}>
              <center>
                {theme === "dark" ? (
                  <img
                    src={menuDark}
                    alt="Hamburger Menu"
                    height={40}
                    width={40}
                  />
                ) : (
                  <img
                    src={menuLight}
                    alt="Hamburger Menu"
                    height={40}
                    width={40}
                  />
                )}
              </center>
            </div>
            {data?.map((item: any, index: number) => (
              <div
                key={index}
                className={`${
                  theme === "dark" ? industryCardDark : industryCardLight
                } mb-3 ${
                  selectedIndustry === item.Title ? activeIndustry : ""
                }`}
                onClick={() => {
                  setSelectedIndustry(item.Title);
                  setIsClosing(true);
                }}
              >
                <img
                  src={item?.Logo}
                  alt="Industry Icon"
                  height={40}
                  width={40}
                />
                <div
                  className={`${
                    theme === "dark" ? "text-white" : ""
                  } ps-3 ${thorSubtext}`}
                >
                  {item?.Title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
