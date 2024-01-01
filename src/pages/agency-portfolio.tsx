import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import {
  AllOtherClients,
  AreYouInterested,
  HeroBanner,
  Showcase,
} from "../layouts/design-portfolio";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface AgencyPortfolioProps {
  data: any;
}

const AgencyPortfolio: React.FC<PageProps> = ({
  data,
}: AgencyPortfolioProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);
  const [currentPostsForShowcase, setCurrentPostsForShowcase] =
    React.useState<any>([]);

  const currentAgencyPortfolioList = currentLang + "AgencyPortfolios";
  const currentFooterSection = currentLang + "FooterSection";

  const getShowCaseData = () => {
    let tempArray: any = [];

    data[currentAgencyPortfolioList]?.nodes.map(
      (listData: any, index: number) => {
        if (listData.ShowcasePost) {
          return tempArray.push(listData);
        }
      }
    );

    setCurrentPostsForShowcase(tempArray);
  };

  React.useEffect(() => {
    getShowCaseData();
  }, [data[currentAgencyPortfolioList]]);

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#agencyPortfolioMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBanner heroBannerData={data[currentLang]?.HeroSection} />
      <section id="agencyPortfolioMain">
        <Showcase
          sectionTitle={data[currentLang]?.SectionOneTitle}
          data={currentPostsForShowcase}
        />
        <AllOtherClients
          sectionTitle={data[currentLang]?.SectionTwoTitle}
          data={data[currentAgencyPortfolioList]?.nodes}
          ctaBtnText={data[currentLang]?.DynamicButtonText}
          portfolioPath="/agency-portfolio/"
        />
        <AreYouInterested data={data[currentLang]?.CTA} />
      </section>
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query DesignPortfolioListing {
    en: strapiAgencyPortfolioListing(locale: { eq: "en" }) {
      HeroSection {
        id
        Title
        Image {
          localFile {
            url
          }
        }
        Description
      }
      SectionOneTitle
      SectionTwoTitle
      CTA {
        id
        Title
        Description
        CTAText
        CTALink
      }
      DynamicButtonText
    }
    enAgencyPortfolios: allStrapiAgencyPortfolio(
      sort: { updatedAt: DESC }
      filter: { locale: { eq: "en" } }
    ) {
      nodes {
        id
        HeroSection {
          id
          Title
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: PNG, placeholder: BLURRED)
              }
            }
          }
          Description
        }
        CTATextForDisplay
        ShowcasePost
        Slug
        PortfolioTag
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

export default AgencyPortfolio;

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
    <meta
      property="og:image"
      content="https://www.tarento.com/static/780e7bd9e60e4b1f6f744287386bf866/3fa08/microsite-5.png"
    />

    {/* Twitter */}
    <meta property="twitter:card" content="" />
    <meta property="twitter:url" content="https://nxt.tarento.com/" />
    <meta property="twitter:title" content="NXT Tarento" />
    <meta
      property="twitter:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta
      property="twitter:image"
      content="https://www.tarento.com/static/780e7bd9e60e4b1f6f744287386bf866/3fa08/microsite-5.png"
    />
  </>
);
