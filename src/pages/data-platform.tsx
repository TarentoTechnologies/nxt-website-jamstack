import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForAccelerators } from "../components/banners/HeroBannerForAccelerators";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
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
      <ul className="skip-links">
        <li>
          <a href="#boltMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForAccelerators
        title={data[currentLang]?.HeroBanner?.Title}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Image}
        logosrc={data[currentLang]?.HeroBanner?.Logo}
        subText={data[currentLang]?.HeroBanner?.SubText}
      />
      <section id="boltMain">
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
      </section>
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
      seo {
        metaTitle
        metaDescription
        canonicalURL
        metaViewport
        keywords
        metaImage {
          localFile {
            url
          }
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

export default DataPlatformPage;

export const Head: HeadFC = ({ data }: DataPlatformPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);
  return (
    <Seo
      metaTitle={data[currentLang]?.seo?.metaTitle}
      metaDesc={data[currentLang]?.seo?.metaDescription}
      metaImg={data[currentLang]?.seo?.metaImage?.localFile?.url}
      canonicalUrl={data[currentLang]?.seo?.canonicalURL}
      metaViewport={data[currentLang]?.seo?.metaViewport}
      keywords={data[currentLang]?.seo?.keywords}
    />
  );
};
