import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import rainHero from "../../static/images/ai-img.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import featureImg1 from "../../static/images/features 1.jpg";
import featureImg2 from "../../static/images/features 2.jpg";
import featureImg3 from "../../static/images/features 3.jpg";
import featureImg4 from "../../static/images/features 4.jpg";
import featureImg5 from "../../static/images/features 5.jpg";
import featureImg6 from "../../static/images/features 6.jpg";
import NXTlogo from "../../static/images/logo-inner.svg";
import rainLogo from "../../static/images/rain.svg";
import rainData from "../../static/images/rain_data.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
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
      <Footer data={footerData} />
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
              gatsbyImageData(formats: PNG)
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
              gatsbyImageData(formats: PNG)
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
