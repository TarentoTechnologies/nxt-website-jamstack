import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  Avatars,
  CaseStudies,
  Features,
  MultiChannel,
  UseCases,
} from "../layouts/thor";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface ThorPageProps {
  data: any;
}

const ThorPage: React.FC<PageProps> = ({ data }: ThorPageProps) => {
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
      { title: "Thor - Chatbot", href: "/thor" },
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
      <HeroBannerForTDI
        title={data[currentLang]?.HeroBanner?.SubText}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        description={data[currentLang]?.HeroBanner?.Description}
        mainTitle={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
      />
      <Avatars
        title={data[currentLang]?.TwoAvatars?.PrimaryTitle}
        list={data[currentLang]?.TwoAvatars?.AvatarList}
        subText={data[currentLang]?.TwoAvatars?.PrimaryDescription}
      />
      <Features imgSrc={data[currentLang]?.Capabilities} />
      <MultiChannel
        title={data[currentLang]?.MultiChannelEngagement?.Title}
        subText={data[currentLang]?.MultiChannelEngagement?.Description}
        imgSrc={data[currentLang]?.MultiChannelEngagement?.Image}
        list={data[currentLang]?.MultiChannelEngagement?.ChannelList}
      />
      <CaseStudies
        title={data[currentLang]?.CaseStudiesTitle}
        list={data[currentLang]?.CaseStudiesList}
      />
      <UseCases
        title={data[currentLang]?.UseCaseTitle}
        list={data[currentLang]?.UseCasesList}
        subText={data[currentLang]?.UseCaseSubText}
      />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query ThorPage {
    en: strapiThor(locale: { eq: "en" }) {
      id
      HeroBanner {
        id
        isImage
        withLogo
        Title
        SubText
        Img {
          alternativeText
          caption
          localFile {
            url
          }
        }
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      TwoAvatars {
        id
        PrimaryTitle
        PrimaryDescription
        AvatarList {
          id
          Title
          Description
          Logo {
            alternativeText
            caption
            localFile {
              url
            }
          }
        }
      }
      Capabilities {
        alternativeText
        caption
        localFile {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
      }
      CaseStudiesTitle
      CaseStudiesList {
        id
        Heading
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Image {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
        }
      }
      MultiChannelEngagement {
        id
        Title
        Description
        Image {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
        }
        ChannelList {
          id
          Title
          Description
        }
      }
      UseCaseTitle
      UseCasesList {
        id
        Image {
          alternativeText
          caption
          localFile {
            url
          }
        }
        Caption
      }
      UseCaseSubText
    }
  }
`;

export default ThorPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - THOR - AI Powered Assistant and Chatbot::</title>
    <link rel="canonical" href="https://nxt.tarento.com/" />
    <meta name="title" content="NXT Tarento" />
    <meta
      name="description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nxt.tarento.com/thor" />
    <meta
      property="og:title"
      content="::NXT Tarento - THOR - AI Powered Assistant and Chatbot::"
    />
    <meta
      property="og:description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta property="twitter:url" content="https://nxt.tarento.com/thor" />
    <meta
      property="twitter:title"
      content="::NXT Tarento - THOR - AI Powered Assistant and Chatbot::"
    />
    <meta
      property="twitter:description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta property="twitter:image" content="" />
  </>
);
