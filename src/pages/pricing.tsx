import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import TarentoLogo from "../../static/images/company-logo.svg";
import navbarImg from "../../static/images/logo-inner.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { ContactUsLayout, HeroText, PricingList } from "../layouts/pricing";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface PricingPageProps {
  data: any;
}

const PricingPage: React.FC<PageProps> = ({ data }: PricingPageProps) => {
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
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroText
        title={data[currentLang]?.HeroText?.Title}
        desc={data[currentLang]?.HeroText?.Description?.data?.Description}
      />
      <PricingList
        heading={data[currentLang]?.PricingList[0]?.Heading}
        pricingData={data[currentLang]?.PricingList[0]?.PricingCards}
        additionalInfo={data[currentLang]?.PricingList[0]?.AdditionalInfo}
      />
      <PricingList
        heading={data[currentLang]?.PricingList[1]?.Heading}
        pricingData={data[currentLang]?.PricingList[1]?.PricingCards}
        additionalInfo={""}
      />
      <ContactUsLayout
        heading1={data[currentLang]?.ContactUs?.AreYouInterested?.Title}
        desc1={data[currentLang]?.ContactUs?.AreYouInterested?.Description}
        CTAlabel1={data[currentLang]?.ContactUs?.AreYouInterested?.CTAText}
        CTAlink1={data[currentLang]?.ContactUs?.AreYouInterested?.CTALink}
        heading2={data[currentLang]?.ContactUs?.AreYouSeller?.Title}
        desc2={data[currentLang]?.ContactUs?.AreYouSeller?.Description}
        CTAlabel2={data[currentLang]?.ContactUs?.AreYouSeller?.CTAText}
        CTAlink2={data[currentLang]?.ContactUs?.AreYouSeller?.CTALink}
      />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query PricingPage {
    en: strapiPricing(locale: { eq: "en" }) {
      HeroText {
        Title
        Description {
          data {
            Description
          }
        }
      }
      PricingList {
        Heading
        PricingCards {
          Title
          Logo {
            localFile {
              url
            }
          }
          Description
          BasePrice
          BaseList {
            ListItem
          }
          SupportPrice
          SupportList {
            ListItem
          }
          SupportText
          SupportSubtext
          withBtn
          Tag {
            Label
            Link
          }
          SpTitle
        }
        AdditionalInfo
      }
      ContactUs {
        AreYouInterested {
          Title
          Description
          CTAText
          CTALink
          isMail
        }
        AreYouSeller {
          Title
          Description
          CTAText
          CTALink
          isMail
        }
      }
    }
  }
`;

export default PricingPage;

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
