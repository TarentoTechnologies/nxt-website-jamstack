import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
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

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
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
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
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
          Video {
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
            gatsbyImageData(formats: PNG, placeholder: BLURRED)
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
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
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
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
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

export default ThorPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - THOR - AI Powered Assistant and Chatbot::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}thor/`} />
    <meta
      name="title"
      content="NXT Tarento - THOR - AI Powered Assistant and Chatbot"
    />
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
    <meta property="og:url" content={`${process.env.GATSBY_SITE_URL}thor/`} />
    <meta
      property="og:title"
      content="NXT Tarento - THOR - AI Powered Assistant and Chatbot"
    />
    <meta
      property="og:description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/6fb426207c6ee2394136eddec143fc08/7eaa0/multichannel_62a5520ef3.png`}
    />
    <meta property="og:site_name" content="THOR" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}thor/`}
    />
    <meta
      property="twitter:title"
      content="NXT Tarento - THOR - AI Powered Assistant and Chatbot"
    />
    <meta
      property="twitter:description"
      content="THOR is highly scalable, extensible and allows deep integration to any
      domain. Multi channel capabilities of THOR enables businesses to engage
      their users over a wide range of channels"
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/6fb426207c6ee2394136eddec143fc08/7eaa0/multichannel_62a5520ef3.png`}
    />
  </>
);
