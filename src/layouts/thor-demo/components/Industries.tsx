import React from "react";
import { useRecoilState } from "recoil";

import { themeState } from "../../../states/atoms";
import { thorSubtext } from "../../../styles/style-guide/Typography.module.css";
import {
  industryCardDark,
  industryCardLight,
  industrySectionDark,
  industrySectionLight,
} from "../ThorDemo.module.css";

interface IndustriesProps {
  data: any;
}

export const Industries = ({ data }: IndustriesProps) => {
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
  );
};
