import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import {
  HeroSection,
  LeadCountries,
  LeadSprints,
  StepSection,
  VideoSection,
} from "../layouts/lead";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface LeadPageProps {
  data: any;
}

const LeadPage: React.FC<PageProps> = ({ data }: LeadPageProps) => {
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
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        title={data[currentLang]?.HeroBanner?.Title}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.ImgAltText}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        logo={data[currentLang]?.HeroBanner?.Logo?.localFile?.url}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
        subTextBold
      />
      <HeroSection
        title={data[currentLang]?.HeroSection?.Title}
        description={
          data[currentLang]?.HeroSection?.Description?.data?.Description
        }
        cardList={data[currentLang]?.HeroSection?.CardList}
      />
      <StepSection
        title={data[currentLang]?.Steps[0]?.Title}
        description={
          data[currentLang]?.Steps[0]?.Description?.data?.Description
        }
        imgSrc={data[currentLang]?.Steps[0]?.ImgSrc?.localFile?.url}
        cardHeading={data[currentLang]?.Steps[0]?.CardHeading}
        keyPoints={data[currentLang]?.Steps[0]?.KeyPoints}
        bgGrey={data[currentLang]?.Steps[0]?.BgGrey}
      />
      <StepSection
        title={data[currentLang]?.Steps[1]?.Title}
        description={
          data[currentLang]?.Steps[1]?.Description?.data?.Description
        }
        imgSrc={data[currentLang]?.Steps[1]?.ImgSrc?.localFile?.url}
        cardHeading={data[currentLang]?.Steps[1]?.CardHeading}
        keyPoints={data[currentLang]?.Steps[1]?.KeyPoints}
        bgGrey={data[currentLang]?.Steps[1]?.BgGrey}
      />
      <StepSection
        title={data[currentLang]?.Steps[2]?.Title}
        description={
          data[currentLang]?.Steps[2]?.Description?.data?.Description
        }
        imgSrc={data[currentLang]?.Steps[2]?.ImgSrc?.localFile?.url}
        cardHeading={data[currentLang]?.Steps[2]?.CardHeading}
        keyPoints={data[currentLang]?.Steps[2]?.KeyPoints}
        bgGrey={data[currentLang]?.Steps[2]?.BgGrey}
      />
      <VideoSection videoSrc={data[currentLang]?.VideoSection?.videoSrc} />
      <LeadCountries
        title={data[currentLang]?.LeadCountries?.Title}
        description={
          data[currentLang]?.LeadCountries?.Description?.data?.Description
        }
        imgSrc={data[currentLang]?.LeadCountries?.ImgSrc?.localFile?.url}
        cardHeading={data[currentLang]?.LeadCountries?.CardHeading}
        keyPoints={data[currentLang]?.LeadCountries?.KeyPoints}
      />
      <LeadSprints
        title={data[currentLang]?.LeadSprints?.Title}
        cardData={data[currentLang]?.LeadSprints?.CardData}
      />
      <ContactUsLayout
        heading={data[currentLang]?.Interested?.Title}
        desc={data[currentLang]?.Interested?.Description}
        CTAlabel={data[currentLang]?.Interested?.CTAText}
        CTAlink={data[currentLang]?.Interested?.CTALink}
        isCTAMail={data[currentLang]?.Interested?.isMail}
      />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query LeadPage {
    en: strapiLead(locale: { eq: "en" }) {
      HeroBanner {
        id
        withLogo
        Title
        SubText
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          localFile {
            url
          }
        }
        ImgAltText
        Logo {
          localFile {
            url
          }
        }
      }
      HeroSection {
        Title
        Description {
          data {
            Description
          }
        }
        CardList {
          id
          Title
          Img {
            localFile {
              url
            }
          }
          SubText
          BgColor
        }
      }
      Steps {
        Title
        Description {
          data {
            Description
          }
        }
        ImgSrc {
          localFile {
            url
          }
        }
        CardHeading
        KeyPoints {
          id
          ListItem
        }
        BgGrey
      }
      VideoSection {
        videoSrc
      }
      LeadCountries {
        Title
        Description {
          data {
            Description
          }
        }
        ImgSrc {
          localFile {
            url
          }
        }
        CardHeading
        KeyPoints {
          ListItem
        }
      }
      LeadSprints {
        Title
        CardData {
          Heading
          Description {
            data {
              Description
            }
          }
          ImgSrc {
            localFile {
              url
            }
          }
        }
      }
      Interested {
        Title
        Description
        isMail
        CTAText
        CTALink
      }
    }
  }
`;

export default LeadPage;

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
