import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import techHero from "../../static/images/tech-hero.png";
import { Footer } from "../components/footer/Footer";
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

  const heroBannerData = {
    title:
      "Creativity is thinking up new things.  Innovation is doing new things.",
    img: techHero,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Maecenas sollicitudin porttitor gravida. Donec elementum tincidunt rutrum. Vivamus et ligula libero.",
  };

  const showCaseData = {
    heading: "Showcase",
    list: [
      {
        id: 0,
        title: "Bihar Museum​",
        description:
          "Bihar Museum is a museum located in Patna. It was partially opened in August 2015. 'The children's museum', the main entrance area, and an orientation theatre were the only parts opened to the public in August 2015. Later, in October 2017 remaining galleries were also opened.",
        imgSrc: "https://picsum.photos/seed/picsum/570/345",
        imgAlt: "Bihar Museum",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
      {
        id: 1,
        title: "UPSMF",
        description:
          "With the goal of reaching out to large numbers of smartphone users, the new mAadhaar is released by the Unique Identification Authority of India. The App features an array of Aadhaar services and a personalized section for the Aadhaar holder who can carry their Aadhaar information in form of a soft copy, instead of carrying a physical copy all the time",
        imgSrc: "https://picsum.photos/seed/picsum/570/345",
        imgAlt: "UPSMF",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
      {
        id: 2,
        title: "NSDC",
        description:
          "CellMark is an employee-owned independent supply chain services company. We are here to make your business operations easier and support your trade.",
        imgSrc: "",
        imgAlt: "",
        ctaLink: "https://www.google.com",
        ctaText: "Read More",
      },
    ],
  };

  const allOtherClientsData = {
    heading: "All other clients",
    ctaText: "Load more",
    list: [
      {
        id: 0,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Spinverse",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Spinverse",
        description:
          "Spinverse is the Nordic leader in innovation consulting, helping customers grow and solve global challenges with innovations. Our experts are committed to support customers to secure public funding, find partners for collaboration and make an impact with ground-breaking projects.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 1,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "CellMark",
        tag: "Real estate",
        tagVariant: "blue",
        title: "CellMark",
        description:
          "CellMark is an employee-owned independent supply chain services company. We are here to make your business operations easier and support your trade. Whether it’s across the street or across the globe.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 2,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "EV Services",
        tag: "Real estate",
        tagVariant: "blue",
        title: "EV Services",
        description:
          "EV Services was founded in 2018 in Bergen, Norway. The EV capital of the world. Our strategic placed service hubs, experienced management/owner group and the fact we only service electric vehicles enables us to organise our workflow on a new level and thus save time and costs. We work to always exceed customer expectations.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 3,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Pandora",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Pandora",
        description:
          "Pandora began designing its beloved charms in the year 2000. Each charm has a meaning, some times many meanings, one from its designer and more lent to it by the person who wears and loves it.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 4,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Paradiset",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Paradiset",
        description:
          "Paradiset is an online food marketplace designed for purchasing meals from restaurants. The company buys from the manufacturer and sell their products so users can shop the products from manufacturers, enabling customers to access fresh and sustainable food.",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
      {
        id: 5,
        imgSrc: "https://picsum.photos/seed/picsum/370/226",
        imgAlt: "Asen & Overlid",
        tag: "Real estate",
        tagVariant: "blue",
        title: "Asen & Overlid",
        description:
          "PropertyGuru Group is Southeast Asia’s pioneering and most trusted property  technology company. It aims at making finding a home a straightforward and  transparent process for everyone involved. This project involved redesign of the agent performance management system",
        ctaText: "Read More",
        ctaLink: "https://www.google.com",
      },
    ],
  };

  const areYouInterestedData = {
    heading: "Are you interested?",
    desc: "Innovation is now more important than ever in Today’s world. To stand out ina crowded market, business leaders need to focus. on different ways they can keep up with evolving demand.",
    CTAlabel: "Contact us",
    CTAlink: "mailto:hello@tarento.com;",
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

  return (
    <main className="">
      <HeroBanner heroBannerData={data[currentLang]?.HeroSection} />
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
      <Footer data={footerData} />
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
                gatsbyImageData(formats: PNG)
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
