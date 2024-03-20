import { type HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import { renderToReadableStream } from "react-dom/server";
import ReactHtmlParser from "react-html-parser";
import { useRecoilValue } from "recoil";

import RAINDemoHTML from "../../../static/demo/RAIN/index.html";
import { Seo } from "../../components/seo/Seo";
import { langSelected as langSelectedAtom } from "../../states/atoms";

interface RAINDemoPageProps {
  data: any;
}

const RAINDemoPage: React.FC<PageProps> = ({ data }: RAINDemoPageProps) => {
  const currentLang = useRecoilValue(langSelectedAtom);

  const currentFooterSection = currentLang + "FooterSection";
  //   const [htmlResponse, setHtmlResponse] = React.useState<any>();

  React.useEffect(() => {
    // getRAINDemoApp();
  }, []);

  const getRAINDemoApp = async () => {
    // let response = await window.fetch(`/api/experience-rain`, {
    //   method: "GET",
    // });
    // setHtmlResponse(response);
  };

  //   console.log(htmlResponse);

  return (
    <main>
      <iframe
        src="https://experience-rain.netlify.app/"
        height="100%"
        width="100%"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
      ></iframe>
    </main>
  );
};

// export const query = graphql`
//   query AuroraPage {
//     en: strapiAurora(locale: { eq: "en" }) {
//       HeroBanner {
//         id
//         withLogo
//         isImage
//         Title
//         SubText
//         Description {
//           data {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//         Img {
//           localFile {
//             url
//           }
//           alternativeText
//         }
//       }
//       WorkingSectionTitle
//       WorkingImg {
//         localFile {
//           childImageSharp {
//             gatsbyImageData(formats: PNG, placeholder: BLURRED)
//           }
//         }
//         alternativeText
//         caption
//       }
//       AuroraVideo {
//         localFile {
//           url
//         }
//         alternativeText
//       }
//       VideoData {
//         Title
//         KeyPoints {
//           ListItem
//         }
//       }
//       FeatureSectionTitle
//       FeatureCards {
//         Heading
//         SubText
//         Img {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(formats: PNG, placeholder: BLURRED)
//             }
//           }
//           alternativeText
//           caption
//         }
//       }
//       StorySectionTitle
//       StoryCards {
//         Title
//         Description {
//           data {
//             Description
//           }
//         }
//         Img {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(formats: PNG, height: 326, placeholder: BLURRED)
//             }
//           }
//           alternativeText
//           caption
//         }
//       }
//       seo {
//         metaTitle
//         metaDescription
//         canonicalURL
//         metaViewport
//         keywords
//         metaImage {
//           localFile {
//             url
//           }
//         }
//       }
//     }
//     enFooterSection: strapiFooterSection(locale: { eq: "en" }) {
//       id
//       Footer {
//         id
//         PrimaryLogo {
//           alternativeText
//           caption
//           localFile {
//             url
//           }
//         }
//         SecondaryLogo {
//           alternativeText
//           caption
//           localFile {
//             url
//           }
//         }
//         PrimaryDescription {
//           data {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//         PrimaryLevelOneHeading
//         PrimaryLevelOneList {
//           id
//           Label
//           Link
//         }
//         PrimaryLevelTwoHeading
//         PrimaryLevelTwoList {
//           id
//           Link
//           Label
//         }
//         SecondaryLevelOneHeading
//         SecondaryLevelOneList {
//           id
//           Link
//           Label
//         }
//         SecondaryLevelTwoHeading
//         SecondaryLevelTwoList {
//           id
//           Link
//           Label
//         }
//         Copyright
//         PrimaryLogoLink
//         SecondaryLogoLink
//       }
//     }
//   }
// `;

export default RAINDemoPage;

// export const Head: HeadFC = ({ data }: RAINDemoPageProps) => {
//   const currentLang = useRecoilValue(langSelectedAtom);
// //   return (
// //     <Seo
// //       metaTitle={data[currentLang]?.seo?.metaTitle}
// //       metaDesc={data[currentLang]?.seo?.metaDescription}
// //       metaImg={data[currentLang]?.seo?.metaImage?.localFile?.url}
// //       canonicalUrl={data[currentLang]?.seo?.canonicalURL}
// //       metaViewport={data[currentLang]?.seo?.metaViewport}
// //       keywords={data[currentLang]?.seo?.keywords}
// //     />
// //   );
// };
