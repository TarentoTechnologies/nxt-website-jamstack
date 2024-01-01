import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForAccelerators } from "../components/banners/HeroBannerForAccelerators";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import {
  Feature,
  Form,
  KeyInsights,
  WorkingProcess,
} from "../layouts/data-platform";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface DataPlatformPageProps {
  data: any;
}

const DataPlatformPage: React.FC<PageProps> = ({
  data,
}: DataPlatformPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForAccelerators
        title={data[currentLang]?.HeroBanner?.Title}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Image}
        logosrc={data[currentLang]?.HeroBanner?.Logo}
        subText={data[currentLang]?.HeroBanner?.SubText}
      />
      <WorkingProcess
        sectionTitle={data[currentLang]?.HowItWorks?.SectionTitle}
        processImage={data[currentLang]?.HowItWorks?.ProcessImage}
        descriptionOne={data[currentLang]?.HowItWorks?.DescriptionOne}
        descriptionTwo={data[currentLang]?.HowItWorks?.DescriptionTwo}
        descriptionThree={data[currentLang]?.HowItWorks?.DescriptionThree}
      />
      <KeyInsights
        sectionTitle={data[currentLang]?.InsightSectionTitle}
        insightsData={data[currentLang]?.InsightsCard}
      />
      <Feature
        sectionTitle={data[currentLang]?.FeatureSectionTitle}
        featureCardData={data[currentLang]?.FeatureListCard}
      />
      <Form
        id={data[currentLang]?.CTASection?.id}
        sectionTitle={data[currentLang]?.CTASection?.Title}
        description={data[currentLang]?.CTASection?.Description}
        ctaLink={data[currentLang]?.CTASection?.CTALink}
        ctaLabel={data[currentLang]?.CTASection?.CTAText}
        scannerImage={data[currentLang]?.CTASection?.ScannerImage}
        isCTAEmail={data[currentLang]?.CTASection?.isEmail}
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query DataPlatform {
    en: strapiDataPlatform(locale: { eq: "en" }) {
      HeroBanner {
        id
        Title
        SubText
        Description
        Logo {
          alternativeText
          caption
          localFile {
            url
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
      HowItWorks {
        id
        SectionTitle
        ProcessImage {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        DescriptionOne
        DescriptionTwo
        DescriptionThree
      }
      InsightSectionTitle
      InsightsCard {
        Caption
        id
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
      FeatureSectionTitle
      FeatureListCard {
        id
        Caption
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
      CTASection {
        id
        Title
        ScannerImage {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        CTAText
        CTALink
        isEmail
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

export default DataPlatformPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::Tarento - NXT - BOLT Data Information Insight.::</title>
    <link rel="canonical" href="https://nxt.tarento.com/data-platform" />
    <meta
      name="title"
      content="::Tarento - NXT - BOLT Data Information Insight.::"
    />
    <meta
      name="description"
      content="Make reliable, data driven decisions. Take your business to the next level with our data-platform."
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nxt.tarento.com/data-platform" />
    <meta
      property="og:title"
      content="::Tarento - NXT - BOLT Data Information Insight::"
    />
    <meta
      property="og:description"
      content="Make reliable, data driven decisions. Take your business to the next level with our data-platform."
    />
    <meta property="og:image" content="" />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta
      property="twitter:url"
      content="https://nxt.tarento.com/data-platform"
    />
    <meta
      property="twitter:title"
      content="::Tarento - NXT - BOLT Data Information Insight::"
    />
    <meta
      property="twitter:description"
      content="Make reliable, data driven decisions. Take your business to the next level with our data-platform."
    />
    <meta property="twitter:image" content="" />
  </>
);
