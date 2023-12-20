import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import {
  GetInTouch,
  HowItWorks,
  KeyInsights,
  Plans,
  PulseHeroBanner,
} from "../layouts/pulse/index";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface PulsePageProps {
  data: any;
}

const PulsePage: React.FC<PageProps> = ({ data }: PulsePageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const footerData = {
    nxtLogoImg: NXTlogo,
    nxtLogoImgTitle: "NXT-logo",
    companyLogoImg: TarentoLogo,
    companyLogoImgTitle: "Tarento-logo",
    description:
      "NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento. We take pride in being unconventional with our approaches while retaining the passion with which we work.",
    mailId: "hello@tarento.com",
    levelOneHeading: "Direct Links",
    levelOneList: [
      { title: "Home", href: "nxt.html" },
      { title: "Technology", href: "technology.html" },
      { title: "Design", href: "design-process.html" },
      { title: "Innovation", href: "nxt-innovation.html" },
      { title: "Pricing", href: "pricing.html" },
    ],
    levelTwoHeading: "Tech & Innovations",
    levelTwoList: [
      { title: "Bolt - Data Platform", href: "data-platform.html" },
      { title: "Rain - Analytics", href: "rain.html" },
      { title: "Thor - Chatbot", href: "thor.html" },
      { title: "GovTech", href: "govtech.html" },
      { title: "Customer Experience", href: "customer-experience.html" },
    ],
    levelThreeHeading: "Direct Links",
    levelThreeList: [
      { title: "Home", href: "https://www.tarento.com/" },
      { title: "About us", href: "https://www.tarento.com/about/" },
      { title: "Services", href: "https://www.tarento.com/services/" },
      { title: "Careers", href: "https://www.tarento.com/careers/" },
    ],
    levelFourHeading: "Programmes",
    levelFourList: [
      { title: "Lead", href: "https://www.tarento.com/lead/" },
      { title: "Blixt", href: "https://www.tarento.com/blixt/" },
    ],
    rightsText: "All rights reserved © 2023 Tarento Technologies.",
  };

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <PulseHeroBanner
        title={data[currentLang]?.HeroBanner?.Title}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Image?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Image?.alternativeText}
      />
      <HowItWorks
        heading={data[currentLang]?.HowItWorks?.SectionTitle}
        imgSrc={data[currentLang]?.HowItWorks?.ProcessImage?.localFile?.url}
        levelOneText={data[currentLang]?.HowItWorks?.DescriptionOne}
        levelTwoText={data[currentLang]?.HowItWorks?.DescriptionTwo}
        levelThreeText={data[currentLang]?.HowItWorks?.DescriptionThree}
      />
      <KeyInsights
        heading={data[currentLang]?.InsightSectionTitle}
        cardList={data[currentLang]?.KeyInsightImages}
      />
      <Plans
        heading={data[currentLang]?.PlansTitleDescription?.Title}
        subText={data[currentLang]?.PlansTitleDescription?.Description}
        cardData={data[currentLang]?.PlanCards}
      />
      <GetInTouch
        heading={data[currentLang]?.GetInTouch?.Title}
        subText={data[currentLang]?.GetInTouch?.Description}
        btnLabel={data[currentLang]?.GetInTouch?.Tag?.Label}
        btnLink={data[currentLang]?.GetInTouch?.Tag?.Link}
        imgSrc={data[currentLang]?.GetInTouch?.ImgSrc?.localFile?.url}
        imgAltText={data[currentLang]?.GetInTouch?.ImgSrc?.alternativeText}
      />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query PulsePage {
    en: strapiPulse(locale: { eq: "en" }) {
      HeroBanner {
        Title
        Description
        Image {
          localFile {
            url
          }
          alternativeText
        }
      }
      HowItWorks {
        SectionTitle
        DescriptionOne
        DescriptionTwo
        DescriptionThree
        ProcessImage {
          localFile {
            url
          }
          alternativeText
        }
      }
      InsightSectionTitle
      KeyInsightImages {
        Image {
          localFile {
            url
          }
          alternativeText
        }
      }
      PlansTitleDescription {
        Title
        Description
      }
      PlanCards {
        Title
        KeyPoints {
          ListItem
        }
      }
      GetInTouch {
        Title
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        ImgSrc {
          localFile {
            url
          }
          alternativeText
        }
        Tag {
          Label
          Link
        }
      }
    }
  }
`;

export default PulsePage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Technology design and Innovation::</title>
    <link rel="canonical" href="https://nxt.tarento.com/" />
    <meta name="title" content="NXT Tarento" />
    <meta
      name="description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nxt.tarento.com/" />
    <meta property="og:title" content="NXT Tarento" />
    <meta
      property="og:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta property="twitter:url" content="https://nxt.tarento.com/" />
    <meta property="twitter:title" content="NXT Tarento" />
    <meta
      property="twitter:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta property="twitter:image" content="" />
  </>
);
