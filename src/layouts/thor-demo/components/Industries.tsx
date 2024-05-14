import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { industrySelected, themeState } from "../../../states/atoms";
import { thorSubtext } from "../../../styles/style-guide/Typography.module.css";
import {
  activeIndustry,
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
  const [selectedIndustry, setSelectedIndustry] =
    useRecoilState(industrySelected);
  const setIndustrySelected = useSetRecoilState(industrySelected);

  // useEffect(() => {
  //   const setSampleQuestions = () => {
  //     switch (selectedIndustry) {
  //       case "THOR for Manufacturing":
  //         setSelectedIndustry("Thor-Manufacture");
  //         break;
  //       case "THOR for Retail":
  //         setSelectedIndustry("Thor-Retail");
  //         break;
  //       case "THOR for Banking":
  //         setSelectedIndustry("Thor-Banking");
  //         break;
  //       case "THOR for Healthcare":
  //         setSelectedIndustry("Thor-Healthcare");
  //         break;
  //       default:
  //         setSelectedIndustry("Thor-Manufacture");
  //         break;
  //     }
  //   };
  //   setSampleQuestions();
  // }, [selectedIndustry]);

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
          } mb-3 ${selectedIndustry === item.Title ? activeIndustry : ""}`}
          onClick={() => setSelectedIndustry(item.Title)}
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
