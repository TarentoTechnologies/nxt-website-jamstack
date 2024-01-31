import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
import { FooterSection } from "../layouts/common";
import {
  GetInTouch,
  HowItWorks,
  KeyInsights,
  Plans,
  PulseHeroBanner,
} from "../layouts/pulse/index";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface PulsePageProps {
  data: any;
}

const PulsePage: React.FC<PageProps> = ({ data }: PulsePageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#pulzMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <PulseHeroBanner
        title={data[currentLang]?.HeroBanner?.Title}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Image}
      />
      <section id="pulzMain">
        <HowItWorks
          heading={data[currentLang]?.HowItWorks?.SectionTitle}
          imgSrc={data[currentLang]?.HowItWorks?.ProcessImage?.localFile}
          levelOneText={data[currentLang]?.HowItWorks?.DescriptionOne}
          levelTwoText={data[currentLang]?.HowItWorks?.DescriptionTwo}
          levelThreeText={data[currentLang]?.HowItWorks?.DescriptionThree}
        />
        <KeyInsights
          heading={data[currentLang]?.InsightSectionTitle}
          cardList={data[currentLang]?.KeyInsightImages}
        />
        <Plans
          heading={data[currentLang]?.PlansTitleDescription?.Title}
          subText={data[currentLang]?.PlansTitleDescription?.Description}
          cardData={data[currentLang]?.PlanCards}
        />
        <GetInTouch
          heading={data[currentLang]?.GetInTouch?.Title}
          subText={data[currentLang]?.GetInTouch?.Description}
          btnLabel={data[currentLang]?.GetInTouch?.Tag?.Label}
          btnLink={data[currentLang]?.GetInTouch?.Tag?.Link}
          imgSrc={data[currentLang]?.GetInTouch?.ImgSrc}
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
  query PulsePage {
    en: strapiPulse(locale: { eq: "en" }) {
      HeroBanner {
        Title
        Description
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
      }
      HowItWorks {
        SectionTitle
        DescriptionOne
        DescriptionTwo
        DescriptionThree
        ProcessImage {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
      }
      InsightSectionTitle
      KeyInsightImages {
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
            url
          }
          alternativeText
          caption
        }
        isImage
      }
      PlansTitleDescription {
        Title
        Description
      }
      PlanCards {
        Title
        KeyPoints {
          ListItem
        }
      }
      GetInTouch {
        Title
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        ImgSrc {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
        Tag {
          Label
          Link
        }
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

export default PulsePage;

export const Head: HeadFC = ({ data }: PulsePageProps) => {
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
