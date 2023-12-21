import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
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

  const currentFooterSection = currentLang + "FooterSection";

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
      {data[currentLang]?.Steps.map((item: any, index: any) => (
        <StepSection
          key={index}
          title={item?.Title}
          description={item?.Description?.data?.Description}
          imgSrc={item?.ImgSrc?.localFile?.url}
          cardHeading={item?.CardHeading}
          keyPoints={item?.KeyPoints}
          bgGrey={item?.BgGrey}
        />
      ))}
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
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
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
