import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import {
  FeaturesLayout,
  ReferencesLayout,
  WorkingLayout,
} from "../layouts/rain";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface RainPageProps {
  data: any;
}

const RainPage: React.FC<PageProps> = ({ data }: RainPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        title={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
        logo={data[currentLang]?.HeroBanner?.Logo?.localFile?.url}
        subTextBold
      />
      <WorkingLayout
        title={data[currentLang]?.HowItWorks?.SectionTitle}
        desc={data[currentLang]?.HowItWorks?.DescriptionOne}
        img={data[currentLang]?.HowItWorks?.ProcessImage?.localFile?.url}
      />
      <FeaturesLayout
        title={data[currentLang]?.FeatureSectionTitle}
        cardsData={data[currentLang]?.FeatureListCard}
        isImage={false}
        bgGrey
      />
      <ReferencesLayout
        title={data[currentLang]?.ReferenceSectionTitle}
        cardsData={data[currentLang]?.ReferenceCard}
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query RainPage {
    en: strapiRain(locale: { eq: "en" }) {
      HeroBanner {
        id
        withLogo
        isImage
        Title
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
            url
          }
          alternativeText
          caption
        }
        SubText
        Logo {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      HowItWorks {
        id
        SectionTitle
        ProcessImage {
          alternativeText
          caption
          localFile {
            url
          }
        }
        DescriptionOne
      }
      FeatureSectionTitle
      FeatureListCard {
        id
        SubText
        Heading
        Img {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
      }
      ReferenceCard {
        id
        Heading
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      ReferenceSectionTitle
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

export default RainPage;

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
