import React from "react";

import { ChatSection, Examples, Industries, Navbar } from "..";
import industryIcon1 from "../../../../static/icons/Group 28.png";
import industryIcon2 from "../../../../static/icons/Group 427319126.png";
import industryIcon3 from "../../../../static/icons/Group 427319136.png";
import fCard from "../../../../static/images/Group 39.png";
import {
  chatSectionStyles,
  exampleStyles,
  industryStyles,
} from "../ThorDemo.module.css";

export const ThorInteractive = () => {
  const industryData = [
    {
      Title: "THOR for Manufacturing",
      Logo: industryIcon1,
    },
    {
      Title: "THOR for Retail",
      Logo: industryIcon3,
    },
    {
      Title: "THOR for Banking",
      Logo: industryIcon2,
    },
    {
      Title: "THOR for Healthcare",
      Logo: industryIcon3,
    },
    // {
    //   Title: "THOR for CX",
    //   Logo: industryIcon3,
    // },
  ];

  const chatSectionData = {
    cardData: [
      {
        Title: "Tailored for your Industry",
        ImgSrc: fCard,
      },
      {
        Title: "Supports Common languages",
        ImgSrc: fCard,
      },
      {
        Title: "Automatic Prompt Suggestion",
        ImgSrc: fCard,
      },
    ],
    text1:
      "THOR is a powerful AI assistant that can be integrated deep into your business. THOR can help you run your business efficiently by providing you with key insights, answer your queries, provides you with data and alert you in need.",
    text2:
      "Here are some of the samples use cases on THOR for you to try out. Choose an Industry from the left pane and you can ask THOR in any of the common languages, either as text or voice. You can refer the right pane to see examples prompts for the selected domain/industry.",
  };

  const examplesData = {
    Title: "Here are some examples that you can try",
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className={`${industryStyles}`}>
          <Industries data={industryData} />
        </div>
        <div className={`${chatSectionStyles}`}>
          <ChatSection data={chatSectionData} />
        </div>
        <div className={`${exampleStyles}`}>
          <Examples data={examplesData} />
        </div>
      </div>
    </>
  );
};
