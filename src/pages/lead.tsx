import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { Footer, WhatLEADCard } from "../components";
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
import {
  Artefacts,
  Form,
  LEADSprints,
  OurStory,
  Process,
  SuccessStories,
  WhatLead,
} from "../layouts/lead-v2";
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
        <OurStory
          sectionTitle={data[currentLang]?.SectionHeader4}
          sectionList={data[currentLang]?.SectionList4}
        />
        <Artefacts
          sectionTitle={data[currentLang]?.SectionHeader5}
          description={data[currentLang]?.SectionDescription5}
          sectionList={data[currentLang]?.SectionList5}
        />
        <SuccessStories
          sectionTitle={data[currentLang]?.SectionHeader6}
          description={data[currentLang]?.SectionDescription6}
          sectionList={data[currentLang]?.SectionList6}
        />
        <Form
          formTitle={data[currentLang]?.FormTitle}
          formDescription={data[currentLang]?.FormDescription}
          ctaLabel={data[currentLang]?.FormCTALabel}
          ctaLink={data[currentLang]?.FormCTALink}
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
            childMarkdownRemark {
              html
            }
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
      SectionHeader4
      SectionList4 {
        id
        Title
        SubText
        Image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: PNG
                placeholder: BLURRED
                width: 40
                height: 40
              )
            }
          }
        }
      }
      SectionHeader5
      SectionDescription5
      SectionList5 {
        id
        Caption
        Image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: PNG
                placeholder: BLURRED
                width: 60
                height: 60
              )
            }
          }
        }
      }
      SectionHeader6
      SectionDescription6
      FormTitle
      FormDescription
      SectionList6 {
        id
        Image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED, width: 149)
            }
          }
        }
        Caption
      }
      FormCTALink
      FormCTALabel
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
