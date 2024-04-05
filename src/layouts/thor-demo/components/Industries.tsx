import React from "react";
import { useRecoilState } from "recoil";

import industryIcon from "../../../../static/icons/Group 28.png";
import { themeState } from "../../../states/atoms";
import {
  industryCardDark,
  industryCardLight,
  industrySectionDark,
  industrySectionLight,
} from "./Industries.module.css";

const data = [
  "THOR for Manufacturing",
  "THOR for Retail",
  "THOR for Banking",
  "THOR for Education",
];

export const Industries = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
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
          } mb-3`}
        >
          <img src={industryIcon} alt="Industry Icon" />
          <div className={`${theme === "dark" ? "text-white" : ""} ps-3`}>
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
