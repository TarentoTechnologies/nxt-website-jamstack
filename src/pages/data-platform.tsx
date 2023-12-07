import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForAccelerators } from "../components/banners/HeroBannerForAccelerators";
import { Footer } from "../components/footer/Footer";
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
      { title: "Bolt - Data Platform", href: "/data-platform" },
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
      <Footer data={footerData} />
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
              gatsbyImageData(formats: PNG)
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
              gatsbyImageData(formats: PNG)
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
              gatsbyImageData(formats: PNG)
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
              gatsbyImageData(formats: PNG)
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
              gatsbyImageData(formats: PNG)
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
