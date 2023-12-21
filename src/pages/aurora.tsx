import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { HowItWorks, Stories, VideoSection } from "../layouts/aurora";
import { FooterSection } from "../layouts/common";
import { FeaturesLayout } from "../layouts/rain";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface AuroraPageProps {
  data: any;
}

const AuroraPage: React.FC<PageProps> = ({ data }: AuroraPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        title={data[currentLang]?.HeroBanner?.Title}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        isAurora
      />
      <HowItWorks
        heading={data[currentLang]?.WorkingSectionTitle}
        imgSrc={data[currentLang]?.WorkingImg}
      />
      <VideoSection
        heading={data[currentLang]?.VideoData?.Title}
        listData={data[currentLang]?.VideoData?.KeyPoints}
        videoSrc={data[currentLang]?.AuroraVideo?.localFile?.url}
      />
      <FeaturesLayout
        title={data[currentLang]?.FeatureSectionTitle}
        cardsData={data[currentLang]?.FeatureCards}
        isImage={false}
      />
      <Stories
        title={data[currentLang]?.StorySectionTitle}
        cardsData={data[currentLang]?.StoryCards}
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query AuroraPage {
    en: strapiAurora(locale: { eq: "en" }) {
      HeroBanner {
        id
        withLogo
        isImage
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
          alternativeText
        }
      }
      WorkingSectionTitle
      WorkingImg {
        localFile {
          childImageSharp {
            gatsbyImageData(formats: PNG)
          }
        }
        alternativeText
        caption
      }
      AuroraVideo {
        localFile {
          url
        }
        alternativeText
      }
      VideoData {
        Title
        KeyPoints {
          ListItem
        }
      }
      FeatureSectionTitle
      FeatureCards {
        Heading
        SubText
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
          alternativeText
          caption
        }
      }
      StorySectionTitle
      StoryCards {
        Title
        Description {
          data {
            Description
          }
        }
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, height: 326)
            }
          }
          alternativeText
          caption
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

export default AuroraPage;

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
