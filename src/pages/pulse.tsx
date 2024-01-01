import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
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

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <PulseHeroBanner
        title={data[currentLang]?.HeroBanner?.Title}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Image}
      />
      <HowItWorks
        heading={data[currentLang]?.HowItWorks?.SectionTitle}
        imgSrc={data[currentLang]?.HowItWorks?.ProcessImage?.localFile}
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
        imgSrc={data[currentLang]?.GetInTouch?.ImgSrc}
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
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
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
      }
      HowItWorks {
        SectionTitle
        DescriptionOne
        DescriptionTwo
        DescriptionThree
        ProcessImage {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
      }
      InsightSectionTitle
      KeyInsightImages {
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
            url
          }
          alternativeText
          caption
        }
        isImage
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
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
        Tag {
          Label
          Link
        }
      }
    }
    enFooterSection: strapiFooterSection(locale: { eq: "en" }) {
      id
      Footer {
        id
        PrimaryLogo {
          alternativeText
          caption
          localFile {
            url
          }
        }
        SecondaryLogo {
          alternativeText
          caption
          localFile {
            url
          }
        }
        PrimaryDescription {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        PrimaryLevelOneHeading
        PrimaryLevelOneList {
          id
          Label
          Link
        }
        PrimaryLevelTwoHeading
        PrimaryLevelTwoList {
          id
          Link
          Label
        }
        SecondaryLevelOneHeading
        SecondaryLevelOneList {
          id
          Link
          Label
        }
        SecondaryLevelTwoHeading
        SecondaryLevelTwoList {
          id
          Link
          Label
        }
        Copyright
        PrimaryLogoLink
        SecondaryLogoLink
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
