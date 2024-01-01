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
      <ul className="skip-links">
        <li>
          <a href="#pulzMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <PulseHeroBanner
        title={data[currentLang]?.HeroBanner?.Title}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Image}
      />
      <section id="pulzMain">
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
      </section>
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
    <title>::NXT Tarento - Pulse::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}pulse/`} />
    <meta name="title" content="NXT Tarento - Pulse" />
    <meta
      name="description"
      content="Make Informed decisions. Take your business to the next level."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${process.env.GATSBY_SITE_URL}pulse/`} />
    <meta property="og:title" content="NXT Tarento - Pulse" />
    <meta
      property="og:description"
      content="Make Informed decisions. Take your business to the next level."
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/2b02791991d27c06385b3209cdf1f960/25a33/pulse_Img_cde3adbc86.png`}
    />
    <meta property="og:site_name" content="Pulz" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}pulse/`}
    />
    <meta property="twitter:title" content="NXT Tarento - Pulse" />
    <meta
      property="twitter:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/2b02791991d27c06385b3209cdf1f960/25a33/pulse_Img_cde3adbc86.png`}
    />
  </>
);
