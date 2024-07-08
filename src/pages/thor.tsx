import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { useRecoilValue } from "recoil";

import navbarImg from "../../static/images/logo-inner.svg";
import { BannerWithCTA } from "../components";
import { HeroBannerForTDI } from "../components/banners/HeroBannerForTDI";
import { Navbar } from "../components/navbar/Navbar";
import { Seo } from "../components/seo/Seo";
import { FooterSection } from "../layouts/common";
import { GetInTouch } from "../layouts/pulse";
import { LiveExpLayout } from "../layouts/rain";
import {
  Avatars,
  CaseStudies,
  Features,
  MultiChannel,
  UseCases,
} from "../layouts/thor";
import { langSelected as langSelectedAtom } from "../states/atoms";

interface ThorPageProps {
  data: any;
}

const ThorPage: React.FC<PageProps> = ({ data }: ThorPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";

  return (
    <main className="">
      <ul className="skip-links">
        <li>
          <a href="#thorMain" rel="canonical">
            Skip to main content
          </a>
        </li>
      </ul>
      <Navbar imgSrc={navbarImg} imgAltText={"NXT logo"} link={"/"} />
      <HeroBannerForTDI
        title={data[currentLang]?.HeroBanner?.SubText}
        img={data[currentLang]?.HeroBanner?.Img?.localFile?.url}
        imgAltText={data[currentLang]?.HeroBanner?.Img?.alternativeText}
        description={data[currentLang]?.HeroBanner?.Description}
        mainTitle={data[currentLang]?.HeroBanner?.Title}
        isImage={data[currentLang]?.HeroBanner?.isImage}
        withLogo={data[currentLang]?.HeroBanner?.withLogo}
      />
      <section id="thorMain">
        <Avatars
          title={data[currentLang]?.TwoAvatars?.PrimaryTitle}
          list={data[currentLang]?.TwoAvatars?.AvatarList}
          subText={data[currentLang]?.TwoAvatars?.PrimaryDescription}
        />
        <Features imgSrc={data[currentLang]?.Capabilities} />
        <MultiChannel
          title={data[currentLang]?.MultiChannelEngagement?.Title}
          subText={data[currentLang]?.MultiChannelEngagement?.Description}
          imgSrc={data[currentLang]?.MultiChannelEngagement?.Image}
          list={data[currentLang]?.MultiChannelEngagement?.ChannelList}
        />
        <LiveExpLayout
          title={data[currentLang]?.LiveExpTitle}
          description={data[currentLang]?.LiveExpDesc}
          cardList={data[currentLang]?.LiveExpCards}
          isThorPage={true}
        />
        <CaseStudies
          title={data[currentLang]?.CaseStudiesTitle}
          list={data[currentLang]?.CaseStudiesList}
        />
        <UseCases
          title={data[currentLang]?.UseCaseTitle}
          list={data[currentLang]?.UseCasesList}
          subText={data[currentLang]?.UseCaseSubText}
        />
        <BannerWithCTA
          title={data[currentLang]?.BottomBanner?.Title}
          bgImg={data[currentLang]?.BottomBanner?.BgImg?.localFile?.url}
          CTAtext={data[currentLang]?.BottomBanner?.CTAButton?.Label}
          CTAlink={data[currentLang]?.BottomBanner?.CTAButton?.Link}
          isCTAExternal={data[currentLang]?.BottomBanner?.isCTAExternal}
        />
        <GetInTouch
          heading={data[currentLang]?.GetInTouch?.Title}
          subText={data[currentLang]?.GetInTouch?.Description}
          btnLabel={data[currentLang]?.GetInTouch?.Tag?.Label}
          btnLink={data[currentLang]?.GetInTouch?.Tag?.Link}
          imgSrc={data[currentLang]?.GetInTouch?.ImgSrc}
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
  query ThorPage {
    en: strapiThor(locale: { eq: "en" }) {
      id
      HeroBanner {
        id
        isImage
        withLogo
        Title
        SubText
        Img {
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
      TwoAvatars {
        id
        PrimaryTitle
        PrimaryDescription
        AvatarList {
          id
          Title
          Description
          Logo {
            alternativeText
            caption
            localFile {
              url
            }
          }
          Video {
            localFile {
              url
            }
          }
        }
      }
      Capabilities {
        alternativeText
        caption
        localFile {
          childImageSharp {
            gatsbyImageData(formats: PNG, placeholder: BLURRED)
          }
        }
      }
      CaseStudiesTitle
      CaseStudiesList {
        id
        Heading
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
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
      }
      MultiChannelEngagement {
        id
        Title
        Description
        Image {
          alternativeText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
        }
        ChannelList {
          id
          Title
          Description
        }
      }
      UseCaseTitle
      UseCasesList {
        id
        Image {
          alternativeText
          caption
          localFile {
            url
          }
        }
        Caption
      }
      UseCaseSubText
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
      GetInTouch {
        Title
        Description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        ImgSrc {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: PNG, placeholder: BLURRED)
            }
          }
          alternativeText
          caption
        }
        Tag {
          Label
          Link
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

export default ThorPage;

export const Head: HeadFC = ({ data }: ThorPageProps) => {
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
