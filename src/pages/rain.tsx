import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { BannerWithCTA } from "../components";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
import { FooterSection } from "../layouts/common";
import {
  FeaturesLayout,
  Form,
  LiveExpLayout,
  ReferencesLayout,
  WorkingLayout,
} from "../layouts/rain";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface RainPageProps {
  data: any;
}

const RainPage: React.FC<PageProps> = ({ data }: RainPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#rainMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        title={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
        logo={data[currentLang]?.HeroBanner?.Logo?.localFile?.url}
        subTextBold
      />
      <section id="rainMain">
        <WorkingLayout
          title={data[currentLang]?.HowItWorks?.SectionTitle}
          desc={data[currentLang]?.HowItWorks?.DescriptionOne}
          img={data[currentLang]?.HowItWorks?.ProcessImage?.localFile?.url}
        />
        <FeaturesLayout
          title={data[currentLang]?.FeatureSectionTitle}
          cardsData={data[currentLang]?.FeatureListCard}
          isImage={false}
          bgGrey
        />
        <LiveExpLayout
          title={data[currentLang]?.LiveExpTitle}
          description={data[currentLang]?.LiveExpDesc}
          cardList={data[currentLang]?.LiveExpCards}
        />
        <ReferencesLayout
          title={data[currentLang]?.ReferenceSectionTitle}
          cardsData={data[currentLang]?.ReferenceCard}
        />
        <BannerWithCTA
          title={data[currentLang]?.BottomBanner?.Title}
          bgImg={data[currentLang]?.BottomBanner?.BgImg?.localFile?.url}
          CTAtext={data[currentLang]?.BottomBanner?.CTAButton?.Label}
          CTAlink={data[currentLang]?.BottomBanner?.CTAButton?.Link}
          isCTAExternal={data[currentLang]?.BottomBanner?.isCTAExternal}
        />
        <Form
          sectionTitle={data[currentLang]?.Form?.Title}
          sectionDescription={data[currentLang]?.Form?.Description}
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
  query RainPage {
    en: strapiRain(locale: { eq: "en" }) {
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
          alternativeText
          caption
        }
        SubText
        Logo {
          alternativeText
          caption
          localFile {
            url
          }
        }
      }
      HowItWorks {
        id
        SectionTitle
        ProcessImage {
          alternativeText
          caption
          localFile {
            url
          }
        }
        DescriptionOne
      }
      FeatureSectionTitle
      FeatureListCard {
        id
        SubText
        Heading
        Img {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
      }
      ReferenceCard {
        id
        Heading
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      ReferenceSectionTitle
      LiveExpTitle
      LiveExpDesc
      LiveExpCards {
        Title
        Description
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
        }
        CTAText
        CTALink
        isCTAExternal
      }
      BottomBanner {
        Title
        CTAButton {
          Label
          Link
        }
        BgImg {
          localFile {
            url
          }
        }
        isCTAExternal
      }
      Form {
        id
        Title
        Description {
          data {
            Description
            id
          }
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

export default RainPage;

export const Head: HeadFC = ({ data }: RainPageProps) => {
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
