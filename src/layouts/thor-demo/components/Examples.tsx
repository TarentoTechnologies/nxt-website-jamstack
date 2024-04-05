import React from "react";
import { useRecoilState } from "recoil";

import { themeState } from "../../../states/atoms";
import {
  egCardDark,
  egCardLight,
  egSectionDark,
  egSectionLight,
} from "./Examples.module.css";

const data = [
  "What is our most popular product?",
  "Which store is having the most sales today?",
  "Contact information of the area manager",
  "Store wise sales comparison for last one week",
];

export const Examples = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div className={`${theme === "dark" ? egSectionDark : egSectionLight}`}>
      <h5 className={`${theme === "dark" ? "text-white" : ""} p-3`}>
        Here are some examples that you can try
      </h5>
      {data?.map((item: any, index: number) => (
        <div
          key={index}
          className={`${theme === "dark" ? egCardDark : egCardLight} mb-3`}
        >
          <div className={`${theme === "dark" ? "text-white" : ""}`}>
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
