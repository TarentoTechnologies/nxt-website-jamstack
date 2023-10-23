import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import headLogo from "../../static/images/logo-head.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import mainLogo from "../../static/images/logo-main.svg";
import { HeroBanner } from "../components/banners/HeroBanner";
import { PyramidBanner } from "../components/banners/PyramidBanner";
import { Footer } from "../components/footer/Footer";
import {
  AgencyPortfolio,
  CTALayout,
  DesignPortfolio,
  OurProgramme,
} from "../layouts/home";
import { ProductCardLayout } from "../layouts/home/components/ProductCardLayout";
import { TriCardLayout } from "../layouts/home/components/TriCardLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface IndexPageProps {
  data: any;
}

const IndexPage: React.FC<PageProps> = ({ data }: IndexPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentDesignPortfolio = currentLang + "DesignPortfolios";
  const currentAgencyPortfolio = currentLang + "AgencyPortfolios";

  const heroBannerData = {
    logoMain: mainLogo,
    logoHead: headLogo,
    logoMainTitle: "NXT-main-logo",
    logoHeadTitle: "NXT-head-logo",
  };

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
      <HeroBanner data={heroBannerData} />
      <TriCardLayout data={data[currentLang]?.TriCards} />
      <PyramidBanner
        title={data[currentLang]?.PyramidTitle}
        description={data[currentLang]?.PyramidDescription}
        pyramidImg={data[currentLang]?.PyramidImage.localFile.url}
        btnDescr={data[currentLang]?.PyramidCTAText}
      />
      <ProductCardLayout data={data[currentLang]?.AcceleratorCards} />
      <OurProgramme
        sectionTitle={data[currentLang]?.ProgrammeSectionTitle}
        cards={data[currentLang]?.ProgrammeCards}
      />
      <AgencyPortfolio
        title={data[currentLang]?.HighlighterOneTitle}
        description={data[currentLang]?.HighlighterOneDescription}
        ctaText={data[currentLang]?.HighlighterOneCTAText}
        ctaLink={data[currentLang]?.HighlighterOneCTALink}
        agencyPortfolioData={data[currentAgencyPortfolio]?.nodes}
      />
      <DesignPortfolio
        title={data[currentLang]?.HighlighterTwoTitle}
        description={data[currentLang]?.HighlighterTwoDescription}
        ctaText={data[currentLang]?.HighlighterTwoCTAText}
        ctaLink={data[currentLang]?.HighlighterTwoCTALink}
        designPortfolioData={data[currentDesignPortfolio]?.nodes}
      />
      <CTALayout data={data[currentLang]?.CTA} />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query HomePage {
    en: strapiHome(locale: { eq: "en" }) {
      TriCards {
        id
        Title
        Icon {
          localFile {
            url
          }
        }
        CTALink
        BackgroundColor
      }
      PyramidTitle
      PyramidDescription
      PyramidImage {
        localFile {
          url
        }
      }
      PyramidCTAText
      PyramidCTALink
      ProgrammeSectionTitle
      AcceleratorCards {
        id
        Title
        Logo {
          localFile {
            url
          }
        }
        BackgroundImage {
          localFile {
            url
          }
        }
      }
      ProgrammeCards {
        id
        Title
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG)
            }
          }
        }
        Description
        CTAText
        CTALink
      }
      HighlighterOneTitle
      HighlighterOneDescription
      HighlighterOneCTAText
      HighlighterOneCTALink
      HighlighterTwoTitle
      HighlighterTwoDescription
      HighlighterTwoCTAText
      HighlighterTwoCTALink
      CTA {
        id
        Title
        Description
        CTAText
        CTALink
      }
    }
    enDesignPortfolios: allStrapiDesignPortfolio(
      filter: { locale: { eq: "en" } }
      sort: { updatedAt: DESC }
      limit: 3
    ) {
      nodes {
        PortfolioTag
        HeroSection {
          id
          Title
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: PNG)
              }
            }
          }
          Description
        }
        id
        Slug
        CTATextForDisplay
      }
    }
    enAgencyPortfolios: allStrapiAgencyPortfolio(
      filter: { locale: { eq: "en" } }
      sort: { updatedAt: DESC }
      limit: 3
    ) {
      nodes {
        PortfolioTag
        HeroSection {
          id
          Title
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: PNG)
              }
            }
          }
          Description
        }
        id
        Slug
        CTATextForDisplay
      }
    }
  }
`;

export default IndexPage;

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
