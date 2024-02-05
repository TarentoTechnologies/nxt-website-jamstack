import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { WhatLEADCard } from "../components";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
import { FooterSection } from "../layouts/common";
import {
  HeroSection,
  LeadCountries,
  LeadSprints,
  StepSection,
  VideoSection,
} from "../layouts/lead";
import { LEADSprints, Process, WhatLead } from "../layouts/lead-v2";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface LeadV2PageProps {
  data: any;
}

const LeadV2Page: React.FC<PageProps> = ({ data }: LeadV2PageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#leadMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        title={data[currentLang]?.HeroBanner?.Title}
        img={data[currentLang]?.HeroBanner?.Img?.localFile}
        imgAltText={data[currentLang]?.HeroBanner?.ImgAltText}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        logo={data[currentLang]?.HeroBanner?.Logo}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
        isImage
        subTextBold
      />
      <section id="leadMain">
        <WhatLead
          title={data[currentLang]?.HeroSection?.Title}
          description={data[currentLang]?.HeroSection?.Description}
          cardList={data[currentLang]?.HeroSection?.CardList}
        />
        <Process
          sectionTitle={data[currentLang]?.ProcessCard?.Title}
          sectionContent={data[currentLang]?.ProcessCard?.Description}
          sectionImage={data[currentLang]?.ProcessCard?.Image}
          descriptionPos={data[currentLang]?.ProcessCard?.DescriptionAlignment}
        />
        <LEADSprints
          sectionTitle={data[currentLang]?.SectionHeader3}
          sectionList={data[currentLang]?.SectionList3}
        />
        {/* <HeroSection
          title={data[currentLang]?.HeroSection?.Title}
          description={
            data[currentLang]?.HeroSection?.Description?.data?.Description
          }
          cardList={data[currentLang]?.HeroSection?.CardList}
        /> */}
        {/* {data[currentLang]?.Steps.map((item: any, index: any) => (
          <StepSection
            key={index}
            title={item?.Title}
            description={item?.Description?.data?.Description}
            imgSrc={item?.ImgSrc?.localFile?.url}
            cardHeading={item?.CardHeading}
            keyPoints={item?.KeyPoints}
            bgGrey={item?.BgGrey}
          />
        ))}
        <VideoSection videoSrc={data[currentLang]?.VideoSection?.videoSrc} />
        <LeadCountries
          title={data[currentLang]?.LeadCountries?.Title}
          description={
            data[currentLang]?.LeadCountries?.Description?.data?.Description
          }
          imgSrc={data[currentLang]?.LeadCountries?.ImgSrc?.localFile?.url}
          cardHeading={data[currentLang]?.LeadCountries?.CardHeading}
          keyPoints={data[currentLang]?.LeadCountries?.KeyPoints}
        />
        <LeadSprints
          title={data[currentLang]?.LeadSprints?.Title}
          cardData={data[currentLang]?.LeadSprints?.CardData}
        />
        <ContactUsLayout
          heading={data[currentLang]?.Interested?.Title}
          desc={data[currentLang]?.Interested?.Description}
          CTAlabel={data[currentLang]?.Interested?.CTAText}
          CTAlink={data[currentLang]?.Interested?.CTALink}
          isCTAMail={data[currentLang]?.Interested?.isMail}
        /> */}
      </section>
      <FooterSection
        id={data[currentFooterSection]?.id}
        footerData={data[currentFooterSection]?.Footer}
      />
    </main>
  );
};

export const query = graphql`
  query LEADV2Page {
    en: strapiLeadV2(locale: { eq: "en" }) {
      id
      HeroBanner {
        id
        Title
        isImage
        withLogo
        Logo {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        ImgAltText
        Img {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        Description {
          data {
            id
            Description
          }
        }
      }
      HeroSection {
        id
        Title
        Description {
          data {
            Description
            childMarkdownRemark {
              html
            }
          }
        }
        CardList {
          id
          Title
          SubText
          Image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(formats: PNG, placeholder: BLURRED)
              }
            }
          }
        }
      }
      ProcessCard {
        id
        Title
        Image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED, width: 480)
            }
          }
        }
        DescriptionAlignment
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      SectionHeader3
      SectionList3 {
        id
        Title
        DescriptionAlignment
        Image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        Description {
          data {
            id
            childMarkdownRemark {
              html
            }
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

export default LeadV2Page;

export const Head: HeadFC = ({ data }: LeadV2PageProps) => {
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
