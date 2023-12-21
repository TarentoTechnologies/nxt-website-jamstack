import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import techHero from "../../static/images/tech-hero.png";
import {
  KeyInfoLayout,
  ResultLayout,
} from "../layouts/agency-portfolio-detail";
import { FooterSection } from "../layouts/common";
import {
  AllOtherClients,
  AreYouInterested,
  HeroBanner,
  Showcase,
} from "../layouts/design-portfolio";
import { About, RelatedPortfolio } from "../layouts/design-portfolio-detail";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface AgencyPortfolioDetailProps {
  data: any;
}

const AgencyPortfolioDetail: React.FC<PageProps> = ({
  data,
}: AgencyPortfolioDetailProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <HeroBanner heroBannerData={data[currentLang]?.HeroSection} isImage />
      <About data={data[currentLang]?.AboutSection} />
      <KeyInfoLayout data={data[currentLang]?.KeyInformation} />
      <ResultLayout
        sectionTitle={data[currentLang]?.ResultTitle}
        description={data[currentLang]?.ResultDescription}
      />
      <RelatedPortfolio
        data={data[currentLang]?.RelatedPortfolios}
        sectionTitle={data[currentLang]?.SectionFourTitle}
        portfolioPath="/agency-portfolio/"
      />
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query AgencyPortfolio($slug: String!) {
    en: strapiAgencyPortfolio(Slug: { eq: $slug }, locale: { eq: "en" }) {
      id
      HeroSection {
        id
        Title
        Description
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
        }
      }
      AboutSection {
        id
        Title
        Description {
          data {
            Description
            childMarkdownRemark {
              html
            }
          }
        }
        ColumnOneTitle
        ColumnOneValue
        ColumnTwoTitle
        ColumnTwoValue
        ColumnThreeTitle
        ColumnThreeValue
        ColumnFourTitle
        ColumnFourLink
      }
      RelatedPortfolios {
        id
        Title
        Tag
        Description
        CTAText
        CTALink
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
        }
      }
      SectionFourTitle
      ResultTitle
      ResultDescription {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      KeyInformation {
        id
        Title
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
        }
        DescriptionAlignment
        Description {
          data {
            childMarkdownRemark {
              html
            }
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

export default AgencyPortfolioDetail;

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
