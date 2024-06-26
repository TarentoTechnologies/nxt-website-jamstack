import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
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
      <ul className="skip-links">
        <li>
          <a href="#pricingMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroText
        title={data[currentLang]?.HeroText?.Title}
        desc={data[currentLang]?.HeroText?.Description?.data?.Description}
      />
      <section id="pricingMain">
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
      </section>
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

export default PricingPage;

export const Head: HeadFC = ({ data }: PricingPageProps) => {
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
