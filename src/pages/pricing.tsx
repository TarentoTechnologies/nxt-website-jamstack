import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import { ContactUsLayout, HeroText, PricingList } from "../layouts/pricing";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface PricingPageProps {
  data: any;
}

const PricingPage: React.FC<PageProps> = ({ data }: PricingPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

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
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
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
