import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
import { FooterSection } from "../layouts/common";
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

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#customerExperienceMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
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
      <section id="customerExperienceMain">
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
      </section>
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
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

export default CustomerExperiencePage;

export const Head: HeadFC = ({ data }: CustomerExperiencePageProps) => {
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
