import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { StoryBanner } from "../components/banners/StoryBanner";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import { AcceleratorsLayout } from "../layouts/tech/components/AcceleratorsLayout";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";
import { TechPrinciplesLayout } from "../layouts/tech/components/TechPrinciplesLayout";
import { TechStackLayout } from "../layouts/tech/components/TechStackLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface TechnologyPageProps {
  data: any;
}

const TechnologyPage: React.FC<PageProps> = ({ data }: TechnologyPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#technologyMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile}
        title={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
      />
      <section id="technologyMain">
        <TechPrinciplesLayout
          primaryTitle={data[currentLang]?.PrincipleTitle}
          description={data[currentLang]?.PrincipleDescription}
          principleData={data[currentLang]?.PrincipleStackItem}
          subTitle={data[currentLang]?.PrincipleSubText}
        />
        <StoryBanner
          primaryTitle={data[currentLang]?.SolutionTitle}
          cardData={data[currentLang]?.SolutionCard}
          withCTA
          variant="tech"
          isImage={true}
        />
        <TechStackLayout
          sectionTitle={data[currentLang]?.StackTitle}
          data={data[currentLang]?.TechStackImages}
        />
        <AcceleratorsLayout
          sectionTitle={data[currentLang]?.AcceleratorsTitle}
          cardData={data[currentLang]?.AcceleratorList}
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
  query TechnologyPage {
    en: strapiTechnology(locale: { eq: "en" }) {
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
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
            url
          }
        }
      }
      PrincipleTitle
      PrincipleDescription
      PrincipleSubText
      PrincipleStackItem {
        id
        Title
        BackgroundColor
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
          id
        }
      }
      SolutionTitle
      SolutionCard {
        id
        PrimaryTitle
        CTAText
        CTALink
        isCTAEmail
        Image {
          alternativeText
          caption
          id
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      StackTitle
      TechStackImages {
        id
        isImage
        Image {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
            url
          }
        }
      }
      AcceleratorsTitle
      AcceleratorList {
        id
        isSecondary
        Title
        Link
        BackgroundImage {
          alternativeText
          caption
          localFile {
            url
          }
        }
        Logo {
          alternativeText
          caption
          id
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

export default TechnologyPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Technology::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}technology/`} />
    <meta name="title" content="NXT Tarento - Technology" />
    <meta
      name="description"
      content="Technology, like art, is a soaring exercise of the human imagination"
    />
    <meta
      name="viewport"
      content="width=device-width,height=device-height,initial-scale=1.0"
    />

    {/* Open graph */}
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content={`${process.env.GATSBY_SITE_URL}technology/`}
    />
    <meta property="og:title" content="NXT Tarento - Technology" />
    <meta
      property="og:description"
      content="Technology, like art, is a soaring exercise of the human imagination"
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/e69b1cdf9d4ee59dca8f2c06a35f8455/9ef3b/tech_hero_deb1d828ab.png`}
    />
    <meta property="og:site_name" content="Technology" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}technology/`}
    />
    <meta property="twitter:title" content="NXT Tarento - Technology" />
    <meta
      property="twitter:description"
      content="Technology, like art, is a soaring exercise of the human imagination"
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/e69b1cdf9d4ee59dca8f2c06a35f8455/9ef3b/tech_hero_deb1d828ab.png`}
    />
  </>
);
