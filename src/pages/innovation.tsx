import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { StoryBanner } from "../components/banners/StoryBanner";
import { Navbar } from "../components/navbar/Navbar";
import { FooterSection } from "../layouts/common";
import { ForgingInnovationLayout } from "../layouts/innovation/components/ForgingInnovationLayout";
import { AcceleratorsLayout } from "../layouts/tech/components/AcceleratorsLayout";
import { ContactUsLayout } from "../layouts/tech/components/ContactUsLayout";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface InnovationPageProps {
  data: any;
}

const InnovationPage: React.FC<PageProps> = ({ data }: InnovationPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#innovationMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        title={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
      />
      <section id="innovationMain">
        <ForgingInnovationLayout
          heading={data[currentLang]?.ForgingTitle}
          desc={data[currentLang]?.ForgingDescription}
          cardData={data[currentLang]?.ForgingArea}
          img={data[currentLang]?.ForgingImage}
        />
        <StoryBanner
          primaryTitle={data[currentLang]?.StoryTitle}
          cardData={data[currentLang]?.StoryCard}
          withCTA={false}
          isImage={false}
          spaceAboveCTA={false}
        />
        <StoryBanner
          primaryTitle={data[currentLang]?.ProgramTitle}
          subTitle={data[currentLang]?.ProgramSubTitle}
          cardData={data[currentLang]?.ProgramStory}
          bgImg={data[currentLang]?.ProgramBackground?.localFile?.url}
          withCTA
          isImage={false}
          variant="lead"
          spaceAboveCTA={false}
        />
        <AcceleratorsLayout
          sectionTitle={data[currentLang]?.AcceleratorTitle}
          cardData={data[currentLang]?.AcceleratorCards}
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
  query InnovationPage {
    en: strapiInnovation(locale: { eq: "en" }) {
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
      ForgingTitle
      ForgingDescription
      ForgingImage {
        alternativeText
        caption
        localFile {
          url
        }
      }
      ForgingArea {
        id
        Title
        Description
        BackgroundColor
      }
      StoryTitle
      StoryCard {
        id
        PrimaryTitle
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Image {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      ProgramTitle
      ProgramSubTitle
      ProgramBackground {
        localFile {
          url
        }
      }
      ProgramStory {
        id
        PrimaryTitle
        CTAText
        CTALink
        Image {
          alternativeText
          caption
          localFile {
            url
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
      AcceleratorTitle
      AcceleratorCards {
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

export default InnovationPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary meta tags */}
    <title>::NXT Tarento - Innovation::</title>
    <link rel="canonical" href={`${process.env.GATSBY_SITE_URL}innovation/`} />
    <meta name="title" content="NXT Tarento - Innovation" />
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
    <meta
      property="og:url"
      content={`${process.env.GATSBY_SITE_URL}innovation/`}
    />
    <meta property="og:title" content="NXT Tarento - Innovation" />
    <meta
      property="og:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta
      property="og:image"
      content={`${process.env.GATSBY_SITE_URL}static/d8556e7d840b4fa5b66d2c2e806ec9c3/b53dd/discover_pro_9a68b674f0.png`}
    />
    <meta property="og:site_name" content="Innovation" />

    {/* Twitter */}
    <meta property="twitter:card" content="website" />
    <meta
      property="twitter:url"
      content={`${process.env.GATSBY_SITE_URL}innovation/`}
    />
    <meta property="twitter:title" content="NXT Tarento - Innovation" />
    <meta
      property="twitter:description"
      content="NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento."
    />
    <meta
      property="twitter:image"
      content={`${process.env.GATSBY_SITE_URL}static/d8556e7d840b4fa5b66d2c2e806ec9c3/b53dd/discover_pro_9a68b674f0.png`}
    />
  </>
);
