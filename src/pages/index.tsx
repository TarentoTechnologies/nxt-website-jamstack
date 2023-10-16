import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import boltLogo from "../../static/images/bolt_dark.svg";
import boltImg from "../../static/images/bolt_thumb.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import designLogo from "../../static/images/design.svg";
import govTechLogo from "../../static/images/govTech_icon.svg";
import govTechImg from "../../static/images/govtech_thumb.svg";
import innovationLogo from "../../static/images/inovation.svg";
import headLogo from "../../static/images/logo-head.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import mainLogo from "../../static/images/logo-main.svg";
import pyramidImage from "../../static/images/pyramid.svg";
import rainLogo from "../../static/images/rain.svg";
import rainImg from "../../static/images/rain_thumb.svg";
import techLogo from "../../static/images/technology.svg";
import thorLogo from "../../static/images/thor_dark.svg";
import thorImg from "../../static/images/thor_thumb.svg";
import { HeroBanner } from "../components/banners/HeroBanner";
import { PyramidBanner } from "../components/banners/PyramidBanner";
import { Footer } from "../components/footer/Footer";
import { AgencyPortfolio, DesignPortfolio } from "../layouts/home";
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

  const productCardData = [
    {
      title: "BOLT - Data platform",
      bgImg: boltImg,
      logo: boltLogo,
    },
    {
      title: "RAIN - Analytics",
      bgImg: rainImg,
      logo: rainLogo,
    },
    {
      title: "THOR - AI Assistant & Chatbots",
      bgImg: thorImg,
      logo: thorLogo,
    },
    {
      title: "Gov Tech",
      bgImg: govTechImg,
      logo: govTechLogo,
    },
    {
      title: "Customer Experience Pack",
      bgImg: govTechImg,
      logo: govTechLogo,
    },
  ];

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
      { title: "Bolt - Data Platform", href: "data-platform.html" },
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

  const agencyPortfolioData = {
    title: "Agency Portfolio",
    ctaText: "View All",
    ctaLink: "/agency-portfolio",
    description:
      "Bihar Museum is a museum located in Patna. It was partially opened in August 2015. 'The children's museum', the main entrance area, and an orientation theatre were the only parts opened to the public in August 2015.",
    list: [
      {
        id: 0,
        title: "Spinverse​",
        description:
          "Spinverse is the Nordic leader in innovation consulting, helping customers grow and solve global challenges with innovations. Our experts are committed to support customers to secure public funding, find partners for collaboration and make an impact with ground-breaking projects.",
        tag: "Productivity",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Spinverse",
      },
      {
        id: 1,
        title: "CellMark",
        description:
          "CellMark is an employee-owned independent supply chain services company. We are here to make your business operations easier and support your trade. Whether it’s across the street or across the globe.",
        tag: "Productivity",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "CellMark",
      },
      {
        id: 2,
        title: "EV Services",
        description:
          "EV Services was founded in 2018 in Bergen, Norway. The EV capital of the world. Our strategic placed service hubs, experienced management/owner group and the fact we only service electric vehicles enables us to organise our workflow on a new level and thus save time and costs. We work to always exceed customer expectations.",
        tag: "Productivity",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "EV Services",
      },
    ],
  };

  const designPortfolioData = {
    title: "Design Portfolio",
    ctaText: "View All",
    ctaLink: "/design-portfolio",
    description:
      "Bihar Museum is a museum located in Patna. It was partially opened in August 2015. 'The children's museum', the main entrance area, and an orientation theatre were the only parts opened to the public in August 2015.",
    list: [
      {
        id: 0,
        title: "iGOT - Karmayogi​",
        description:
          "iGOT Karmayogi is an online solutioning platform, developed as an integral part of the Digital India stack for capacity building of all government employees.​",
        tag: "Public Administration",
        ctaText: "Read More",
        ctaLink: "/design-portfolio-detail",
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "iGOT - Karmayogi",
      },
      {
        id: 1,
        title: "mAadhaar​",
        description:
          "With the goal of reaching out to large numbers of smartphone users, the new mAadhaar is released by the Unique Identification Authority of India.",
        tag: "Public Administration",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "mAadhaar​",
      },
      {
        id: 2,
        title: "ASK Portal",
        description:
          "'Aadhaar Seva Kendra' or ASK is a single stop destination for all Aadhaar services for the residents. Managed directly by UIDAI, the ASK offer dedicated Aadhaar enrolment",
        tag: "Public Administration",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "ASK Portal",
      },
    ],
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
    }
    enDesignPortfolios: allStrapiDesignPortfolio(
      filter: { locale: { eq: "en" } }
      sort: { updatedAt: DESC }
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
