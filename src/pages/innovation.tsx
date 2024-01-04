import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { StoryBanner } from "../components/banners/StoryBanner";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
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

export default InnovationPage;

export const Head: HeadFC = ({ data }: InnovationPageProps) => {
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
