import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import boltImg from "../../static/images/bolt_thumb.svg";
import TarentoLogo from "../../static/images/company-logo.svg";
import NXTlogo from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Footer } from "../components/footer/Footer";
import {
  AI,
  Feature,
  OtherSolution,
  UserEngagement,
} from "../layouts/customer-experience";
import { ContactUsLayout } from "../layouts/govtech";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface CustomerExperiencePageProps {
  data: any;
}

const CustomerExperiencePage: React.FC<PageProps> = ({
  data,
}: CustomerExperiencePageProps) => {
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
      <HeroBannerForTDI
        title={data[currentLang]?.HeroBanner?.Title}
        subText={data[currentLang]?.HeroBanner?.SubText}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        description={data[currentLang]?.HeroBanner?.Description}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
        subTextBold
      />
      <Feature
        title={data[currentLang]?.CXTitle}
        list={data[currentLang]?.CXFeatureList}
      />
      <AI
        title={data[currentLang]?.CXAITitle}
        imgCaption={data[currentLang]?.CXAIImage?.caption}
        imgSrc={data[currentLang]?.CXAIImage?.localFile?.url}
      />
      {data[currentLang]?.CXList.length > 0 &&
        data[currentLang]?.CXList?.map((item: any, index: number) => {
          return (
            <UserEngagement
              id={item?.id}
              title={item?.Title}
              imgSrc={item?.Image?.localFile?.url}
              ctaText={item?.CTAText}
              ctaLink={item?.CTALink}
              list={item?.ListItems}
            />
          );
        })}

      <OtherSolution
        title={data[currentLang]?.OtherSolutionsTitle}
        list={data[currentLang]?.SolutionsCard}
        description={data[currentLang]?.OtherSolutionsDescription}
      />
      <ContactUsLayout
        heading={data[currentLang]?.AreYouInterested?.Title}
        desc={data[currentLang]?.AreYouInterested?.Description}
        CTAlabel={data[currentLang]?.AreYouInterested?.CTAText}
        CTAlink={data[currentLang]?.AreYouInterested?.CTALink}
        isCTAMail={data[currentLang]?.AreYouInterested?.isMail}
      />
      <Footer data={footerData} />
    </main>
  );
};

export const query = graphql`
  query CustomerExperiencePackPage {
    en: strapiCustomerExperiencePack(locale: { eq: "en" }) {
      HeroBanner {
        id
        Title
        SubText
        withLogo
        isImage
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      CXTitle
      CXFeatureList {
        id
        Heading
        SubText
        Img {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      CXAITitle
      CXAIImage {
        alternativeText
        caption
        localFile {
          url
        }
      }
      CXList {
        id
        Title
        Image {
          alternativeText
          caption
          localFile {
            url
          }
        }
        CTAText
        CTALink
        ListItems {
          id
          ListItem
        }
      }
      OtherSolutionsTitle
      OtherSolutionsDescription
      SolutionsCard {
        id
        Title
        Link
        BackgroundImage {
          localFile {
            url
          }
        }
        Logo {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      AreYouInterested {
        id
        isMail
        Title
        Description
        CTAText
        CTALink
      }
    }
  }
`;

export default CustomerExperiencePage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Customer Experience Pack::</title>
    <link rel="canonical" href="https://nxt.tarento.com/data-platform" />
    <meta name="title" content="::NXT Tarento - Customer Experience Pack::" />
    <meta
      name="description"
      content="Aurora customer experience platform brings in the best of data engineering, analytics and user experience 
    design to enable a superior customer support experience."
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
      content="::NXT Tarento - Customer Experience Pack::"
    />
    <meta
      property="og:description"
      content="Aurora customer experience platform brings in the best of data engineering, analytics and user experience 
    design to enable a superior customer support experience."
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
      content="::NXT Tarento - Customer Experience Pack::"
    />
    <meta
      property="twitter:description"
      content="Aurora customer experience platform brings in the best of data engineering, analytics and user experience 
    design to enable a superior customer support experience."
    />
    <meta property="twitter:image" content="" />
  </>
);
