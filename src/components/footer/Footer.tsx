import { Link } from "gatsby";
import ReactHtmlParser from "react-html-parser";

import {
  dLinkLeft,
  dLinkRight,
  directlink,
  dlinkLeft,
  dlinkRight,
  floatRight,
  footer,
  footerDesc,
  footerEmail,
  footerHeading,
  footerRight,
  marginBtm,
  marginBtm1,
  nxtLogo,
  rights,
  tarentoLogo,
  topBar,
} from "./Footer.module.css";

interface FooterProps {
  data: any;
}

export const Footer = ({ data }: FooterProps) => {
  console.log(data);
  return (
    <div className={`container-fluid ${footer}`}>
      <div className={`row`}>
        {/* Column one */}
        <div className={`col-sm-12 col-md-12 col-xl-8`}>
          <div className={`d-block d-md-none ${topBar}`}></div>
          <div className={`d-block d-md-none ${tarentoLogo} ${footerRight}`}>
            <Link to={data?.PrimaryLogoLink} rel="canonical">
              <img
                src={data?.PrimaryLogo?.localFile?.url}
                alt={data?.PrimaryLogo?.alternativeText}
                title={data?.PrimaryLogo?.caption}
                width="187"
                height="43"
              />
            </Link>
          </div>
          <div
            className={`d-none d-md-block d-xl-none ${tarentoLogo} ${footerRight} ${floatRight}`}
          >
            <a href={data?.SecondaryLogoLink} rel="canonical" target="_blank">
              <img
                src={data?.SecondaryLogo?.localFile?.url}
                alt={data?.SecondaryLogo?.alternativeText}
                title={data?.SecondaryLogo?.caption}
                width="187"
                height="43"
              />
            </a>
          </div>
          <div className={`${nxtLogo}`}>
          <Link to={data?.PrimaryLogoLink} rel="canonical">
              <img
                src={data?.PrimaryLogo?.localFile?.url}
                alt={data?.PrimaryLogo?.alternativeText}
                title={data?.PrimaryLogo?.caption}
                width="72"
                height="72"
              />
            </Link>
          </div>

          <div className={`d-none d-md-block ${topBar}`}></div>
          <div className={`row ${marginBtm}`}>
            <div className={`col-xs-12 col-sm-12 col-md-6 ${footerDesc}`}>
              <p>
                {ReactHtmlParser(
                  data?.PrimaryDescription?.data?.childMarkdownRemark?.html
                )}
              </p>
              {/* <p className={`${footerHeading}`}>
                Reach us at{" "}
                <a
                  href="mailto:hello@tarento.com;"
                  className={`${footerEmail}`}
                  rel="canonical"
                >
                  {data?.mailId}
                </a>
              </p> */}
            </div>
            <div className="col-md-6 d-flex p-0">
              <div
                className={`${directlink} ${dlinkLeft} ${dLinkLeft} offset-xl-2`}
              >
                <p className={`${footerHeading}`}>
                  {data?.PrimaryLevelOneHeading}
                </p>
                <ul>
                  {data?.PrimaryLevelOneList.map((item: any, index: number) => (
                    <li key={item?.id}>
                      <Link to={item?.Link} rel="canonical">
                        {item?.Label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${directlink} ${dlinkRight} ${dLinkRight} offset-xl-2`}
              >
                <p className={`${footerHeading}`}>
                  {data?.PrimaryLevelTwoHeading}
                </p>
                <ul>
                  {data?.PrimaryLevelTwoList?.map(
                    (item: any, index: number) => (
                      <li key={item?.id}>
                        <Link to={item?.Link} rel="canonical">
                          {item?.Label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Column two */}
        <div className={`col-sm-12 col-md-12 col-xl-4`}>
          <div className={`d-none d-xl-block ${tarentoLogo} ${footerRight}`}>
            <a href={data?.SecondaryLogoLink} rel="canonical" target="_blank">
              <img
                src={data?.SecondaryLogo?.localFile?.url}
                alt={data?.SecondaryLogo?.alternativeText}
                title={data?.SecondaryLogo?.caption}
                width="187"
                height="43"
              />
            </a>
          </div>
          <div className={`${topBar} col-md-6 col-lg-12`}></div>
          <div className={`row`}>
            <div
              className={`col-xs-6 col-sm-12 col-md-12 col-lg-12 ${marginBtm1} d-flex ps-0`}
            >
              <div className={`${directlink} ${dlinkLeft} offset-xl-1`}>
                <p className={`${footerHeading}`}>
                  {data?.SecondaryLevelOneHeading}
                </p>
                <ul>
                  {data?.SecondaryLevelOneList?.map(
                    (item: any, index: number) => (
                      <li key={item?.id}>
                        <a href={item?.Link} rel="canonical">
                          {item?.Label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div
                className={`${directlink} ${dlinkRight} offset-lg-1 offset-xl-2`}
              >
                <p className={`${footerHeading}`}>
                  {data?.SecondaryLevelOneHeading}
                </p>
                <ul>
                  {data?.SecondaryLevelTwoList?.map(
                    (item: any, index: number) => (
                      <li key={item?.id}>
                        <a href={item?.Link} rel="canonical">
                          {item?.Label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12`}>
          <p className={`${footerHeading} ${rights}`}>{data?.Copyright}</p>
        </div>
      </div>
    </div>
  );
};
