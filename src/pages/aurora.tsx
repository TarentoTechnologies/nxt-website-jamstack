import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
import { HowItWorks, Stories, VideoSection } from "../layouts/aurora";
import { FooterSection } from "../layouts/common";
import { FeaturesLayout } from "../layouts/rain";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface AuroraPageProps {
  data: any;
}

const AuroraPage: React.FC<PageProps> = ({ data }: AuroraPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#auroraMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        id={data[currentLang]?.HeroBanner?.id}
        title={data[currentLang]?.HeroBanner?.Title}
        subText={data[currentLang]?.HeroBanner?.SubText}
        description={data[currentLang]?.HeroBanner?.Description}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        isAurora
      />
      <section id="auroraMain">
        <HowItWorks
          heading={data[currentLang]?.WorkingSectionTitle}
          imgSrc={data[currentLang]?.WorkingImg}
        />
        <VideoSection
          heading={data[currentLang]?.VideoData?.Title}
          listData={data[currentLang]?.VideoData?.KeyPoints}
          videoSrc={data[currentLang]?.AuroraVideo?.localFile?.url}
        />
        <FeaturesLayout
          title={data[currentLang]?.FeatureSectionTitle}
          cardsData={data[currentLang]?.FeatureCards}
          isImage={false}
        />
        <Stories
          title={data[currentLang]?.StorySectionTitle}
          cardsData={data[currentLang]?.StoryCards}
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
  query AuroraPage {
    en: strapiAurora(locale: { eq: "en" }) {
      HeroBanner {
        id
        withLogo
        isImage
        Title
        SubText
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        Img {
          localFile {
            url
          }
          alternativeText
        }
      }
      WorkingSectionTitle
      WorkingImg {
        localFile {
          childImageSharp {
            gatsbyImageData(formats: PNG, placeholder: BLURRED)
          }
        }
        alternativeText
        caption
      }
      AuroraVideo {
        localFile {
          url
        }
        alternativeText
      }
      VideoData {
        Title
        KeyPoints {
          ListItem
        }
      }
      FeatureSectionTitle
      FeatureCards {
        Heading
        SubText
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
      }
      StorySectionTitle
      StoryCards {
        Title
        Description {
          data {
            Description
          }
        }
        Img {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, height: 326, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
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

export default AuroraPage;

export const Head: HeadFC = ({ data }: AuroraPageProps) => {
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
