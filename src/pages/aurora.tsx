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
            gatsbyImageData(formats: PNG, placeholder: BLURRED)
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
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
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
              gatsbyImageData(formats: PNG, height: 326, placeholder: BLURRED)
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
    <title>::NXT Tarento - Aurora::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}aurora/`} />
    <meta name="title" content="NXT Tarento - Aurora" />
    <meta
      name="description"
      content="Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. "
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${process.env.GATSBY_SITE_URL}aurora/`} />
    <meta property="og:title" content="NXT Tarento - Aurora" />
    <meta
      property="og:description"
      content="Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. "
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/abb964b52c0286769f800618508f54d6/a52df/aurora_feature_6_db0ae1fd1c.png`}
    />
    <meta property="og:site_name" content="Aurora" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}aurora/`}
    />
    <meta property="twitter:title" content="NXT Tarento - Aurora" />
    <meta
      property="twitter:description"
      content="Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. "
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/abb964b52c0286769f800618508f54d6/a52df/aurora_feature_6_db0ae1fd1c.png`}
    />
  </>
);
