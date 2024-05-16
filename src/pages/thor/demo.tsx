import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import industryIcon1 from "../../../static/icons/Group 28.png";
import industryIcon2 from "../../../static/icons/Group 427319126.png";
import industryIcon3 from "../../../static/icons/Group 427319136.png";
import fCard from "../../../static/images/Group 39.png";
import { Seo } from "../../components/seo/Seo";
import { hideForSmallScreens } from "../../layouts/thor-demo/ThorDemo.module.css";
import { ChatSection } from "../../layouts/thor-demo/components/ChatSection";
import { Examples } from "../../layouts/thor-demo/components/Examples";
import { Industries } from "../../layouts/thor-demo/components/Industries";
import { Navbar } from "../../layouts/thor-demo/components/Navbar";
import { langSelected as langSelectedAtom } from "../../states/atoms";

interface THORDemoPageProps {
  data: any;
}

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
  Examples: [
    "What is our most popular product?",
    "Which store is having the most sales today?",
    "Contact information of the area manager",
    "Store wise sales comparison for last one week",
  ],
};

const THORDemoPage: React.FC<PageProps> = ({ data }: THORDemoPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  return (
    <main className="">
      <Navbar />
      <div className="d-flex">
        <div className={`w-25`}>
          <Industries data={industryData} />
        </div>
        <div className={`w-50`}>
          <ChatSection data={chatSectionData} />
        </div>
        <div className={`w-25`}>
          <Examples data={examplesData} />
        </div>
      </div>
    </main>
  );
};

// export const query = graphql`
//   query RAINDemoApp {
//     en: strapiDemoApp(locale: { eq: "en" }, Slug: { eq: "RAIN-demo" }) {
//       id
//       Slug
//       AppURL
//       seo {
//         metaTitle
//         metaDescription
//         canonicalURL
//         metaViewport
//         keywords
//         metaImage {
//           localFile {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

export default THORDemoPage;

export const Head: HeadFC = ({ data }: THORDemoPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  return (
    <Seo
      metaTitle={data[currentLang]?.seo?.metaTitle}
      metaDesc={data[currentLang]?.seo?.metaDescription}
      metaImg={data[currentLang]?.seo?.metaImage?.localFile?.url}
      canonicalUrl={data[currentLang]?.seo?.canonicalURL}
      metaViewport={data[currentLang]?.seo?.metaViewport}
      keywords={data[currentLang]?.seo?.keywords}
    />
  );
};
