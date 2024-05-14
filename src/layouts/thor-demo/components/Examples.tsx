import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  exampleQuestions,
  industrySelected,
  questionSelected,
  themeState,
} from "../../../states/atoms";
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
  const [selectedIndustry] = useRecoilState(industrySelected);
  const [questions, setQuestions] = useRecoilState(exampleQuestions);
  // const setQuestionSelected = useSetRecoilState(questionSelected);
  const [selectedQuestion, setSelectedQuestion] =
    useRecoilState(questionSelected);

  const handleExampleClick = (question: string) => {
    // setQuestionSelected(question);
    setSelectedQuestion(question);
  };

  useEffect(() => {
    const setSampleQuestions = () => {
      switch (selectedIndustry) {
        case "THOR for Manufacturing":
          setQuestions([
            "Car models with rate less than 99999",
            "Get me the models within the price range of 16000 and 17000",
            "Get me the details of BMW",
          ]);
          break;
        case "THOR for Retail":
          setQuestions([
            "Give me the sales and profit for Office Supplies",
            "Profit for Furniture purchases",
            "Give me the number of purchases for Technology category",
            "Items with profit less than 1000",
          ]);
          break;
        case "THOR for Banking":
          setQuestions([
            "Customers with balance less than 1000",
            "Customers with 0 balance",
            "Customers with credit score less than 200",
            "Number of people with credit score more than 500",
          ]);
          break;
        case "THOR for Healthcare":
          setQuestions([
            "New cases on july 2020",
            "Get me the new covid cases in May 2020 to July 2020",
            "Get me the new covid deaths in May 2020 to July 2020",
            "New covid cases in Asia for the year 2021",
          ]);
          break;
        default:
          setQuestions([]);
          break;
      }
    };
    setSampleQuestions();
  }, [selectedIndustry, setQuestions]);
  // console.log(questions);

  return (
    <div className={`${theme === "dark" ? egSectionDark : egSectionLight}`}>
      <div
        className={`${
          theme === "dark" ? "text-white" : ""
        } ${thorSubTitle} pb-4`}
      >
        {data?.Title}
      </div>
      {questions?.map((item: any, index: number) => (
        <div
          key={index}
          className={`${theme === "dark" ? egCardDark : egCardLight} mb-4`}
          onClick={() => handleExampleClick(item)}
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
