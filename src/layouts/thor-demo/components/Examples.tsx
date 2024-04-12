import React from "react";
import { useRecoilState } from "recoil";

import { themeState } from "../../../states/atoms";
import {
  thorSubTitle,
  thorSubtext,
} from "../../../styles/style-guide/Typography.module.css";
import {
  egCardDark,
  egCardLight,
  egSectionDark,
  egSectionLight,
} from "../ThorDemo.module.css";

interface ExamplesProps {
  data: any;
}

export const Examples = ({ data }: ExamplesProps) => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div className={`${theme === "dark" ? egSectionDark : egSectionLight}`}>
      <div
        className={`${
          theme === "dark" ? "text-white" : ""
        } ${thorSubTitle} pb-4`}
      >
        {data?.Title}
      </div>
      {data?.Examples?.map((item: any, index: number) => (
        <div
          key={index}
          className={`${theme === "dark" ? egCardDark : egCardLight} mb-4`}
        >
          <div
            className={`${theme === "dark" ? "text-white" : ""} ${thorSubtext}`}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
